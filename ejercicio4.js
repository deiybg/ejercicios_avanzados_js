const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(mainCharacters, name) {
    for (const character of mainCharacters) {
        if(character.toLowerCase() === name.toLowerCase()){
            return (mainCharacters.indexOf(character));
        }
    }
 return "no se ha encontrado";
}


console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "leia"));
console.log(findArrayIndex(mainCharacters, "luke"));
console.log(findArrayIndex(mainCharacters, "deiby"));


////////////////////////////////////ejercicio4.2/////////////////////////////////////////////////

function removeItem (mainCharacters, name){
    const  index = findArrayIndex(mainCharacters, name);

    if(index != "no se ha encontrado"){
        mainCharacters.splice(index, 1);
        return mainCharacters;
    }else{
        return "elemento no encontrado"
    }
    }

console.log(removeItem(mainCharacters, "luke"));
console.log(removeItem(mainCharacters, "leia"));
console.log(removeItem(mainCharacters, "deiby"));
console.log(removeItem(mainCharacters, "leia"));