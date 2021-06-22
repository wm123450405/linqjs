const path = require('path');
const fs = require('fs');
const extend = require('extend');
const Enumerable = require('linq-js');
const common = require('./src/scripts/common');

const resources = path.join(__dirname, 'src', 'resources');
const scripts = path.join(__dirname, 'src', 'scripts');
const metaFile = 'meta.json';
const directoryMetaFile = 'directory.meta.json';
const directoryFile = 'directory.json';
const captionFile = 'caption.json';
const examplesFile = 'examples';
const jsonExt = '.json';
const jsExt = '.js';
const vueExt = '.vue';

const pack = process.env.NODE_ENV === 'production';

const watchs = [];
const watch = (path, listener) => {
	if (pack) return;
	if (watchs.indexOf(path) === -1) {
		fs.watch(path, listener);
		watchs.push(path);
	}
};

//create lang.json
const createLang = () => {
	let langNames = fs.readdirSync(resources);
	let lang = [];
	for (let langName of langNames) {
		let langPath = path.join(resources, langName);
		if (fs.statSync(langPath).isDirectory()) {
			watch(langPath, (eventType, filename) => {
				if (filename === metaFile) {
					createLang();
				} else if (filename === examplesFile) {
                    createScripts(langName);
				}
			});
			let metaPath = path.join(langPath, metaFile);
			if (fs.existsSync(metaPath)) {
				try {
					let meta = JSON.parse(fs.readFileSync(metaPath));
					meta.code = langName;
					lang.push(meta);
				} catch(e) {
					console.error(e);
				}
			}
			let examplesPath = path.join(langPath, examplesFile);
			if (fs.existsSync(examplesPath) && fs.statSync(examplesPath).isDirectory()) {
                createScripts(langName);
			}
		}
	}
	fs.writeFileSync(path.join(resources, 'lang.json'), JSON.stringify(lang, null, '\t'));
	console.log('File lang.json is created');
};
//create apis
const createApis = (refreshLangName, refreshClassName) => {
	let langNames = fs.readdirSync(resources);
	for (let langName of langNames) {
		if (typeof refreshLangName !== 'undefined' && common.defaultLang !== refreshLangName && langName !== refreshLangName) {
			continue;
		}
		let langPath = path.join(resources, langName);
		if (fs.statSync(langPath).isDirectory()) {
			watch(langPath, (eventType, filename) => {
				if (filename === 'apis') {
					createApis(langName);
				}
			});
			let apisPath = path.join(langPath, 'apis');
			if (fs.existsSync(apisPath)) {
				watch(apisPath, (eventType, filename) => {
					if (filename) {
                        let apiPath = path.join(apisPath, filename);
                        if (fs.existsSync(apiPath) && fs.statSync(apiPath).isDirectory()) {
                            createApis(langName);
                        }
					}
				});
				let classNames = fs.readdirSync(apisPath);
				for (let className of classNames) {
					if (typeof refreshClassName !== 'undefined' && className !== refreshClassName) {
						continue;
					}
					let classPath = path.join(apisPath, className);
					if (fs.statSync(classPath).isDirectory()) {
						watch(classPath, (eventType, filename) => {
							let dirPath = path.join(classPath, filename);
							if (filename === metaFile) {
								createApis(langName, className);
							} else if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
								createApis(langName, className);
							}
						});
						try {
							let classMeta = JSON.parse(fs.readFileSync(path.join(classPath, metaFile)));
							classMeta.name = className;
							classMeta.properties = [];
							classMeta.methods = [];

							let propertiesPath = path.join(classPath, 'properties');
							if (fs.existsSync(propertiesPath)) {
								watch(propertiesPath, () => {
									createApis(langName, className);
								});
								let propertyFiles = fs.readdirSync(propertiesPath);
								for (let propertyFile of propertyFiles) {
									if (path.extname(propertyFile) === jsonExt) {
										try {
											let propertyMeta = JSON.parse(fs.readFileSync(path.join(propertiesPath, propertyFile)));
											let property = {
												name: path.basename(propertyFile, jsonExt),
												historys: common.historys(propertyMeta.historys).select(history => ({
													since: history.since,
													deprecated: history.deprecated,
													static: history.static,
													override: history.override,
													description: history.description,
													readonly: history.readonly,
                                                    default: history.default
												})).toArray()
											};
											classMeta.properties.push(property);
										} catch(e) {
											console.error(e);
										}
									}
								}
							}

							let methodsPath = path.join(classPath, 'methods');
							if (fs.existsSync(methodsPath)) {
								watch(methodsPath, () => {
									createApis(langName, className);
								});
								let methodFiles = fs.readdirSync(methodsPath);
								for (let methodFile of methodFiles) {
									if (path.extname(methodFile) === jsonExt) {
										try {
											let methodMeta = JSON.parse(fs.readFileSync(path.join(methodsPath, methodFile)));

											let method = {
												name: path.basename(methodFile, jsonExt),
												historys: common.historys(methodMeta.historys).select(history => ({
													since: history.since,
													deprecated: history.deprecated,
													overloads: history.overloads.map(overload => ({
														static: overload.static,
														override: overload.override,
														description: overload.description,
														parameters: overload.parameters && overload.parameters.map(parameter => ({
															name: parameter.name
														}))
													}))
												})).toArray()
											};
											classMeta.methods.push(method);
										} catch(e) {
											console.error(e);
										}
									}
								}
							}

							fs.writeFileSync(path.join(apisPath, className + jsonExt), JSON.stringify(classMeta, null, '\t'));
							console.log(`File ${ className }.json for language ${ langName } is created`);
						} catch(e) {
							console.error(e);
						}
					}
				}
			}
		}
	}
};

