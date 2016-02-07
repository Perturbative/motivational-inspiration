var fs = require('fs');
var path = require('path');

exports.retrieveBackgrounds = function(callback) {
  fs.readdir(path.join(__dirname, '../public/images/backgrounds'), function(err, files) {
    if (err) {
      callback(err, null);
    } else {
      files.forEach(function(file) {
        callback(null, files);
      });
    }
  });
};
