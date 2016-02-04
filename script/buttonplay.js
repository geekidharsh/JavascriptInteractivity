function ChangeFirst() {
		document.getElementById("Change").innerHTML= "You clicked the first button";
	}

	function ChangeSecond() {
		document.getElementById("Change").innerHTML= "You clicked the second button";
	}
function ShowDate(){ 
  
  document.getElementById("date").innerHTML = "The date is here:"+Date();
}

function MouseOver(){ 
  
		if (onmouseover == true) {
			  document.getElementById("hover").innerHTML = "You are hovering over me";

		} else{
				document.getElementById("hover").innerHTML = "Hover on me again!";

		};

}
}