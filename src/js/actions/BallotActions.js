var Dispatcher = require("../dispatcher/Dispatcher");

var BallotActions = (function (_Dispatcher) {
  function _BallotActions () { }

  _BallotActions.prototype.init = function init () {
    _Dispatcher.loadEndpoint("voterBallotItemsRetrieve");
  };

  return new _BallotActions();

}(Dispatcher));

module.exports = BallotActions;
