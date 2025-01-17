let loc = document.getElementById("showlocation");
let one = document.getElementById("timeOne");
let two = document.getElementById("timeTwo");
let diff = document.getElementById("diff");
let diffHold;


document.addEventListener("keydown", function(event) {
	loc.innerText = event.key.toString();
	
	
	if(one.innerText == null || one.innerText==""){
		let getTime = new Date();
		one.innerText = getTime.getMilliseconds().toString();
	}else if(one.innerText !="" && two.innerText !=""){ 
		let getTime = new Date();
		one.innerText = "";
		two.innerText = "";
		diff.innerText = "";
		one.innerText = getTime.getMilliseconds().toString();
		
	}
	else{
		let getTwoTime = new Date();
		two.innerText = getTwoTime.getMilliseconds().toString();
		diffHold= two.innerText.valueOf() - one.innerText.valueOf();
		if(diffHold <0){
			diff.innerText = diffHold * -1;}
		else{
			diff.innerText = diffHold;
		}
	}

	
	
});

