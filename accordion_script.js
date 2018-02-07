var accordion = document.querySelectorAll(".accordion-container");
var plus = document.querySelectorAll('.accordion-container span');
plus.forEach(function(button){
	button.addEventListener('click', function(e){
		var theAccordion = e.target.parentElement.parentElement;

		if(theAccordion.getAttribute("data-state") == ""){
			//if closed, expand the accordion, and change the sign
			theAccordion.setAttribute("data-state", "open");
			e.target.innerHTML = "-";
		}
		else{
			//shrink the accordion
			theAccordion.setAttribute("data-state", "");
			e.target.innerHTML = "+";
		}
	});
});

