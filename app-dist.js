'use strict';

var app = document.getElementById('app');
function clock() {
  var now = new Date().toLocaleTimeString();
  var el = React.createElement(
    'span',
    null,
    now
  );

  ReactDOM.render(el, app);
}

setInterval(clock, 1000);