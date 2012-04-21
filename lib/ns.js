
/* !
 * ns
 * JavaScript namespace utility library
 * Copyright (c) 2012 Enrico Marino (http://onirame.no.de)
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */

  var ns = exports.ns = {};

  /**
   * Library version.
   */

  ns.version = '0.0.1';

  /** 
   * globalize the properties of the given object
   * @param {Object} obj properties to globalize
   * @api public
   */

  ns.globalize = function (obj) {
    Object.keys(obj)
      .filter(function (key) {
        return exports[key] === undefined;
      })
      .forEach(function (key) {
        exports[key] = obj[key];
      });
  };

 }(this));