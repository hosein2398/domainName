# domainName  [![Build Status](https://travis-ci.org/hosein2398/domainName.svg?branch=master)](https://travis-ci.org/hosein2398/domainName)
Get countries' domain names and reverse.

## Installation
```
npm i --save domainname
```

## Usage 
Get name of a country by it's domain name :
```JS
var domains = require('domainname');

var test = domains.isDomainOf('.ca');
console.log(test); // Canada
```

Get domain name by name of a country:
```JS
var domains = require('domainname');

var test = domains.domainOf('Spain');
console.log(test); // .es
```

## Api

**domainOf** (parameter : `string`)  
Description : returns a domain name.  
Returns : `string`  

**isDomainOf** (parameter : `string`)  
Description : returns name of a country.  
Returns `string`  
