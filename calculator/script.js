function display(val) {
	document.getElementById("display").value +=val;
}
function cleardisplay() {
	document.getElementById("display").value ="";
	document.getElementById("result").value ="";
}
function binhphuong() {
	var x = document.getElementById("display").value;
	var y = document.getElementById("result").value;
	if (y != "") {
		document.getElementById("result").value = y*y;
		document.getElementById("display").value ="";
		document.getElementById("display").value =y + "^2";
	} else {
		document.getElementById("result").value = x*x;
		document.getElementById("display").value =x + "^2";
	}
}
function phantram() {
	var x = document.getElementById("display").value;
	var y = document.getElementById("result").value;
	if (y!="") {
		document.getElementById("result").value = y/100;
		document.getElementById("display").value =y+"%";
	} else{
		document.getElementById("result").value = x/100;
		document.getElementById("display").value =x+"%";
	}

}
function canb2() {
	var x = document.getElementById("display").value;
	var y = document.getElementById("result").value;
	if (y!=0) {
		document.getElementById("result").value = Math.sqrt(eval(y));
		document.getElementById("display").value ="√"+y;
	}
	else {
		document.getElementById("result").value = Math.sqrt(eval(x));
		document.getElementById("display").value ="√"+x;
	}
}
function giaithua() {
	var x = document.getElementById("display").value;
	var result = 1;
	if (x>=0) {
		for (var i =1; i <=x; i++) {
			result*=i;
		}
		document.getElementById("result").value = result;
		document.getElementById("display").value = x +"!";
	}
}
function mathh() {
	var result = document.getElementById("result").value + document.getElementById("display").value;
	document.getElementById("result").value = eval(result);
	document.getElementById("display").value="";
}
function del() {
	var x = document.getElementById("display").value;
	document.getElementById("display").value=x.slice(0,x.length-1);
}