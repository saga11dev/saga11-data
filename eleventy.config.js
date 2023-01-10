const path = require("path");
const fs = require("fs");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/images");
	// Local Server
	eleventyConfig.setServerOptions({
		port: 8089 ,
	});

	// Directory setup
	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src/",
			output: "_site",
			includes: "includes",
			layouts: "layouts",
			data: "data",
		},
	};
};
