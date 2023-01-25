const readingCard=document.getElementById('readingTask');
const readingIntro=document.getElementById('readingIntro');
const btnShowPassage=document.getElementById('btnShowPassage');
const btnCompRead=document.getElementById('btnCompRead');
readingCard.style.visibility = "hidden";
btnCompRead.style.visibility = "hidden";
let grade = 9;

let passageText = [ 
    [`A system of membrane-bound vesicles (flattened sacs) arranged approximately parallel to each other in stacks called cisterns is called the Golgi apparatus. It was first described by Camillo Golgi. These membranes often are connected with the membranes of ER and therefore constitute another portion of a complex cellular membrane system. The Golgi apparatus packages and dispatches the material synthesised near the Endoplasmic Reticulum to various targets inside and outside the cell. It stores, modifies and packages products in vesicles. In some cases, the Golgi apparatus may make complex sugars from simple sugars. The Golgi apparatus is also involved in the formation of lysosomes.`],
    [`The way all communities are composed and structured constantly changes as environmental conditions change. This is an important characteristic of all communities.  This change occurs in an order and a sequence, as the physical environment changes. A community that is in near equilibrium with the environment is finally formed due to these changes. It is called a climax community. The species composition of a given area changes gradually and in a fairly predictable way, this is called ecological succession. Some species colonise an area during succession and their population become more numerous whereas populations of other species decline and even disappear.`],
    [`The autotrophic organism fulfils its Carbon and energy requirements by photosynthesis. Autotrophs take in substances from the outside and convert them into stored forms of energy in this process. The plant takes this material in the form of carbon dioxide and water and converts it into carbohydrates when sunlight and chlorophyll are present. The plants use these carbohydrates to provide them with energy. The plant stores the carbohydrates which are not used immediately in the form of starch and uses them as internal energy reserves as and when required. In a somewhat similar situation we store some of the energy derived from the food we eat in our body in the form of glycogen.`],
];

 let passageCode=window.localStorage.getItem("passage");
 readingCard.innerText=passageText[passageCode];
//  let passageId=window.localStorage.getItem("passage"); // this generates the random index
 
//readingCard.innerText=passageText[passageId[0]];
//passageCode=passageId[0];

function random(a, A) {
    return Math.floor(Math.random() * (A - a + 1)) + a;
}
 


function gradeBasedPassage(){
    let gradeId;
    if(grade==='9'){
        gradeId = random(0, 1);
        console.log(gradeId);
        readingCard.innerText=passageText[gradeId];
        passageCode=gradeId;
    }
    if(grade==='10'){
        gradeId = random(2, 3);
        readingCard.innerText=passageText[gradeId];
        passageCode=gradeId;
    }
    window.localStorage.setItem('paragraph_type', 'Modified');
}

// gradeBasedPassage();


function showReadingCard() {
    readingCard.style.visibility = "visible";
    btnCompRead.style.visibility = "visible";
    readingIntro.style.display = "none";
    btnShowPassage.style.display = "none";
    startTimer();
  }

 function completedReadingCard(){
     stopTimer();
     displayTime();
     window.open("./navon-intro2.html","_self");
 } 

 function startTimer(){
    sTime = Date.now(); 
}

let diff;

function stopTimer(){
    diff=Date.now()-sTime;
    window.localStorage.setItem("reading", diff);
    window.localStorage.setItem("reading-passageCode", passageText[passageCode]);
}


function displayTime(){
    console.log("The reaction time was:"+diff);
}



function shufflePassageId(){
    let imgId= [0, 1, 2,3,4,5];
    let newId= [];
    while (imgId.length!==0){
        let randomIndex=Math.floor(Math.random()*imgId.length );
        newId.push(imgId[randomIndex]);
        imgId.splice(randomIndex,1);
    }
    imgId=newId;
    return imgId;    
}