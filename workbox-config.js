module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpeg,js,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};