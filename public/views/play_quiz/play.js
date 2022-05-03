const URL = "http://localhost:8000/api/questions"; // URL
axios.get(URL)
.then(response => {
    let questions = response.data;
    let answers = questions.answer;
    for(let data of questions)
    {
        let container = document.querySelector(".container");
        let form = document.createElement("form");
        let title = document.createElement("h3");
        title.textContent = data.titleQuestion;
        form.appendChild(title);
        
        
        // loop to desplay answers
        let answers = data.answer;
        for(let answer of Object.keys(answers))
        {
            let answerOfQuestion = answers[answer];
            let option = document.createElement("input");
            let br = document.createElement("br");
            let label = document.createElement("label");
            option.type = 'radio';
            option.name = 'answer';
            option.className = "option";
            option.value =  answerOfQuestion;
            label = textContent = answerOfQuestion;
            form.append(option);
            form.append(label)
            form.append(br);
            container.appendChild(form);
        }

    }

});



