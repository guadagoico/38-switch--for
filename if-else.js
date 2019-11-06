// DIA DE LA SEMANA CON IF ELSE
//let dia = prompt("Ingrese un dia de la semana")
//if (dia ==="Lunes") {
//  alert("Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae")
//} else if (dia === "martes") {
//  alert("Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'")
//} else if (dia === "miercoles") {
//  alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī")
//} else if (dia === "jueves") {
//  alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'")
//} else if (dia === "Viernes") {
//  alert("Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'")
//} else if (dia === "sabado") {
//  alert("Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío")
//} else if (dia === "domingo") {
//  alert("Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'")
//} else {
//  alert("Ud no ingreso un dia valido")
//} 


//SWITCH

let dia = prompt("Ingrese un dia")

if (dia === "lunes"){

}
switch (dia) {
  case "lunes":
    alert("Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'")
    break;
  case "martes":
    alert("Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'")
    break;
  case "miercoles":
    alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'")
    break;
  case "jueves":
    alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'")
    break;
  case "Viernes":
    alert("Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'")
    break;
  case "Sabado":
    alert("Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío")
    break;
  case "domingo":
    alert("Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'")
    break;
  default:
alert("Usted no ingreso un dia valido")
    break;
}


let animal = prompt("Ingrese un animal")

switch (animal) {
  case "jirafa":
  case "leon":
  case "orangutan":
  alert("El animal vive en la sabana")
  break;
  case "gallina":
  case "vaca":
  case "Oveja":
    alert("El animal vive en la granja")
    break;
}
}