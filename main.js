'use strict'
/*
let pirojochki = ["С маком", "С творогом"];

pirojochki[pirojochki.length] = "С труфелем";

pirojochki.push("С сосискою");

console.log(pirojochki);*/
//-----------------


/*class Ludi{
	constructor(name){
		this.Name = name;
	}

	Vivesti(){
		return this.Name;
	}
}

let chelovek = new Ludi("Серега");

console.log(chelovek.Vivesti());

let robot = {
	name: "Серега",
	Vivesti: function() {
		return this.name;
	}
};

console.log(robot.Vivesti());*/

// class Kotiki{
// 	constructor(poroda){
// 		this.Poroda = poroda;
// 	}

// 	porodaVivesti(){
// 		console.log(this.Poroda);
// 	}
// }

// let DavonRex = new Kotiki("DavonRex");

// let Siamskii = new Kotiki("Siamskii");
// DavonRex.porodaVivesti();

// let kot = {
// 	"name": "Giant",
// 	"age": 23,
// 	'color': 'green',
// 	log: function(){
// 		console.log(this.name, this.age, this.color)
// 	}
// }

// kot.log();

// console.log(kot["age"]);
// console.log(kot['age']);

// function privet(log){
// 	log();
// }

// privet(
// 	() => console.log("Serega, покажи короче :)")
// );

// privet(
// 	function() {
// 		console.log("Serega, покажи короче :)")
// 	}
// );


function Timer(){
	let time = new Date();

	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();


	if (hour < 10) hour = "0" + hour;
    if (min < 10) min  = "0" + min;
	if (sec < 10) sec  = "0" + sec;
	
	document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
	//time.setTime();
}

function stopClock() {
	let time = new Date();
    //если переменная timer содержит истину по правилу лжи (т.е. таймер запущен)
    if(time) {
      //прекращаем работу таймера
      window.clearInterval(time);
      //присваиваем переменной timer значение null, чтобы таймер опять можно было запустить
      time=null;
      //Выводим пустую строку в элемент с id="clock"
      document.getElementById("clock").innerHTML="";
    }
  }

setInterval(Timer, 1000);

stopClock();