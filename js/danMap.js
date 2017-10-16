/**
       * The CenterControl adds a filter as a model
       * @constructor
       */
      function CenterControl(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to access filters';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Filter';
        controlUI.appendChild(controlText);

        // Setup the click event listeners: Allow filter
        controlUI.addEventListener('click', function() {
         $('#myModal').modal('show');
		 
        });

      }
	  
	  // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);
		
        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
		
		
		var container = document.createElement('div');
		var div = document.createElement('div');
		var div2 = document.createElement('div');
		var legend = document.createElement('div')
		legend.index = 2;
		legend.id="legend";
		$('body').append(legend);
		container.className="legendContainer";
		legend.appendChild(container);
		
		div.className = "legendItem";
		div2.className = "legendItem";
		div.innerHTML = '<img src="img/green_marker.png"><p>Current</p> ';
		container.appendChild(div);
		div2.innerHTML = '<img src="img/yellow_marker.png"><p>Upcoming</p> ';
		container.appendChild(div2);
		map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById('legend'));