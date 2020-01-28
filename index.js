const _ = require('underscore');
const crypto = require('crypto-js');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const rimraf = require('rimraf');

function testMoment() {
    const today = moment();

    console.log(today.format("YYYY-MM-DD"));
}

testMoment();

function testCrypto() {
    const phrase = "Hello World!";

    const md5 = crypto.MD5(phrase);

    console.log({ md5 });
}

testCrypto();

function testRimraf() {
    const filePath = path.join(__dirname, 'hello-world.txt')
    const content = 'This is hello world';

    fs.writeFileSync(filePath, content);

    setTimeout(() => {
        rimraf.sync(filePath);
    }, 10000);
}

testRimraf();

function testUnderscore() {
    let str = '';

    _.each(['a', 'b', 'c'], (letter) => {
        str = str + letter;
    });

    return str;
}

console.log({ letters: testUnderscore() });