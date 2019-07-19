  AFRAME.registerComponent('markerhandler', {
  	init: function() {
        	const animatedMarker = document.querySelector("#animated-marker");
        	const aEntity = document.querySelector("#animated-model");
        	animatedMarker.addEventListener('mousedown', function(ev, target){
            		const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            		if (aEntity && intersectedElement === aEntity) {
		    		document.getElementById("overlay").style.display = "block";
            		}
        	});
	}});
  
  AFRAME.registerComponent('markerhandler2', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker2");
        const aEntity = document.querySelector("#animated-model2");
        animatedMarker.addEventListener('mousedown', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
		document.getElementById("overlay2").style.display = "block";
            }
        });
}});
	
  AFRAME.registerComponent('markerhandler3', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker3");
        const aEntity = document.querySelector("#animated-model3");
        animatedMarker.addEventListener('mousedown', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                document.getElementById("overlay3").style.display = "block";	    
            }
        });
}});
	   // var modal = document.getElementById("myModal");
  AFRAME.registerComponent('markerhandler4', {
   init: function() {
        const animatedMarker = document.querySelector("#animated-marker4");
        const aEntity = document.querySelector("#animated-model4");
       	animatedMarker.addEventListener('mousedown', function(ev){
       	const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
         	document.getElementById("overlay4").style.display = "block";
	   	}
        });
}});
	
function off() {
  document.getElementById("overlay").style.display = "none";
}		
function off2() {
  document.getElementById("overlay2").style.display = "none";
}		
function off3() {
  document.getElementById("overlay3").style.display = "none";
}
function off4() {
  document.getElementById("overlay4").style.display = "none";
}

	window.addEventListener("orientationchange", function() {
		location = location;
	}, false);

		alert("Kindly go close to the markers and click for more information");
