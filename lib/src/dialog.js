/* The MIT License
 *
 * Copyright (c) 2015 Resin.io. https://resin.io.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var dialog = require('dialog');
var Promise = require('bluebird');
var _ = require('lodash');

/**
 * @summary Open an image selection dialog
 * @function
 * @public
 *
 * @description
 * Notice that by image, we mean *.img/*.iso files.
 *
 * @fulfil {String} - selected image
 * @returns {Promise};
 *
 * @example
 * dialog.selectImage().then(function(image) {
 *   console.log('The selected image is', image);
 * });
 */
exports.selectImage = function() {
  'use strict';

  return new Promise(function(resolve, reject) {
    dialog.showOpenDialog({
      properties: [ 'openFile' ],
      filters: [
        { name: 'IMG/ISO', extensions: [ 'img', 'iso' ] }
      ]
    }, function(file) {
      return resolve(_.first(file));
    });
  });
};

/**
 * @summary Show error dialog for an Error instance
 * @function
 * @public
 *
 * @param {Error} error - error
 *
 * @example
 * dialog.showError(new Error('Foo Bar'));
 */
exports.showError = function(error) {
  'use strict';

  dialog.showErrorBox(error.message, error.stack || '');
};
