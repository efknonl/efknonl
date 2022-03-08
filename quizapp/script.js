const quizData = [
    {
        question: 'Who is the best soccer player of the world?',
        a: 'Lionel Pepsi',
        b: 'Jesse Lingardinho',
        c: 'Kenan GOAT Karaman',
        d: 'Cristiano Penaldo(siiiuuu)',
        correct: 'c'
    }, {
        question: 'Who is the Presiden of USA?',
        a: 'Recep Tayyip ERDOĞAN',
        b: 'Lebron JAMES',
        c: 'John CENA(Who is the option c. I cant see.)',
        d: 'Joe BIDEN',
        correct: 'd'
    }, {
        question: 'Who is the 2nd best soccer player of the world?',
        a: 'Lakaka',
        b: 'Alfaro Motara',
        c: 'Kalayn Mbambe',
        d: 'De Buruni',
        correct: 'a'
    }, {
        question: '2+2=?',
        a: '3,76',
        b: '4,01',
        c: '22',
        d: '3,14',
        correct: 'c'
    }, {
        question: 'Who is the best rapper of the world?',
        a: 'Kenya Middle East',
        b: 'Aşık "lil" Veysel',
        c: 'Kobe Bryant',
        d: 'Justin Bieber',
        correct: 'c'
    }, {
        question: 'Where is The Somalian Man from ?',
        a: 'Bangladesh',
        b: 'India',
        c: 'North Korea',
        d: 'Somalia(I think trap question)',
        correct: 'd'
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at 
            ${score}/${quizData.length} qustions.</h2> 
            
            <button onclick="location.reload()">Reload</button>
            `;

        }


    }


});





























