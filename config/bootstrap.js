/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  await Pet.createEach([
    { name: 'spot', speciesLabel: 'dog' },
    { name: 'rex', speciesLabel: 'dog' },
    { name: 'alice', speciesLabel: 'cat' },
    { name: 'rory', speciesLabel: 'cat' },
    { name: 'felix', speciesLabel: 'lion' },
    { name: 'tony', speciesLabel: 'tiger' },
    { name: 'speedy', speciesLabel: 'snail' },
  ]);
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
