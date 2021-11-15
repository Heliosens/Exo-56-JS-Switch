let result = prompt('entrez le nom d\'un accessoire');

switch (result){
    case "souris" :
        alert("J'utilise une " + result);
        break;
    case "clavier" :
        alert("J'utilise un " + result);
        break;
    case "ordinateur" :
        alert("J'utilise un " + result);
        break;
    case "tapis" :
        alert("J'utilise un " + result);
        break;
    case "imprimante" :
        alert("J'utilise une " + result);
        break;
    case "ondulateur" :
        alert("J'utilise un " + result);
        break;
    default :
        alert( result + " est un accessoire inconnu");
}
