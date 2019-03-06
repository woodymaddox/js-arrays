

const dinosaurs =[
    {
        dinotype: 't-rex',
        name: 'pete',
    },
    {
        dinotype: 'stegosaurus',
        name: 'ron'
    },
    {
        dinotype: 'velociraptor',
        name: 'harry',
    },
];

//loop over the dinosaurs
// build up a domstring
// print the dom string to the dom 

const printtodom = (divId, textToprint) => {
 const selectedDiv = document.getElementById(divId);
 selectedDiv.innerHTML = textToprint;
 
};

const buildDinosaurs =() => {
    let domstring = '';
  for(let i =0; i <dinosaurs.length; i++){
      domstring += `<div class="dinosaur">`
      domstring += `<h3>${dinosaurs[i].dinotype}</h3>`;
      domstring += `<p>${dinosaurs[i].name}</p>`
      domstring += `</div>'`
    
  }
  printtodom('dino-barn', domstring);
};


const init = () => {
buildDinosaurs();
};

init ();