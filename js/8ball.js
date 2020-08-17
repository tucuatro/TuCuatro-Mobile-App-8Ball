function response(){
	let userName = 'Juana';
	userName ? console.log(`'Hola, ${userName}!'`): console.log('Hola cuatrista!');

	let userQuestion = document.getElementById("question").value;
	console.log(`${userName}` +' pregunto: '+ userQuestion);

	let response = ('La Bola Ocho Magica predice:');

	let randomNumber = Math.floor(Math.random() *8);

	let eightBall = '';

	switch (randomNumber) {
	  case 0 : eightBall = 'Por supuesto';
	  break;
	  case 1 : eightBall = 'Claro que si';
	  break;
	  case 2 : eightBall = 'No esta claro, intentalo nuevamente';
	  break;
	  case 3 : eightBall = 'No puedo predecirlo ahora';
	  break;
	  case 4 : eightBall = 'No contaria con eso';
	  break;
	  case 5 : eightBall = 'Mis fuentes me dicen que no';
	  break;
	  case 6 : eightBall = 'No luce muy bien el futuro';
	  break;
	  case 7 : eightBall = 'Los astros dicen que si';
	  break;
	  case 8 : eightBall = 'Quizas';
	  break;
	}

	console.log(eightBall);
	
	response += '<span class="message">'+eightBall+'</span>';
	document.getElementById("response").innerHTML = response;
}