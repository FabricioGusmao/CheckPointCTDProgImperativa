
const pipoca = 10;
const macarrao = 8;
const carne= 15;
const feijao = 12;
const brigadeiro = 8;

let menu = "macarrao";
let tempo = 20;
microondas(menu,tempo);

function microondas(menu, tempo)
{
    let tempoPadrao;
    switch(menu)
    {
        case "pipoca":
            tempoPadrao = pipoca;
            break;
        case "macarrao":
            tempoPadrao = macarrao;
            break;
        case "carne":
            tempoPadrao = carne;
            break;
        case "feijao":
            tempoPadrao = feijao;
            break;
        case "brigadeiro":
            tempoPadrao = brigadeiro;
            break;
        default:
            console.log("Prato inexistente");
            return false;
    }

    if((tempo >= (2 * tempoPadrao)) && (tempo <= (3 * tempoPadrao)))
    {
        console.log("Sua comida queimou");
        return false; 
    }
    else if(tempo < tempoPadrao)
    {
        console.log("Tempo insuficiente");
        return false;
    }
    else if(tempo > (3 * tempoPadrao))
    {
        console.log("Kabumm!!!");
        return false;
    }
    else
    {
        console.log("Prato pronto, bom apetite!!!");
        return true;
    }
}


