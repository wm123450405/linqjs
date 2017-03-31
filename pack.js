const path = require('path');
const fs = require('fs');

const resources = path.join(__dirname, 'src', 'resources');
const metaFile = 'meta.json';
const jsonExt = '.json';

const watchs = [];
const watch = (path, listener) => {
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
		}
	}
	fs.writeFileSync(path.join(resources, 'lang.json'), JSON.stringify(lang, null, '\t'));
	console.log('File lang.json is created');
};
//create apis
const createApis = () => {
	let langNames = fs.readdirSync(resources);
	for (let langName of langNames) {
		let langPath = path.join(resources, langName);
		if (fs.statSync(langPath).isDirectory()) {
			watch(langPath, (eventType, filename) => {
				if (filename === 'apis') {
					createApis();
				}
			});
			let apisPath = path.join(langPath, 'apis');
			if (fs.existsSync(apisPath)) {
				watch(apisPath, (eventType, filename) => {
					if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) {
						createApis();
					}
				});
				let classNames = fs.readdirSync(apisPath);
				for (let className of classNames) {
					let classPath = path.join(apisPath, className);
					watch(classPath, (eventType, filename) => {
						if (filename === metaFile) {
							createApis();
						} else if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) {
							createApis();
						}
					});
					if (fs.statSync(classPath).isDirectory()) {
						try {
							let classMeta = JSON.parse(fs.readFileSync(path.join(classPath, metaFile)));
							classMeta.name = className;
							classMeta.properties = [];
							classMeta.methods = [];

							let propertiesPath = path.join(classPath, 'properties');
							watch(propertiesPath, (eventType, filename) => {
								createApis();
							});
							if (fs.existsSync(propertiesPath)) {
								let propertyFiles = fs.readdirSync(propertiesPath);
								for (let propertyFile of propertyFiles) {
									if (path.extname(propertyFile) === jsonExt) {
										try {
											let propertyMeta = JSON.parse(fs.readFileSync(path.join(propertiesPath, propertyFile)));
											let property = {
												name: path.basename(propertyFile, jsonExt),
												static: propertyMeta.static,
												description: propertyMeta.description
											};
											classMeta.properties.push(property);
										} catch(e) {
											console.error(e);
										}
									}
								}
							}

							let methodsPath = path.join(classPath, 'methods');
							watch(methodsPath, (eventType, filename) => {
								createApis();
							});
							if (fs.existsSync(methodsPath)) {
								let methodFiles = fs.readdirSync(methodsPath);
								for (let methodFile of methodFiles) {
									if (path.extname(methodFile) === jsonExt) {
										try {
											let methodMeta = JSON.parse(fs.readFileSync(path.join(methodsPath, methodFile)));

											let method = {
												name: path.basename(methodFile, jsonExt),
												overloads: methodMeta.overloads.map(overload => ({
													static: overload.static,
													description: overload.description,
													parameters: overload.parameters.map(parameter => ({
														name: parameter.name
													}))
												}))
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

const createScripts = () => {
	let examplesPath = path.join(resources, 'examples');
	watch(examplesPath, (eventType, filename) => {
		if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) {
			createScripts();
		}
	});
	let classNames = fs.readdirSync(examplesPath);
	for (let className of classNames) {
		let classPath = path.join(examplesPath, className);
		if (fs.statSync(classPath).isDirectory()) {
			watch(classPath, (eventType, filename) => {
				if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) {
					createScripts();
				} else if (path.extname(filename) !== jsonExt) {
					 createScripts();
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
					if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) {
						createScripts();
					}
				});
				let propertyNames = fs.readdirSync(propertiesPath);
				for (let propertyName of propertyNames) {
					let propertyPath = path.join(propertiesPath, propertyName);
					if (fs.statSync(propertyPath).isDirectory()) {
						watch(propertyPath, (eventType, filename) => {
							createScripts();
						});
						let propertyExamples = { };
						let exampleFiles =  fs.readdirSync(propertyPath);
						for (let exampleFile of exampleFiles) {
							let examplePath = path.join(propertyPath, exampleFile);
							if (path.extname(exampleFile) !== jsonExt && fs.statSync(examplePath).isFile()) {
								propertyExamples[exampleFile] = fs.readFileSync(examplePath, { encoding: 'UTF-8' });
							}
						}
						fs.writeFileSync(path.join(propertiesPath, propertyName + jsonExt), JSON.stringify(propertyExamples, null, '\t'));
					}
				}
			}

			let methodsPath = path.join(classPath, 'methods');
			if (fs.existsSync(methodsPath)) {
				watch(methodsPath, (eventType, filename) => {
					if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) {
						createScripts();
					}
				});
				let methodNames = fs.readdirSync(methodsPath);
				for (let methodName of methodNames) {
					let methodPath = path.join(methodsPath, methodName);
					if (fs.statSync(methodPath).isDirectory()) {
						watch(methodPath, (eventType, filename) => {
							createScripts();
						});
						let methodExamples = { };
						let exampleFiles =  fs.readdirSync(methodPath);
						for (let exampleFile of exampleFiles) {
							let examplePath = path.join(methodPath, exampleFile);
							if (path.extname(exampleFile) !== jsonExt && fs.statSync(examplePath).isFile()) {
								methodExamples[exampleFile] = fs.readFileSync(examplePath, { encoding: 'UTF-8' });
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

createLang();
createApis();
createScripts();
fs.watch(resources, (eventType, filename) => {
	if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) {
		createLang();
		createApis();
		if (filename === 'examples') {
			createScripts();
		}
	}
});
