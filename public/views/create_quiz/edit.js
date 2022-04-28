const URL = "http://localhost:8000/data";

axios.get(URL).then((response) => {
    let list = response.data;
    console.log(list);
})




// add Question
function addQuestion(event){
    event.preventDefault();

    let question = document.getElementById("question").value;
    let answer1 = document.getElementById("answer1").value;
    let answer2 = document.getElementById("answer2").value;
    let answer3 = document.getElementById("answer3").value;
    let answer4 = document.getElementById("answer4").value;

    console.log(question);
    
}

// display question 


// main code
let applyAnswer = document.getElementById("submit");
applyAnswer.addEventListener("click", addQuestion);