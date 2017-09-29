var test = require('tape');
var domain = require('./index');

test('should return true domain names', function (t) {
    t.plan(6);
    t.equal(domain.domainOf('Iran'), '.ir');
    t.equal(domain.domainOf('Germany'), '.de');
    t.equal(domain.domainOf('Cyprus'), '.cy');
    t.equal(domain.domainOf('Ghana'), '.gh');
    t.equal(domain.domainOf('Hungary'), '.hu');
    t.equal(domain.domainOf('Macau'), '.mo');
});


test('should return true country name', function (t) {
    t.plan(6);
    t.equal(domain.isDomainOf('.pl'), 'Poland');
    t.equal(domain.isDomainOf('.sd'), 'Sudan');
    t.equal(domain.isDomainOf('.to'), 'Tonga');
    t.equal(domain.isDomainOf('.ye'), 'Yemen');
    t.equal(domain.isDomainOf('.si'), 'Slovenia');
    t.equal(domain.isDomainOf('.tw'), 'Taiwan');
});