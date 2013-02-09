var loginport = null;
chrome.extension.onConnect.addListener(function(port){
	port.onMessage.addListener(function(msg){
		loginport = port;
	});
});

chrome.browserAction.onClicked.addListener(function(tab){
	myid = localStorage["login_id"]?localStorage["login_id"]:"";
	mypw = localStorage["login_pw"]?localStorage["login_pw"]:"";
	loginport.postMessage({id: myid,pw: mypw});
});