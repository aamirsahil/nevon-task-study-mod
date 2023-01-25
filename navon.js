const key_answers = {
    "24": {
        "type": "Global",
        "key": "z"
    },
    "25": {
        "type": "Local",
        "key": "m"
    },
    "26": {
        "type": "Local",
        "key": "m"
    },
    "27": {
        "type": "Local",
        "key": "m"
    },
    "20": {
        "type": "Global",
        "key": "z"
    },
    "21": {
        "type": "Local",
        "key": "z"
    },
    "22": {
        "type": "Local",
        "key": "z"
    },
    "23": {
        "type": "Local",
        "key": "z"
    },
    "28": {
        "type": "Global",
        "key": "m"
    },
    "29": {
        "type": "Global",
        "key": "m"
    },
    "1": {
        "type": "Local",
        "key": "m"
    },
    "0": {
        "type": "Global",
        "key": "z"
    },
    "3": {
        "type": "Local",
        "key": "m"
    },
    "2": {
        "type": "Local",
        "key": "m"
    },
    "5": {
        "type": "Global",
        "key": "m"
    },
    "4": {
        "type": "Global",
        "key": "m"
    },
    "7": {
        "type": "Global",
        "key": "z"
    },
    "6": {
        "type": "Global",
        "key": "m"
    },
    "9": {
        "type": "Local",
        "key": "z"
    },
    "8": {
        "type": "Global",
        "key": "z"
    },
    "11": {
        "type": "Local",
        "key": "z"
    },
    "10": {
        "type": "Local",
        "key": "z"
    },
    "13": {
        "type": "Local",
        "key": "m"
    },
    "12": {
        "type": "Global",
        "key": "z"
    },
    "15": {
        "type": "Local",
        "key": "m"
    },
    "14": {
        "type": "Local",
        "key": "m"
    },
    "17": {
        "type": "Global",
        "key": "m"
    },
    "16": {
        "type": "Global",
        "key": "m"
    },
    "19": {
        "type": "Global",
        "key": "z"
    },
    "18": {
        "type": "Global",
        "key": "m"
    },
    "31": {
        "type": "Global",
        "key": "z"
    },
    "30": {
        "type": "Global",
        "key": "m"
    },
    "35": {
        "type": "Local",
        "key": "z"
    },
    "34": {
        "type": "Local",
        "key": "z"
    },
    "33": {
        "type": "Local",
        "key": "z"
    },
    "32": {
        "type": "Global",
        "key": "z"
    }
}

let correct_response = {};
let csv_data = []; // shown_image, correct_answer, key_pressed, global/local, time, is correct

const navonCard=document.getElementById('navonImg');

let counter=0;
let sTime;
let diff;


let promptId=shuffleImgId(); // this generates the random index
console.log(promptId);

let preNavon;

function startNavon(){
    initializePreNavon(preNavon);
    showPrompt(promptId);
    console.log(promptId);
}

function initializePreNavon(){
    preNavon=[
        [0,'','',''],
        [1,'','',''],
        [2,'','',''],
        [3,'','',''],
        [4,'','',''],
        [5,'','',''],
        [6,'','',''],
        [7,'','',''],
        [8,'','',''],
        [9,'','',''],
        [10,'','',''],
        [11,'','','']
    ];

}


function showPrompt(imgId) {
    navonCard.src="./img/"+imgId[counter]+".png";
    preNavon[counter][1]=imgId[counter];
    console.log("preNavon here it is: "+ preNavon[counter][1]);
    startTimer();
    console.log("Navon Task Prompt:"+ imgId[counter]);
    console.log("The counter value is: "+counter);
    navonCard.style.height = '550px';
    navonCard.style.width = '550px';
}

document.addEventListener('keypress', e =>{
    correct_response = key_answers[promptId[counter]];
    switch (e.key){
        case 'z':
            if (counter<11){
                preNavon[counter][2]=e.key;
                const diff = stopTimer();
                csv_data.push([`${promptId[counter]}.png`, correct_response.key, e.key, correct_response.type, diff, correct_response.key == e.key])
                logValues();
                displayValues();
                console.log("z key is pressed");
                console.log("------------------------ ");
                counter++;
                showPrompt(promptId); //call the next image
                break;
            }
        else{
                preNavon[counter][2]=e.key;
                const diff = stopTimer();
                csv_data.push([`${promptId[counter]}.png`, correct_response.key, e.key, correct_response.type, diff, correct_response.key == e.key])
                logValues();
                displayValues();
                window.open("./reading.html","_self");
            }
    case 'm':
        if (counter<11){
            preNavon[counter][2]=e.key;
            const diff = stopTimer();
            csv_data.push([`${promptId[counter]}.png`, correct_response.key, e.key, correct_response.type, diff, correct_response.key == e.key])
            logValues();
            displayValues();
            console.log("m key is pressed");
            console.log("------------------------ ");
            counter++;
            showPrompt(promptId); //call the next image
            break;
        }
    else{
            preNavon[counter][2]=e.key;
            const diff = stopTimer();
            csv_data.push([`${promptId[counter]}.png`, correct_response.key, e.key, correct_response.type, diff, correct_response.key == e.key])
            logValues();
            displayValues();
            window.open("./reading.html","_self");
        }
        
    }
});

function startTimer(){
    sTime = Date.now(); 
}

function stopTimer(){
   diff=Date.now()-sTime;
   preNavon[counter][3]=diff;
   return diff;
}


function logValues(){
    let preNavonToString=JSON.stringify(csv_data);
    window.localStorage.setItem("preNavon", preNavonToString);
}

function displayValues(){
    console.log("The reaction time was:"+diff);
}


function shuffleImgId(){
    let imgId= [];
    for (let i=0; i<36; i++) {
        imgId.push(i)
    }
    let newId= [];
    while (imgId.length!==0){
        let randomIndex=Math.floor(Math.random()*imgId.length );
        newId.push(imgId[randomIndex]);
        imgId.splice(randomIndex,1);
    }
    imgId=newId;
    return imgId.slice(0,12);    
}


function preloadImages() {
    const array = []
    for (let i=0; i<36; i++) {
        array.push(`./img/${i}.png`)
    }
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages();
