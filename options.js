window.onload = function(){
	var id = localStorage["login_id"]?localStorage["login_id"]:"";
	var pw = localStorage["login_pw"]?localStorage["login_pw"]:"";
	document.getElementById("inputid").value = id;
	document.getElementById("inputpw").value = pw;

	document.getElementById("save").onclick = function(){
		var id = document.getElementById("inputid").value;
		var pw = document.getElementById("inputpw").value;
		localStorage["login_id"] = id;
		localStorage["login_pw"] = pw;
	}
	
}

