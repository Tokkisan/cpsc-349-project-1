const buttons = document.querySelectorAll('.button');

let matcha = 0;
let oreo = 0;
let milk = 0;

var result_flavor = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('button clicked', button.id);
    button.classList.toggle('selected');

     let fade_string = button.id.slice(0,2);
      console.log(fade_string);
      if (fade_string === "Q1"){
        fadeOutButtons('Q1A');
      }else if (fade_string === "Q2"){
        fadeOutButtons('Q2A');
      }else if (fade_string === "Q3"){
      fadeOutButtons('Q3A');
      }else if (fade_string === "Q4"){
      fadeOutButtons('Q4A');
      }else if (fade_string === "Q5"){
      fadeOutButtons('Q5A');
      }else if (fade_string === "Q6"){
      fadeOutButtons('Q6A');
      }else if (fade_string === "Q7"){
      fadeOutButtons('Q7A');
      }else if (fade_string === "Q8"){
      fadeOutButtons('Q8A');
      }

    let qstring = button.id.slice(-2);
    console.log(qstring);

    if (qstring === "A1") {
      matcha += 1;
    } else if (qstring === "A2") {
      oreo += 1;
    } else if (qstring === "A3") {
      milk += 1;
    }
    console.log(matcha, oreo, milk);

    let total = matcha + oreo + milk;

    if (total === 8) {
      if (matcha > oreo && matcha > milk) {
        result_flavor = "Matcha";
      } else if (oreo > matcha && oreo > milk) {
        result_flavor = "Oreo";
      } else if (milk > matcha && milk > oreo) {
        result_flavor = "Milk";
      }
      console.log(result_flavor);

      document.getElementById('calculateButton').addEventListener('click', () => {
        if (result_flavor === "Matcha") {
          window.location.href = "matcha.html"
        } else if (result_flavor === "Oreo") {
          window.location.href = "oreo.html"
        } else if (result_flavor === "Milk") {
          window.location.href = "milk.html"
        }
      
    });

      
    }
    

    function fadeOutButtons(buttonId) {
      const buttonsToFade =       
      document.querySelectorAll(`[id^="${buttonId}"]`);
      buttonsToFade.forEach(btn => {
        btn.classList.add('button-fade');
      });
    }
    
  });
});

