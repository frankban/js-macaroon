/*jslint indent: 4, node: true, nomen: true, plusplus: true, todo: true, vars: true, white: true */
/*global describe,Uint8Array,it*/
'use strict';

var assert = require('assert');
var macaroon = require('../build/node-macaroon');
var nacl = require('tweetnacl');

function strUint8Array(s) {
    return nacl.util.decodeUTF8(s);
}

function uint8ArrayToHex(ua) {
    if (!(ua instanceof Uint8Array)) {
        throw new Error('invalid Uint8Array:' + ua);
    }
    var hex = '', i;
    for (i = 0; i < ua.length; i++) {
        hex += (ua[i] < 16 ? '0' : '') + ua[i].toString(16);
    }
    return hex;
}

describe('macaroon', function() {
    it('loads the macaroon library in a usable state', function() {
        var rootKey = strUint8Array('secret');
        var m = macaroon.newMacaroon(rootKey, 'some id', 'a location');
        assert.equal(m.location(), 'a location');
        assert.equal(m.id(), 'some id');
        assert.equal(uint8ArrayToHex(m.signature()), 'd916ce6f9b62dc4a080ce5d4a660956471f19b860da4242b0852727331c1033d');
        var obj = macaroon.export(m);
        assert.deepEqual(obj, {
            location: 'a location',
            identifier: 'some id',
            signature: 'd916ce6f9b62dc4a080ce5d4a660956471f19b860da4242b0852727331c1033d',
            caveats: [],
        });

        m.verify(rootKey, function() {
        return 'condition is never true';
    }, null);
    });
});
