let mongoose = require('mongoose');

const server = 'ds249623.mlab.com:49623';
const db = 'getir-case-study';
const user = 'dbUser';
const password = 'dbPassword1';

const sUrl = `mongodb://${user}:${password}@${server}/${db}`;
module.exports = {
    url: sUrl
}