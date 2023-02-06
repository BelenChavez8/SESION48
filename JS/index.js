var heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }




//CREANDO UNA CLASE 

function Persona(  nombre,apellido,edad,genero,intereses  ){

this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.genero = genero;
this.intereses = intereses;
}

// function Persona( var1, var2, var3, var4, var5 ) {

//   this.nombre = var1;
//   this.apellido = var2;
//   this.edad = var3;
//   this.genero = var4;
//   this.intereses = var5;

//   this.biografia = 


// }



// this.saludo = function(){

// var bienvenida = "Hola, mi nombre es "+ "Belen"
// alert(bienvenida);

// };


// }


let persona1 = new Persona( "Alonso","Rojas", 25, "masculino", ["futbol","natacion","musica"]      );
console.log(persona1)