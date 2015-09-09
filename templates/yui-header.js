/*jslint node: true, continue: true, eqeq: true, forin: true, nomen: true, plusplus: true, todo: true, vars: true, white: true */
if (typeof Float64Array === "undefined") {
  Float64Array = Array
}

'use strict';

YUI.add("macaroon", function(Y) {
  var ns = Y.namespace('macaroon');
