/* -------------------------------- EJEMPLO 1 ------------------------------- */
setTimeout(function () {
  console.log("Hola Mundo con retraso!");
}, 1000);
/* -------------------------------- EJEMPLO 2 ------------------------------- */
setTimeout(() => {
  console.log("EJEMPLO 2");
  const getNames = new Promise((resolve, reject) => {
    const names = ["Luis", "Lucas", "Pablo"];
    resolve(names);
  });

  const getNumbers = new Promise((resolve, reject) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    reject(numbers);
  });

  const getLetters = new Promise((resolve, reject) => {
    const letters = ["L", "U", "I", "S"];
    resolve(letters);
  });

  /*El encademiento de promesas es mas entendible y mejor c: */
  getNames
    .then((value) => {
      console.log("resolve", value);
      return getNumbers;
    })
    .then((numbers) => {
      //Cuando una promesa es reject se lanza un error en consola
      console.log("reject", numbers);
      return getLetters;
    })
    .then((letters) => {
      console.log("resolve", letters);
    });
}, 2000);

/* -------------------------------- EJEMPLO 3 ------------------------------- */
setTimeout(() => {
  console.log("EJEMPLO 3");
  function getNameDog(nameDog) {
    const namesDog = ["Tiry", "Scott", "Boby"];
    nameDog(namesDog);
  }
  function getNameCat(nameCat) {
    const namesCat = ["Frufrito", "Five", "Arica"];
    nameCat(namesCat);
  }
  function getDays(nameCat) {
    const namesDay = ["Monday", "Saturday", "Sunday"];
    nameCat(namesDay);
  }
  // :( Ese tipo de codigo es engorroso
  getNameDog((value) => {
    console.log(value);
    getNameCat((val) => {
      console.log(val);
      getDays((days) => {
        console.log(days);
      });
    });
  });

  //Otro ejemplo :c
  setTimeout(function () {
    console.log("Etapa 1 completada");
    setTimeout(function () {
      console.log("Etapa 2 completada");
      setTimeout(function () {
        console.log("Etapa 3 completada");
        setTimeout(function () {
          console.log("Etapa 4 completada");
          // Podríamos continuar hasta el infinito...
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
  //----
}, 3000);