const createDirectory = refreshLangName => {
	let defaultDirectoryMeta = JSON.parse(fs.readFileSync(path.join(resources, common.defaultLang, directoryMetaFile)));
	let defaultCaption = JSON.parse(fs.readFileSync(path.join(resources, common.defaultLang, captionFile)));
	let defaultGuides = Enumerable.asEnumerable(fs.readdirSync(path.join(resources, common.defaultLang, 'guides'))).where(name => path.extname(name) === jsonExt).orderBy(element => path.basename(element, jsonExt), Enumerable.comparers.array([
		"instance", "use", "config", "selector", "predicate", "comparer", "action", "setter", "iterator"
	], true)).toArray();
	let defaultApis = Enumerable.asEnumerable(fs.readdirSync(path.join(resources, common.defaultLang, 'apis'))).where(name => path.extname(name) === jsonExt).orderBy(element => path.basename(element, jsonExt)).toArray();
	// let defaultChanges = Enumerable(fs.readdirSync(path.join(resources, common.defaultLang, 'change'))).where(name => path.extname(name) === jsonExt).orderBy(element => path.basename(element, jsonExt), (element, other) => {
	// 	if (element === other) {
	// 		return 0;
	// 	} else if (common.isNewer(element, other)) {
	// 		return -1;
	// 	} else {
	// 		return 1;
	// 	}
	// }).toArray();
	let defaultChanges = Enumerable.asEnumerable(fs.readdirSync(path.join(resources, common.defaultLang, 'change'))).where(name => path.extname(name) === jsonExt).orderBy(element => path.basename(element, jsonExt), Enumerable.comparers.less(common.isNewer)).toArray();

	common.versions = Enumerable.select(defaultChanges, change => path.basename(change, jsonExt)).toArray();
	fs.writeFileSync(path.join(resources, 'versions.json'), JSON.stringify(common.versions));
	let versions = [...common.versions];
    if (!versions[versions.length - 1].endsWith('pre')) versions.push(common.preVersion(versions[versions.length - 1]));
    fs.writeFileSync(path.join(scripts, 'history.js'), 'module.exports = (version, callback, pre, post) => { ' + versions.reverse().map(version => `if (version === '${ version }') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('${ common.module(version) }')); post && post(); } }, '${ common.module(version) }');`).join(' else ') + ' };');

	console.log('apis:' + defaultApis);

	let langNames = fs.readdirSync(resources);
	for (let langName of langNames) {
		if (typeof refreshLangName !== 'undefined' && common.defaultLang !== refreshLangName && langName !== refreshLangName) {
			continue;
		}
		let langPath = path.join(resources, langName);
		if (fs.statSync(langPath).isDirectory()) {
			let caption = defaultCaption;
			let captionPath = path.join(langPath, captionFile);
			if (fs.existsSync(captionPath)) {
				watch(captionPath, () => {
					createDirectory(langName);
				});
				try {
					caption = extend(true, {}, defaultCaption, JSON.parse(fs.readFileSync(captionPath)));
				} catch(e) {
					console.error(e);
				}
			}

			let directorys = defaultDirectoryMeta;
			let directoryMetaPath = path.join(langPath, directoryMetaFile);
			if (fs.existsSync(directoryMetaPath)) {
				let changes = [];
				let changesPath = path.join(langPath, 'change');
				if (fs.existsSync(changesPath)) {
					watch(changesPath, () => {
						createDirectory(langName);
					});
					for (let change of defaultChanges) {
						let version = path.basename(change, jsonExt);
						let changePath = path.join(changesPath, change);
						try {
							let content = JSON.parse(fs.readFileSync(path.join(resources, common.defaultLang, 'change', change)));
							if (fs.existsSync(changePath)) {
								content = extend(true, {}, content, JSON.parse(fs.readFileSync(changePath)));
							}
							content.version = version;
							changes.push(content);
						} catch(e) {
							console.error(e);
						}
					}
				}
				fs.writeFileSync(path.join(langPath, 'change.json'), JSON.stringify(changes, null, '\t'));
				console.log(`change file for language ${ langName } is created`);

				watch(directoryMetaPath, () => {
					createDirectory(langName);
				});
				try {
					directorys = extend(true, [], defaultDirectoryMeta, JSON.parse(fs.readFileSync(directoryMetaPath)));
				} catch(e) {
					console.error(e);
				}

				let guides = {
					code: "guides",
					title: caption.guide,
					children: []
				};
				let guidesPath = path.join(langPath, 'guides');
				if (fs.existsSync(guidesPath)) {
					watch(guidesPath, (eventType, filename) => {
						if (path.extname(filename) === jsonExt) {
							createDirectory(langName);
						}
					});
				}
				for (let guide of defaultGuides) {
					let guidePath = path.join(guidesPath, guide);
					try {
						let guideContent = JSON.parse(fs.readFileSync(path.join(resources, common.defaultLang, 'guides', guide)));
						if (fs.existsSync(guidePath)) {
							guideContent = extend(true, [], guideContent, JSON.parse(fs.readFileSync(guidePath)));
						}
						guides.children.push({
							code: path.basename(guide, jsonExt),
							title: guideContent.title,
							since: guideContent.since || common.earliest,
							deprecated: guideContent.deprecated || common.newest
						});
					} catch(e) {
						console.error(e);
					}
				}
				directorys.splice(directorys.indexOf("guides"), 1, guides);

				let apis = {
					code: "apis",
					title: caption.apis,
					children: []
				};
				let apisPath = path.join(langPath, 'apis');
				if (fs.existsSync(apisPath)) {
					watch(apisPath, (eventType, filename) => {
						if (path.extname(filename) === jsonExt) {
							createDirectory(langName);
						}
					});
				}
				for (let api of defaultApis) {
					let apiPath = path.join(apisPath, api);
					try {
						let apiContent = JSON.parse(fs.readFileSync(path.join(resources, common.defaultLang, 'apis', api)));
						if (fs.existsSync(apiPath)) {
							apiContent = extend(true, [], apiContent, JSON.parse(fs.readFileSync(apiPath)));
						}
						let since = apiContent.since || common.lastest, deprecated = apiContent.deprecated || common.newest;
						for (let method of (apiContent.methods || [])) {
							since = common.minVersion(Enumerable.min(common.historys(method.historys), history => history.since, common.versionComparer), since);
							deprecated = common.maxVersion(Enumerable.max(common.historys(method.historys), history => history.deprecated || common.lastest, common.versionComparer), deprecated);
						}
						for (let property of (apiContent.properties || [])) {
							since = common.minVersion(Enumerable.min(common.historys(property.historys), history => history.since, common.versionComparer), since);
							deprecated = common.maxVersion(Enumerable.max(common.historys(property.historys), history => history.deprecated || common.lastest, common.versionComparer), deprecated);
						}
						apis.children.push({
							code: path.basename(api, jsonExt),
							title: `${ apiContent.name || path.basename(api, jsonExt) } ${ common.capitalize(caption[apiContent.type]) }`,
							since: since,
							deprecated: deprecated
						});
					} catch(e) {
						console.error(e);
					}
				}
				directorys.splice(directorys.indexOf("apis"), 1, apis);

				fs.writeFileSync(path.join(langPath, directoryFile), JSON.stringify(directorys, null, '\t'));
				console.log(`Directory file for language ${ langName } is created`);
			}
		}
	}
};

