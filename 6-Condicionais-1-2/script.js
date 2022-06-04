var hora = 9;

if (hora<=12){
    console.log("Bom dia");
}else if (hora <=18){
    console.log("Boa tarde");
}else if(hora<=24){
    console.log("Boa noite");
}else{
    console.log("ERRO!!!!, informe uma hora de 0h há 24h ");
}

document.write("Agora são:" +hora+" Horas da manhã.");