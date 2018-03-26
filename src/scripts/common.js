const Enumerable = require('linq-js');
const extend = require('extend');

const isPre = /\.pre$/ig;
const asVersion = version => version.replace(isPre, '');

module.exports = {
	defaultLang: 'zh-cn',
	versions: require('./../resources/versions.json'),
	get earliest() {
		return this.versions[0];
	},
	get lastest() {
		return Enumerable.last(this.versions, version => !isPre.test(version));
	},
	get newest() {
		return this.versions[this.versions.length - 1];
	},
	module(version) {
		return ('linq-js-' + (version.endsWith('.pre') ? 'pre' : version));
	},
	histroys(histroys) {
		if (histroys) {
			let prev = 0;
			return Enumerable.zip(histroys, Enumerable.skip(histroys, 1).concat([0]), (v, next) => {
				let deprecated = v.deprecated || next && next.since && this.preVersion(next.since);
				if (v.ref && prev) {
					v = extend(true, { }, prev, v);
				}
				v.deprecated = deprecated;
				return prev = v;
			});
		} else {
			return Enumerable.empty();
		}
	},
	versionComparer(version, other) {
		let v = Enumerable.zip(asVersion(version).split('.'), asVersion(other).split('.'), (ver, otherVer) => ({ ver, otherVer })).firstOrDefault({ ver: 0, otherVer: 0 }, v => v.ver !== v.otherVer);
		return v.ver === v.otherVer ? 0 : parseInt(v.ver) > parseInt(v.otherVer) ? 1 : -1;
	},
	preVersion(version) {
		return Enumerable.where(this.versions, ver => this.versionComparer(ver, version) < 0).max('', this.versionComparer);
	},
	nextVersion(version) {
		return Enumerable.where(this.versions, ver => this.versionComparer(ver, version) > 0).min('', this.versionComparer);
	},
	preVersion(version) {
		let versions = version.split('.');
		versions[versions.length - 1] = parseInt(versions[versions.length - 1]) + 1;
		return versions.join('.') + '.pre';
	},
	asVersion(version) {
		return asVersion(version);
	},
	maxVersion(...versions) {
		return Enumerable.max(versions, '', this.versionComparer);
	},
	minVersion(...versions) {
		return Enumerable.min(versions, '', this.versionComparer);
	},
	isNewer(version, basaVersion) {
		let v = Enumerable.zip(asVersion(version || this.earliest).split('.'), asVersion(basaVersion).split('.'), (ver, baseVer) => ({ ver, baseVer })).firstOrDefault({ ver: 0, baseVer: 0 }, v => v.ver !== v.baseVer);
		return parseInt(v.ver) <= parseInt(v.baseVer);
	},
	isOlder(version, basaVersion) {
		let v = Enumerable.zip(asVersion(version || this.newest).split('.'), asVersion(basaVersion).split('.'), (ver, baseVer) => ({ ver, baseVer })).firstOrDefault({ ver: 0, baseVer: 0 }, v => v.ver !== v.baseVer);
		return parseInt(v.ver) >= parseInt(v.baseVer);
	},
	capitalize(value) {
		if (!value) return '';
		value = value.toString();
		return value.charAt(0).toUpperCase() + value.slice(1);
	},
	upper(value) {
		if (!value) return '';
		return value.toString().toUpperCase();
	},
	lower(value) {
		if (!value) return '';
		return value.toString().toLowerCase();
	},
};