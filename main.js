$(document).ready(main);

var contador = 1;

function main () {

	$('.bar-menu').click(function(){
		console.log ("hola")
		if (contador == 1) {
			$('nav-menu').style.display="none"
			
			contador = 0;
		} else {
			contador = 1;
			$('nav-menu').{
				left: '-100%'
			});
		}
	})