const createScripts = lang => {
	let examplesPath = path.join(resources, lang, examplesFile);
	watch(examplesPath, (eventType, filename) => {
		if (filename) {
            let examplePath = path.join(examplesPath, filename);
            if (fs.existsSync(examplePath) && fs.statSync(examplePath).isDirectory()) {
                createScripts(lang);
            }
		}
	});
	let classNames = fs.readdirSync(examplesPath);
	for (let className of classNames) {
		let classPath = path.join(examplesPath, className);
		if (fs.statSync(classPath).isDirectory()) {
			watch(classPath, (eventType, filename) => {
				let dirPath = path.join(classPath, filename);
				if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
					createScripts(lang);
				} else if (path.extname(filename) !== jsonExt) {
                    createScripts(lang);
                }
			});
			let classExamples = { };
			let classExampleFiles = fs.readdirSync(classPath);
			for (let classExampleFile of classExampleFiles) {
				let classExamplePath = path.join(classPath, classExampleFile);
				if (path.extname(classExampleFile) !== jsonExt && fs.statSync(classExamplePath).isFile()) {
					classExamples[classExampleFile] = fs.readFileSync(classExamplePath, { encoding: 'UTF-8' });
				}
			}

			let propertiesPath = path.join(classPath, 'properties');
			if (fs.existsSync(propertiesPath)) {
				watch(propertiesPath, (eventType, filename) => {
					let propertyPath = path.join(propertiesPath, filename);
					if (fs.existsSync(propertyPath) && fs.statSync(propertyPath).isDirectory()) {
						createScripts(lang);
					}
				});
				let propertyNames = fs.readdirSync(propertiesPath);
				for (let propertyName of propertyNames) {
					let propertyPath = path.join(propertiesPath, propertyName);
					if (fs.statSync(propertyPath).isDirectory()) {
						watch(propertyPath, () => {
							createScripts(lang);
						});
						let propertyExamples = { };
						let exampleFiles =  fs.readdirSync(propertyPath);
						for (let exampleFile of exampleFiles) {
							if (path.extname(exampleFile) === jsExt) {
                                let examplePath = path.join(propertyPath, exampleFile);
                                if (path.extname(exampleFile) !== jsonExt && fs.statSync(examplePath).isFile()) {
                                    propertyExamples[exampleFile] = fs.readFileSync(examplePath, { encoding: 'UTF-8' });
                                }
							}
						}
						fs.writeFileSync(path.join(propertiesPath, propertyName + jsonExt), JSON.stringify(propertyExamples, null, '\t'));
					}
				}
			}

			let methodsPath = path.join(classPath, 'methods');
			if (fs.existsSync(methodsPath)) {
				watch(methodsPath, (eventType, filename) => {
					if (filename) {
                        let methodPath = path.join(methodsPath, filename);
                        if (fs.existsSync(methodPath) && fs.statSync(methodPath).isDirectory()) {
                            createScripts(lang);
                        }
					}
				});
				let methodNames = fs.readdirSync(methodsPath);
				for (let methodName of methodNames) {
					let methodPath = path.join(methodsPath, methodName);
					if (fs.statSync(methodPath).isDirectory()) {
						watch(methodPath, () => {
							createScripts(lang);
						});
						let methodExamples = { };
						let exampleFiles =  fs.readdirSync(methodPath);
						for (let exampleFile of exampleFiles) {
                            if (path.extname(exampleFile) === jsExt) {
                                let examplePath = path.join(methodPath, exampleFile);
                                if (path.extname(exampleFile) !== jsonExt && fs.statSync(examplePath).isFile()) {
                                    methodExamples[exampleFile] = fs.readFileSync(examplePath, {encoding: 'UTF-8'});
                                }
                            }
						}
						fs.writeFileSync(path.join(methodsPath, methodName + jsonExt), JSON.stringify(methodExamples, null, '\t'));
					}
				}
			}

			fs.writeFileSync(path.join(examplesPath, className + jsonExt), JSON.stringify(classExamples, null, '\t'));
		}
	}
};

const createComponents = () => {
	let componentsPath = path.join(__dirname, 'src', 'components');
	if (fs.existsSync(componentsPath)) {
		watch(componentsPath, (eventType, filename) => {
			if (path.extname(filename) === vueExt) {
				createComponents();
			}
		});
		let componentNames = fs.readdirSync(componentsPath);
		let components = [];
		for (let componentName of componentNames) {
			if (path.extname(componentName) === vueExt) {
				components.push(path.basename(componentName, vueExt));
			}
		}
		fs.writeFileSync(path.join(__dirname, 'src', 'scripts', 'components.js'), 'export default ' + JSON.stringify(components));
	}
};

createComponents();
createLang();
createApis();
createDirectory();
watch(resources, (eventType, filename) => {
	let dirPath = path.join(resources, filename);
	if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
		createLang();
		createApis();
		createDirectory();
	}
});