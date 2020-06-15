	var b1 = document.getElementById('1');
	var b2 = document.getElementById('2');
	var b3 = document.getElementById('3');
	var b4 = document.getElementById('4');
	var b5 = document.getElementById('5');
	var b6 = document.getElementById('6');
	var b7 = document.getElementById('7');
	var b8 = document.getElementById('8');
	var b9 = document.getElementById('9');

	var blocks = [b1, b2, b3, b4, b5, b6, b7, b8, b9];



var secondPerson = false, game = true;
function btnXO(btn){
	if(game){
		if(btn.value ==""){
			if(secondPerson){
				btn.value = "O";
				secondPerson = false
			}
			else{
				btn.value = "X";
				secondPerson= true;
			}
			if(checkWinner()){
				game = false;
			}
		}
		else{
			alert("Эта ячейка занято!");
		}
	}
	else{
		alert("Game over!");
	}

}

function checkWinner(){
	
	if(b1.value == b2.value && b2.value == b3.value && b3.value !=""){
		b1.style.background = 'red';
		b2.style.background = 'red';
		b3.style.background = 'red';
		return true;

	}
	else if(b4.value == b5.value && b6.value == b5.value && b6.value !=""){
		b5.style.background = 'red';
		b6.style.background = 'red';
		b4.style.background = 'red';
		return true;

	}
	else if(b7.value == b8.value && b9.value == b8.value && b8.value !=""){
		b7.style.background = 'red';
		b8.style.background = 'red';
		b9.style.background = 'red';
		return true;

	}

	else if(b1.value == b4.value && b4.value == b7.value && b7.value !=""){
		b1.style.background = 'red';
		b4.style.background = 'red';
		b7.style.background = 'red';
		return true;
	}
	else if(b5.value == b2.value && b5.value == b8.value && b8.value !=""){
		b5.style.background = 'red';
		b2.style.background = 'red';
		b8.style.background = 'red';
		return true;
		}
	else if(b3.value == b6.value && b6.value == b9.value && b9.value !=""){
		b3.style.background = 'red';
		b6.style.background = 'red';
		b9.style.background = 'red';
		return true;
		}

	else if(b1.value == b5.value && b5.value == b9.value && b9.value !=""){
		b1.style.background = 'red';
		b5.style.background = 'red';
		b9.style.background = 'red';
		return true;
	}
	else if(b3.value == b5.value && b5.value == b7.value && b7.value !=""){
		
		b3.style.background = 'red';
		b5.style.background = 'red';
		b7.style.background = 'red';
		return true;
	}
}

function Back(){

	for( var i = 0; i <9; i++){
		blocks[i].background = '-internal-light-dark-color(rgb(239, 239, 239), rgb(74, 74, 74))';
		blocks[i].value = "";
	}

	game = true;
	secondPerson = false;
}