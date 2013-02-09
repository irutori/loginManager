var elm1 = document.getElementById('login_id');
var elm2 = document.getElementById('login_pw');
var port = chrome.extension.connect({name: "login"});
port.postMessage({state:"ready"});

port.onMessage.addListener(function(msg) {
	elm1.value = msg.id;
	elm2.value = msg.pw;
});