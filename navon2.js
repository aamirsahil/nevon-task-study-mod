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

var postNavon =[
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
    [11,'','',''],
    [12,'','',''],
    [13,'','',''],
];

function startNavon(){
    // initializepostNavon(postNavon);
    showPrompt(promptId);
    console.log(promptId);
}

// function initializepostNavon(){
//     postNavon=[
//         [0,'','',''],
//         [1,'','',''],
//         [2,'','',''],
//         [3,'','',''],
//         [4,'','',''],
//         [5,'','',''],
//         [6,'','',''],
//         [7,'','',''],
//         [8,'','',''],
//         [9,'','',''],
//         [10,'','',''],
//         [11,'','','']
//     ];

// }


function showPrompt(imgId) {
    navonCard.src="./img/"+imgId[counter]+".png";
    postNavon[counter][1]=imgId[counter];
    console.log("postNavon here it is: "+ postNavon[counter][1]);
    startTimer();
    console.log("Navon Task Prompt:"+ imgId[counter]);
    console.log("The counter value is: "+counter);
    navonCard.style.height = '550px';
    navonCard.style.width = '550px';
}

document.addEventListener('keypress', e =>{
    if(counter>13) 
        {return;}
    else{
        correct_response = key_answers[promptId[counter]];
        switch (e.key){
            case 'z':
                if (counter<13){
                    postNavon[counter][2]=e.key;
                    const diff = stopTimer();
                    csv_data.push([`${promptId[counter]}.png`, correct_response.key, e.key, correct_response.type, diff, correct_response.key == e.key])
                    counter++;
                    logValues();
                    displayValues();
                    console.log("z key is pressed");
                    console.log("------------------------ ");
                    showPrompt(promptId); //call the next image
                    break;
                }
                else{
                    console.log(counter);
                    postNavon[counter][2]=e.key;
                    const diff = stopTimer();
                    csv_data.push([`${promptId[counter]}.png`, correct_response.key, e.key, correct_response.type, diff, correct_response.key == e.key])
                    counter++;
                    logValues();
                    displayValues();
                    window.open("./feedback.html","_self");
                    break;
                    }
            case 'm':
                if (counter<13){
                    postNavon[counter][2]=e.key;
                    const diff = stopTimer();
                    csv_data.push([`${promptId[counter]}.png`, correct_response.key, e.key, correct_response.type, diff, correct_response.key == e.key])
                    counter++;
                    logValues();
                    displayValues();
                    console.log("m key is pressed");
                    console.log("------------------------ ");
                    showPrompt(promptId); //call the next image
                    break;
                }
                else{
                    console.log(counter);
                    postNavon[counter][2]=e.key;
                    const diff = stopTimer();
                    csv_data.push([`${promptId[counter]}.png`, correct_response.key, e.key, correct_response.type, diff, correct_response.key == e.key])
                    counter++;
                    logValues();
                    displayValues();
                    window.open("./feedback.html","_self");
                    break;
                    }     
        }
    }
});

function startTimer(){
    sTime = Date.now(); 
}

function stopTimer(){
    diff=Date.now()-sTime;
    postNavon[counter][3]=diff;
    return diff;
 }

 function logValues(){
    let postNavonToString=JSON.stringify(csv_data);
    window.localStorage.setItem("postNavon", postNavonToString);
}

function displayValues(){
    console.log("The reaction time was:"+diff);
}


function shuffleImgId(){
    let imgId= [];
    // for (let i=0; i<36; i++) {
    //     imgId.push(i);
    // }
    let newId= [[0,13,3,26,6,28,5,0,22,20,7,9,11,15],
                [1,12,14,15,28,18,13,17,8,10,33,31,5,23],
                [15,11,9,7,20,22,0,5,28,6,26,3,13,0],
                [23,5,31,33,10,8,17,13,18,28,15,14,12,1],
                [3,5,20,33,10,18,17,13,18,28,13,14,12,1],
                [24,6,20,33,25,18,34,13,18,26,15,11,12,10],
                [35,16,12,33,25,2,34,17,20,26,15,30,9,10],
                [31,12,16,25,33,34,3,20,17,15,26,9,30,7],
                [12,31,35,16,10,21,8,27,18,17,9,26,31,6],
                [5,3,33,20,18,10,13,17,28,18,14,23,1,12],
                [17,27,9,0,18,5,13,17,27,19,11,14,1,12],
            ];
    let randomIndex=Math.floor(Math.random()*newId.length);
    imgId=newId[randomIndex];
    return imgId;
}


