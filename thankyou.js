let csvOutput;
const btnDownload = document.getElementById('download');
const btnHome = document.getElementById('restart');
btnHome.style.visibility = "hidden";

function backHome() {
    window.location.href = "index.html";
    //location.reload();
}

function getValuesFromLS() {
    let userName = window.localStorage.getItem("userName");
    let studyDate = window.localStorage.getItem("studyDate");
    let consent = window.localStorage.getItem("consent");
    let grade = 9;
    let preNavon = window.localStorage.getItem("preNavon");
    let paragraph_type = window.localStorage.getItem("paragraph_type");
    let paragraph_id = window.localStorage.getItem("passage");
    preNavon = JSON.parse(preNavon);
    console.log(preNavon);
    const headers = ['image', 'correct answer', 'key pressed', 'type', 'time', 'is correct?'].join(',')
    let preNavonArray = "";
    preNavon.forEach(x => {
        preNavonArray = preNavonArray + x.join(',') + '\n'
    })
    console.log(preNavonArray);
    let reading = window.localStorage.getItem("reading");
    let readingCode = window.localStorage.getItem("reading-passageCode");
    let postNavon = window.localStorage.getItem("postNavon");
    postNavon = JSON.parse(postNavon);
    console.log(postNavon);
    let postNavonArray = "";
    postNavon.forEach(x => {
        postNavonArray = postNavonArray + x.join(',') + '\n'
    })
    let q1 = window.localStorage.getItem("q1");
    let q2 = window.localStorage.getItem("q2");
    let q3 = window.localStorage.getItem("q3");
    let q4 = window.localStorage.getItem("q4");
    let q5 = window.localStorage.getItem('How would you describe your ability to read English');
    let q6 = window.localStorage.getItem('How would you describe your ability to understand a text that is written in English');
    let q7 = window.localStorage.getItem('What kind of school do you go to');
    let q8 = window.localStorage.getItem('What medium of instruction does your teacher follow in class');
    let q9 = window.localStorage.getItem('Would you describe yourself as someone who usually gets distracted easily');
    let q10 = window.localStorage.getItem('Do you find it difficult to focus your attention while reading');
    csvOutput = "UserName" + "," + userName + "\n" + "Date" + "," + studyDate + "\n" + `Paragraph Type, ${paragraph_type}` + `Paragraph Id, ${paragraph_id}` + "\n" + "Consent" + "," + consent + "\n" + "grade" + "," + grade + "\n";
    csvOutput = csvOutput + "reading" + "," + reading + "," + readingCode + "\n\n";
    csvOutput = csvOutput + 'Pre Navon \n' + headers + '\n' + preNavonArray + '\n';
    csvOutput = csvOutput + 'Post Navon \n' + headers + '\n' + postNavonArray + '\n';
    csvOutput = csvOutput + "How well do you think you did out of 10% (with 1 being terrible and 10 being perfect)" + "," + q1 + "\n";
    csvOutput = csvOutput + "In 1-2 sentences what do you think this experiment was testing" + "," + q2 + "\n";
    csvOutput = csvOutput + "We know it is generally difficult to stay focused in these online experiments.  On a scale of 1-10..." + "," + q3 + "\n";
    csvOutput = csvOutput + "Any other comment or question" + "," + q4 + "\n";
    csvOutput = csvOutput + "How would you describe your ability to read English" + "," + q5 + "\n";
    csvOutput = csvOutput + "How would you describe your ability to understand a text that is written in English" + "," + q6 + "\n";
    csvOutput = csvOutput + "What kind of school do you go to" + "," + q7 + "\n";
    csvOutput = csvOutput + "What medium of instruction does your teacher follow in class" + "," + q8 + "\n";
    csvOutput = csvOutput + "Would you describe yourself as someone who usually gets distracted easily" + "," + q9 + "\n";
    csvOutput = csvOutput + "Do you find it difficult to focus your attention while reading" + "," + q10 + "\n";
    console.log(csvOutput);
}

function clearLS() {
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('studyDate');
    window.localStorage.removeItem('consent');
}

function generateCSV() {
    getValuesFromLS();
    let csv_data = csvOutput;
    downloadCSV(csv_data);

}


function downloadCSV(csv_data) {

    // Create CSV file object 
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate download process
    var temp_link = document.createElement('a');

    // Download csv file
    let t = moment().format('YYYY-MM-DD-HHmm-ss');
    temp_link.download = t + `- ${window.localStorage.getItem("userName")} - ${window.localStorage.getItem("paragraph_type")} - ${window.localStorage.getItem("passage")}`  + ".csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
    btnHome.style.visibility = "visible";
}