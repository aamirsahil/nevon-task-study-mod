const grade1=document.getElementById('grade-1');
const grade2=document.getElementById('grade-2');
const grade3=document.getElementById('grade-3');

function whichGrade(){
    if( (document.getElementById("grade-1").checked===true)){
        window.localStorage.setItem("grade", grade1.value);      
    }
    if( (document.getElementById("grade-2").checked===true)){
        window.localStorage.setItem("grade", grade2.value);
    }
    window.open("./navon-practice.html","_self");  
}