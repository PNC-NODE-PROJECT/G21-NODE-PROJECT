const URL = "/api/questions";

function addQuestion(){
    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let correction = document.getElementById("selection");
    let newQuestion = {
        titleQuestion:question.value,
        answer:{
            answer1:answer1.value,
            answer2:answer2.value,
            answer3:answer3.value,
            answer4:answer4.value
        },
        correction:correction.value
    };
    
    axios.post("/api/questions",newQuestion).then(response => {
        let data = response.data;
        console.log(data);
    })
}

let addTheQuestion = document.getElementById("add");
addTheQuestion.addEventListener("click", addQuestion);