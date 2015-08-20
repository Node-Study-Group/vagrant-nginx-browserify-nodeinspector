var msg = require('./extralib.js').msg;
window.onload = function() {
  var msgdiv = document.getElementById('mymessagediv');
  var i = 0;

  var timer = setInterval(function() {
    msgdiv.innerHTML = msg + " " + i;
    i += 1;
    if (i > 100) clearInterval(timer);
  }, 1000);
};
