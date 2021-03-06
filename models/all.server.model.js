/**
 * Created by zenghong on 16/1/20.
 */
module.exports = function (appDb) {
  require('./company')(appDb);
  require('./user')(appDb);
  require('./area')(appDb);
  require('./customer')(appDb);
  require('./shop')(appDb);
  require('./product')(appDb);
  require('./punch')(appDb);
  require('./card_template')(appDb);
};