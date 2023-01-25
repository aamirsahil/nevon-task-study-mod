// get the elements
function displayInConsole(){
    removeFromLocal();
    const q1 = document.querySelector('input[name="question1"]:checked').value;
    const q2 = document.querySelector('input[name="question2"]:checked').value;
    const q3 = document.querySelector('input[name="question3"]:checked').value;
    const q4 = document.querySelector('input[name="question4"]:checked').value;
    const q5 = document.querySelector('input[name="question5"]:checked').value;
    const q6 = document.querySelector('input[name="question6"]:checked').value;
    storeIntro(q1, q2, q3, q4, q5, q6);
}

function storeIntro(q1, q2, q3, q4, q5, q6){
    window.localStorage.setItem("How would you describe your ability to read English", q1);
    window.localStorage.setItem("How would you describe your ability to understand a text that is written in English", q2 );
    window.localStorage.setItem("What kind of school do you go to", q3);
    window.localStorage.setItem("What medium of instruction does your teacher follow in class", q4);
    window.localStorage.setItem("Would you describe yourself as someone who usually gets distracted easily", q5);
    window.localStorage.setItem("Do you find it difficult to focus your attention while reading", q6);
    displayFromLocal();
}

function displayFromLocal(){
    window.location.href="passage.html";
}

function removeFromLocal(){
    window.localStorage.removeItem('How would you describe your ability to read English');
    window.localStorage.removeItem('How would you describe your ability to understand a text that is written in English');
    window.localStorage.removeItem('What kind of school do you go to');
    window.localStorage.removeItem('What medium of instruction does your teacher follow in class');
    window.localStorage.removeItem('Would you describe yourself as someone who usually gets distracted easily');
    window.localStorage.removeItem('Do you find it difficult to focus your attention while reading');
}