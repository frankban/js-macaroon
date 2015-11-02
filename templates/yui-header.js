/*jslint node: true, continue: true, eqeq: true, forin: true, nomen: true, plusplus: true, todo: true, vars: true, white: true */
if (typeof Float64Array === "undefined") {
  Float64Array = Array;
  Float64Array.prototype.subarray = function(start, end) {
    return this.slice(start, end);
  }
}

'use strict';

YUI.add("macaroon", function(Y) {
  var ns = Y.namespace('macaroon');
