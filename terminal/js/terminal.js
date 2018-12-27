window.onload = init;
var socket;

function init() {
  // ===== Onload Functions ===========================================================
  initSocket();
  messageServer("look");
  document.getElementById("input").value = "";
  document.getElementById("display").value = "";

  // ===== Event Handlers =============================================================
  // ----- Input Focused ---------------------------------------------------------------
  document.getElementById("input").addEventListener("focus", function(e) {
    if ("ontouchstart" in window) {
      setTimeout(() => {
        document.getElementById("input").classList.add("fixed");
      }, 200);
    }
  });
  document.getElementById("input").addEventListener("blur", function (e) {
    document.getElementById("input").classList.remove("fixed");
  });
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
      inputBuffer[inputBufferIndex] ? document.getElementById("input").value = inputBuffer[inputBufferIndex] : "";
      break;
    case 40: // down
      if(inputBufferIndex<inputBuffer.length) {
        ++inputBufferIndex;
      }
      inputBuffer[inputBufferIndex] ? document.getElementById("input").value = inputBuffer[inputBufferIndex] : document.getElementById("input").value = "";
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
  socket.on("debug", function (data) {
    console.log(data.state);
  })
}
// ----- Send Message to Server ---------------------------------------------------------
function messageServer(message) {
  socket.emit("console", message);
}
// ----- Write to Screen ----------------------------------------------------------------
function toScreen(message, actor) {
  if(actor == "user") {
    message = "<br />&gt; " + message;
  }
  var newText = document.createElement("div");
  newText.innerHTML = message + "<br />";
  document.getElementById("display").appendChild(newText);
  newText.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

// for debugging
function debug() {
  socket.emit("debug");
}