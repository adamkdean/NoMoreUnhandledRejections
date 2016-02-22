'use strict';

module.exports = exports = function () {
  process.on('unhandledRejection', function (reason, source) {
    console.log('Unhandled rejection detected');
    console.log('Source:', source);
    console.log('Reason:', reason);
  });
}
