function getMessageActions(bubble) {
  return [[
    "Like", 
    function(bubble, peers) { peers.send("like", 1) },
    function(bubble, peers) { peers.send("like", -1) },
  ]]
}

var actionHandlers = {
  'like': function(bubble, value) {
    var incr = parseInt(value);
    if (bubble.badge) {
      bubble.badge = String(parseInt(bubble.badge) + incr);
    } else {
      bubble.badge = incr;
    }
  },
}
