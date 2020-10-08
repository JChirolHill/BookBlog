module.exports = (function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addFilter("formatted-date", function (date) {
        if(!(/^([0-9]{1,2}\/){2}[0-9]{2}$/).test(date)){
            return "Improperly formatted date";
        }

        let dateComponents = date.split('/');

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return `${monthNames[dateComponents[0] - 1]} ${dateComponents[1]}, 20${dateComponents[2]}`
    });

    eleventyConfig.addFilter("plus-one", function (num) {
        return num + 1;
    });

    eleventyConfig.addPassthroughCopy('css')
    return {
        passthroughFileCopy: true
    }
});
