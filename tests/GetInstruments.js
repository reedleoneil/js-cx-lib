var ws = new WebSocket("wss://api-cx.coins.asia/ws-api/");
ws.onopen = function() {
  var frame = JSON.stringify({
  "m":0,
  "i":0,
  "n":"GetInstruments",
  "o":"{\"OMSId\": 1}"
  });
  ws.send(frame);
};

ws.onmessage = function (evt) {
  console.log(evt.data);
};

ws.onclose = function() {

};
