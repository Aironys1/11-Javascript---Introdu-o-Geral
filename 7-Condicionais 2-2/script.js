var hora = 15;

if (hora<=12){
    console.log("Hora de estudar");
}else if (hora <=18){
    console.log("Hora de trabalhar");
}else if(hora<=24){
    console.log("Hora de descansar");
}else{
    console.log("ERRO!!!!, informe uma hora de 0h há 24h ");
}

document.write("Agora são:" +hora+" Horas da  tarde.");


var peso =75;

if (peso >=0 && peso <=30){
    console.log("Peso baixo");
}else if(peso <=80 ){
    console.log("Peso Médio");
}else if(peso >=81 && peso <=110){
    console.log("Peso pesado")

}else{
    console.log("Acima do peso");
}

document.write("<br>"+"Meu peso é de:"+" "+peso+" kg");