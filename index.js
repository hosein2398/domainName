var fs = require("fs");
var contents = fs.readFileSync("country-by-domain-tld.json");
var jsonContent = JSON.parse(contents);

function domainOf(countryName) {
    for (key in jsonContent) {
        if (countryName.toLowerCase() === jsonContent[key].country.toLowerCase()) {
            return jsonContent[key].tld;
        }
    }
}

function isDomainOf(domainName) {
    for (key in jsonContent) {
        if (jsonContent[key].tld) {
            if (domainName.toLowerCase() === jsonContent[key].tld.toLowerCase()) {
                return jsonContent[key].country;
            }
        }
    }
}


module.exports = {
    domainOf: domainOf,
    isDomainOf: isDomainOf
}