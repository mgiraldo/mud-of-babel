window.onload = init;
var socket;

function init() {
  // ===== Onload Functions ===========================================================
  initSocket();
  messageServer("look");
  document.getElementById("input").value = "";
  document.getElementById("display").value = "";

  // ===== Event Handlers =============================================================
  // ----- Input Submit ---------------------------------------------------------------
  document.getElementById("console").onsubmit = function(event) {
    event.preventDefault();
    var inputString = document.getElementById("input").value;
    inputString = inputString.trim();
    document.getElementById("input").value = "";
    toScreen(inputString,"user");
    if(inputString !== "") {
      messageServer(inputString);
      if(inputString !== inputBuffer[inputBuffer.length-1]) {
        inputBuffer.push(inputString);
      }
    }
    inputBufferIndex = inputBuffer.length;
  };
  // ----- Input Buffer ----------------------------------------------------------------
  var inputBuffer = [];
  var inputBufferIndex = 0;
  document.onkeydown = function(event) {
    switch(event.which) {
    case 38: // up
      if(inputBufferIndex>0) {
        --inputBufferIndex;
      }
      document.getElementById("input").value = inputBuffer[inputBufferIndex];
      break;
    case 40: // down
      if(inputBufferIndex<inputBuffer.length) {
        ++inputBufferIndex;
      }
      document.getElementById("input").value = inputBuffer[inputBufferIndex];
      break;
    default: return;
    }
    event.preventDefault();
  };
}

// ===== Functions ======================================================================
// ----- Connect to socket server -------------------------------------------------------
function initSocket() {
  socket = io();
  socket.on("message", function(data) {
    toScreen(data.response, "console");
  });
}
// ----- Send Message to Server ---------------------------------------------------------
function messageServer(message) {
  socket.emit("console", message);
}
// ----- Write to Screen ----------------------------------------------------------------
function toScreen(message, actor) {
  if(actor == "user") {
    message = "\n> " + message;
  }
  var displayString = document.getElementById("display").value + message + "\n";
  document.getElementById("display").innerHTML += displayString.replace(/\n/g, "<br />").replace(/\|/g, "&nbsp;");
  document.getElementById("display").scrollTop = document.getElementById("display").scrollHeight;
}