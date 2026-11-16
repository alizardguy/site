export default function(eleventyConfig) {

    // pass throughs
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy({ 'src/assets/favicon': '/favicon' });

    eleventyConfig.addPassthroughCopy({"src/declarations/well-known" : "/.well-known"});
    eleventyConfig.addPassthroughCopy({"src/declarations/discord/embeds" : "/discord/embeds"});
    eleventyConfig.addPassthroughCopy({ 'src/sitemap.xsl': 'sitemap.xsl' });
    eleventyConfig.addPassthroughCopy({ 'src/declarations/robots.txt': '/robots.txt' });

    return {
    dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
        },
    templateFormats: ["md", "njk", "html"] 
  }
}