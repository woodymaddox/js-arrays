//*
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

/*/const printtodom = (divId, textToprint) => {
 const selectedDiv = document.getElementById(divId);
 selectedDiv.innerHTML = textToprint;
 
};
*/
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

const assignments = []

  //  title: 'product cards',
  //  dueDate: '03/05/2019',
  //  topic: 'HTML/css',
  //  notes: 'Use flexbox',
  //  assignmentUrl: 'www.google.com',
    //total of 5 assignemnts
    //buildassignmentcards- loop over assigments and make a domstring
    //reuse the print to dom 


/*
const init = () => {
buildDinosaurs();
};

init ();  
*/
const card =[
    {
        title: 'test assignment',
        dueDate: 'Due date:March 15,2019',
        link: 'Get the assigment HERE',
        topic: 'Topic: test',
        notes: 'Notes: test',
    },
    {
        title: 'test assignment',
        dueDate: 'Due date:March 15,2019',
        link: 'Get the assigment HERE',
        topic: 'Topic: test',
        notes: 'Notes: test',
    },
    {
        title: 'test assignment',
        dueDate: 'Due date:March 15,2019',
        link: 'Get the assigment HERE',
        topic: 'Topic: test',
        notes: 'Notes: test',
    },
    {
        title: 'test assignment',
        dueDate: 'Due date:March 15,2019',
        link: 'Get the assigment HERE',
        topic: 'Topic: test',
        notes: 'Notes: test',
    },
    {
        title: 'test assignment',
        dueDate: 'Due date:March 15,2019',
        link: 'Get the assigment HERE',
        topic: 'Topic: test',
        notes: 'Notes: test',
    },
];



const printtodom = (divId, textToprint) => {
 const selectedDiv = document.getElementById(divId);
 selectedDiv.innerHTML = textToprint;
 
};

const buildCard =() => {
    let domstring = '';
  for(let i =0; i <card.length; i++){
      domstring += `<div class="classcard">`
      domstring += `<h3>${card[i].title}</h3>`;
      domstring += `<h1>${card[i].dueDate}</h1>`
      domstring += `<h3><a href=${card[i].link} >Get the assignment Here </a></h3>`
      domstring += `<p>${card[i].topic}</p>`
      domstring += `<p>${card[i].notes}</p>`
      domstring += `</div>'`
    
  }
  printtodom('classcard', domstring);
};

const init = () => {
    buildCard();
    };
    
    init ();