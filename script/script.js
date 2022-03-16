function playAudio(){
      var myAudio = new Audio;
      myAudio.src = "sound/click.mp3";
      myAudio.play();
   }
function switchLamp(){
	playAudio()
	let status = document.querySelector(".light_switch").innerHTML;
	let electricityStatus = document.querySelector(".electricity_status").innerHTML;
	if(status == "OFF"){
		if(electricityStatus == "ON"){
			document.getElementById('welcome').style.background = 'url(img/welcome_on.jpg) no-repeat';
			document.getElementById('welcome').style.backgroundSize = 'cover';
			document.querySelector('.animation_off').setAttribute('class', 'animation_on');
		}
		document.getElementById('switchlamp').setAttribute('id', 'switch_on1')
		document.querySelector(".light_switch").innerHTML = "ON";
	}
	else{
		document.getElementById('welcome').style.background = 'url(img/welcome_off.jpg) no-repeat';
		document.getElementById('welcome').style.backgroundSize = 'cover';
		document.getElementById('switch_on1').setAttribute('id', 'switchlamp')
		if(electricityStatus == "ON"){
			document.querySelector('.animation_on').setAttribute('class', 'animation_off');
		}
		document.querySelector(".light_switch").innerHTML = "OFF"
	}
}


function switchElectricity(){
	playAudio()
	let status = document.querySelector(".electricity_status").innerHTML;
	let lampStatus = document.querySelector(".light_switch").innerHTML;
	if(status == "ON"){
		if(lampStatus == "ON"){	
			document.getElementById('welcome').style.background = 'url(img/welcome_off.jpg) no-repeat';
			document.getElementById('welcome').style.backgroundSize = 'cover';
			document.querySelector('.animation_on').setAttribute('class', 'animation_off');
		}
		document.getElementById('switch_electricity').setAttribute('id', 'switch_off_electricity')
		document.querySelector(".electricity_status").innerHTML = "OFF"
	}
	else{
		if(lampStatus == "ON"){
			document.getElementById('welcome').style.background = 'url(img/welcome_on.jpg) no-repeat';
			document.getElementById('welcome').style.backgroundSize = 'cover';
			document.querySelector('.animation_off').setAttribute('class', 'animation_on');
		}
		document.getElementById('switch_off_electricity').setAttribute('id', 'switch_electricity')
		document.querySelector(".electricity_status").innerHTML = "ON"
	}
}
function switchSecurity(){
	let status = document.querySelector(".security_alert_status").innerHTML;
	document.querySelector(".security_alert_1").style.animationName="security";
	if(status == "dis"){
		document.getElementById('switchsecurity_off').setAttribute('id', 'switchsecurity_on')
		document.querySelector(".security_alert_status").innerHTML = "en";
		document.querySelector(".security_status").innerHTML = "ON";
	}
	else{
		document.getElementById('switchsecurity_on').setAttribute('id', 'switchsecurity_off')
		document.querySelector(".security_alert_status").innerHTML = "dis"
		document.querySelector(".security_status").innerHTML = "OFF"
	}
	setTimeout(function(){
	document.querySelector(".security_alert_1").style.animationName="none";}, 3000); 
}
function bigImg(x) {
  x.style.height = "105%";
  x.style.width = "105%";
  x.style.opacity = "0.5";
}

function normalImg(x) {
  x.style.height = "100%";
  x.style.width = "100%";
  x.style.opacity = "1";
}