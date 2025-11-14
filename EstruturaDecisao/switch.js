
const status = "Ocupado";

switch(status){
    case "Ocupado":
        console.log("Está ocupado, volte mais tarde!!");
        break;
    
    case "Aberto":
        console.log("Aberto, pode entrar!!");
        break;
    
    case "Fechado":
        console.log("Fechado volte ás 17:30");
        break;

    default:
        console.log("Error, estamos corrigindo.");

}