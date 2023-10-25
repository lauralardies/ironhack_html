// Contador del 30 al 0.

let counter = 30;

// Con un while
while (counter >= 0){
    console.log(counter);
    counter -= 1;
  } 
  
  // Con un for
  for (let i = 30; i >= 0; i--){
      console.log(i);
    if (i === 0) {
        console.log("Boom!")
    }
  }