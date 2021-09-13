let intsructionsForm = `<input class="nameUser">
                       <input class="score" readonly>
                       <button class="">`;




let btnStartQuiz = document.getElementsByClassName("btn-startQuiz")[0];
let instructions = document.getElementsByClassName("instructions")[0];
let instructionsBody = document.getElementsByClassName("instructions-body")[0];
let instructionsClose = document.getElementsByClassName("closeDismiss")[0];
let instructionsHeader = document.getElementsByClassName(
  "instructions-header"
)[0];
let instructionsFooter = document.getElementsByClassName(
  "instructions-footer"
)[0];
let quizStart = document.getElementsByClassName("startQuizIntro")[0];
let questions = [
  "हिंदी में कितने व्यंजन होते हैं? (How many consonants are there in Hindi?)",
  "कब हिंदी को राजभाषा का दर्जा मिला? (When did Hindi get the status of official language?)",
  "हिंदी में प्रथम प्रकाशित पुस्तक किसे माना जाता है? (Which is considered the first published book in Hindi?)",
  "हिंदी किस भाषा से ली गई है? (From which language is hindi derived?)",
  "भारत के अलावा दुनिया के कितने विश्व विद्यालयों में हिंदी पढ़ाई जाती है? (Apart from India, how many universities in the world teach Hindi?)",
  "ज्ञ क्या है? (What is 'ज्ञ')",
  "ऑस्कर पुरस्कार के लिए नामांकित की गई पहली हिंदी फिल्म कौन सी थी? (Which was the first Hindi film nominated for an Oscar award?)",
  "देश का पहला राज्य जिसने हिंदी को आधिकारिक भाषा के रूप में स्वीकार किया? (The first state in the country to accept Hindi as an official language?)",
  "हिन्दी में वेब एड्रेस बनाने की सुविधा कब शुरू हुई? (When is the web page facility being started in Hindi?)",
  "भारत का शेक्सपीयर किसे कहा जाता है? (Who is known as India’s Shakespeare?)",
  "हिन्दी साहित्य की प्रथम कहानी? (Which is the first story of Hindi literature?)",
  "हिन्दी की प्रथम पत्रिका? (Which is the first Hindi magazine?)",
  "Your Score",
];

let timerOut = document.getElementsByClassName("timerOut")[0];
let options = [
  ["question2", "theseROptions", "two more", "last"],
  [
    "24 सितंबर (24th September) ",
    "14 अक्टूबर (14th October)",
    "14 सितंबर (14th September)",
    "1 नवंबर (1st November)",
  ],
  [
    "काशी का अस्सी (kaashi ki assi)",
    "मैला आँचल (mela aanchal)",
    "गोदान (godan)",
    "निर्मला (nirmala)",
  ],
  [
    "संस्कृत (Sanskrit)",
    "पुर्तगाली (Portugese)",
    "फारसी (Persian)",
    "जापानी (Japanese)",
  ],
  ["21", "89", "94", "69"],
  [
    "स्वर (Svar/Vowel)",
    "व्यंजन (vyanjan/consonant)",
    "संयुक्त व्यंजन (Samyukth vyanjan)",
    "दीर्घ स्वर (Deergha swar)",
  ],
  [
    "अथैय्या (Athaiyya)",
    "सिंगम (Singam)",
    "गांधी (Gandhi)",
    "बाहुबली (Baahubali)",
  ],
  [
    "मध्य प्रदेश (Madhya Pradesh)",
    "राजस्थान (Rajasthan)",
    "बिहार (Bihar)",
    "उत्तर प्रदेश (Uttar Pradesh)",
  ],

  [
    "1997",
    "2022",
    "2010",
    "2045"
  ],
  [
    "महादेवी वर्मा (Mahadevi Verma)",
    "कबीर (Kabir)",
    "कालिदास (Kalidas)",
    "मीराबाई (Meerabai)",
  ],
  [
    "गोदन (Godan)",
    "जनता (Janatha)",
    "इन्दुमती (Indumathi)",
    "भारतमाथा (Bharathmaatha)",
  ],
  [
    "चंपक (Champak)",
    "चंदामामा (Chandamaama)",
    "संवाद कौमुदी (samvaad komudi)",
    "गृहशोभा (Grihshobha)",
  ],
  ["anser", "only", "one", "more"],
];
let i = 0;
let j = 0;
let score = 0;

btnStartQuiz.onmouseover = () => {
  let mouseOverAN = document.querySelector(".mouseOver");
  mouseOverAN.style.animation = "instructionsBodyAppear .5s forwards";
};

btnStartQuiz.onmouseout = () => {
  let mouseOverAN = document.querySelector(".mouseOver");
  mouseOverAN.style.animation = "instructionsBodyDisappear .5s forwards";
};

btnStartQuiz.onclick = instrApp;

function instrApp() {
  instructions.style.display = "block";
  instructions.style.animation = "instructionsAppear 1s forwards";
  setTimeout(() => {
    instructionsHeader.style.animation = "instructionsBodyAppear 1s forwards";
    instructionsFooter.style.animation = "instructionsBodyAppear 1s forwards";
    instructionsBody.style.animation = "instructionsBodyAppear 1s forwards";
    0;
  }, 1000);
}

instructionsClose.onclick = () => {
  instructionsHeader.style.animation = "instructionsBodyDisappear 1s forwards";
  instructionsFooter.style.animation = "instructionsBodyDisappear 1s forwards";
  instructionsBody.style.animation = "instructionsBodyDisappear .5s forwards";

  setTimeout(() => {
    instructions.style.animation = "instructionsDisappear 1s forwards";
  }, 1000);

  setTimeout(() => {
    instructions.style.display = "none";
  }, 1500);
};

quizStart.onclick = () => {
  instructionsBody.style.animation = "instructionsBodyDisappear .5s forwards";
  setTimeout(() => {
    instructionsBody.style.display = "none";
    instructionsClose.style.animation = "instructionsBodyDisappear 1s forwards";
    setTimeout(() => {
      instructionsClose.style.animation =
        "instructionsBodyDisappear 1s forwards";
      instructionsClose.onanimationend = () => {
        instructionsClose.style.display = "none";
        quizStart.className = "btn nextQue";
        quizStart.innerText = "Next Question";
        quizStart.classList.remove("startQuizIntro");
        let nextQue = document.getElementsByClassName("nextQue")[0];
        nextQue.onclick = shiftQue;
        let audio = document.querySelector("audio");
        audio.play();
        audio.volume = 0.1;
        instructionsHeader.innerHTML = ` <p>${questions[0]}</p>`;
        instructionsBody.style.display = "block";
        instructionsBody.style.opacity = 0;
        instructionsBody.style.animation = "instructionsBodyAppear 1s forwards";
        instructionsBody.innerHTML =
          '<input class="wrong" lang="hi" id="wrong" value="31" readonly><br><input class="wrong" id="wrong" value="39" readonly><br><input class="correct" id="correct" value="41" readonly><br><input class="wrong" id="wrong" value="43" readonly>';
        function shiftQue() {
          if (wrong0.classList.contains("wrongInput")) {
            wrong0.classList.remove("wrongInput");
          }
          if (wrong1.classList.contains("wrongInput")) {
            wrong1.classList.remove("wrongInput");
          }
          if (wrong2.classList.contains("wrongInput")) {
            wrong2.classList.remove("wrongInput");
          }
          if (correct.classList.contains("correctInput")) {
            correct.classList.remove("correctInput");
          }
          let audio = document.querySelector("audio");
          if (nextQue.classList.contains("checkScore")) {
            audio.play();
            audio.volume = 0.1;
          }
          audio.play();
          audio.volume = 0.1;

          j++;
          i++;
          console.log(i);
          let orderQue = Math.floor(Math.random() * 4) + 1;
          instructionsBody.style.display = "flex";
          instructionsBody.style.flexDirection = "column";
          instructionsBody.style.position = "relative";
          instructionsBody.style.top = "-80px";
          instructionsBody.innerHTML = `<input class="wrong" id="wrong" value="${options[j][0]}" readonly><br><input class="wrong" id="wrong" value="${options[j][1]}" readonly><br><input class="correct" id="correct" value="${options[j][2]}" readonly><br><input class="wrong" id="wrong" value="${options[j][3]}" readonly>`;
          wrong0 = document.getElementsByClassName("wrong")[0];
          wrong1 = document.getElementsByClassName("wrong")[1];
          wrong2 = document.getElementsByClassName("wrong")[2];
          correct = document.getElementsByClassName("correct")[0];
          wrong0.style.order = orderQue;
          while (parseInt(wrong0.style.order) === orderQue) {
            orderQue = Math.floor(Math.random() * 4) + 1;
          }
          wrong1.style.order = orderQue;
          while (
            orderQue === parseInt(wrong0.style.order) ||
            orderQue === parseInt(wrong1.style.order)
          ) {
            orderQue = Math.floor(Math.random() * 4) + 1;
          }
          wrong2.style.order = orderQue;
          while (
            orderQue === parseInt(wrong0.style.order) ||
            orderQue === parseInt(wrong1.style.order) ||
            orderQue === parseInt(wrong2.style.order)
          ) {
            orderQue = Math.floor(Math.random() * 4) + 1;
          }
          correct.style.order = orderQue;
          console.log(
            wrong0.style.order,
            wrong1.style.order,
            wrong2.style.order,
            correct.style.order
          );

          wrong0.onclick = () => {
            wrong0.classList.add("wrongInput");
            setInterval(() => {
              instructionsHeader.innerHTML = "<p>" + questions[i] + "</p>";
            }, 10);
            correct.classList.add("correctInput");
          };

          wrong1.onclick = () => {
            wrong1.classList.add("wrongInput");
            setInterval(() => {
              instructionsHeader.innerHTML = "<p>" + questions[i] + "</p>";
            }, 10);

            correct.classList.add("correctInput");
          };

          wrong2.onclick = () => {
            wrong2.classList.add("wrongInput");
            setInterval(() => {
              instructionsHeader.innerHTML = "<p>" + questions[i] + "</p>";
            }, 10);

            correct.classList.add("correctInput");
          };

          correct.onclick = () => {
            setInterval(() => {
              instructionsHeader.innerHTML = "<p>" + questions[i] + "</p>";
            }, 10);
            score++;
            correct.classList.add("correctInput");
          };
          /*
          setTimeout(() => {
            let wrong0 = document.getElementsByClassName("wrong")[0];
            let wrong1 = document.getElementsByClassName("wrong")[1];
            let wrong2 = document.getElementsByClassName("wrong")[2];
            let correct = document.getElementsByClassName("correct")[0];
            wrong0.classList.add("wrongInput");
            wrong1.classList.add("wrongInput");
            wrong2.classList.add("wrongInput");
            correct.classList.add("correctInput");
          }, 16000);
          */
          wrong0.pointerEvents = "initial";
          wrong1.pointerEvents = "initial";
          wrong2.pointerEvents = "initial";
          correct.pointerEvents = "initial";
          console.log(i);
          if (i === 12) {
            instructionsBody.style.animation =
              "instructionsBodyDisappear .5s forwards";
            console.log("hello i is 8");
            nextQue.innerText = "Check Score!";
            nextQue.classList.add("checkScore");
            nextQue.classList.remove("nextQue");
            nextQue = null;
            let checkScore = document.getElementsByClassName("checkScore")[0];
            checkScore.onclick = checkScoreFn;
            function checkScoreFn() {
              instructionsBody.style.display = "block";
              let audio = document.querySelector("audio");
              audio.play();
              audio.volume = 0.1;
              let message = "";
              let color = "";
              if (score < 3) {
                message = "Bad luck? Better luck next time!";
                color = "red";
              } else if (score < 7) {
                message = "Well Done!";
                color = "orange";
              } else {
                message = "Excellent!";
                color = "green";
              }

              instructionsBody.style.animation =
                "instructionsBodyDisappear .5s forwards";
              instructionsHeader.style.animation =
                "instructionsBodyDisappear .5s forwards";
              checkScore.style.animation =
                "instructionsBodyDisappear .5 forwards";
              let scoreDiv = document.createElement("div");
              scoreDiv.classList.add("scoreDiv");
              scoreDiv.innerHTML = `<p class="heading"> Your Score </p> <p class="scoreNum">${score}/12</p> <br><p class="msg" style="color: ${color};"> ${message}</p> <br> <br> <button class="btn btn-reload">Redo Quiz</button>`;
              // console.log(document.querySelectorAll(".btn"));
              // if (
              //   document
              //     .querySelectorAll(".btn")
              //     .classList.contains("btn-reload")
              // ) {
              //   let btnReload = document.querySelector(".btn-reload");
              //   btnReload.onclick = () => {
              //     location.reload;
              //   };
              // }
              instructionsBody.innerHTML = "";
              instructionsBody.appendChild(scoreDiv);
              setTimeout(() => {
                checkScore.style.display = "none";
                instructionsBody.style.animation =
                  "instructionsBodyAppear .5s forwards";
              }, 510);
              setTimeout(() => {
                document.querySelector('.submitScore').style.display = "block";
                document.querySelector('.submitScore').style.animation = 'wannaSubmit .5s forwards';
                let submitScore = document.getElementsByClassName('linkSub')[0];
                submitScore.onclick = () => {
                  instructions.style.animation = 'instructionsBodyDisappear .5s forwards';
                  setTimeout(() => {instructions.innerHTML = '';instructions.style.animaton = 'instructionsBodyAppear .5s forwards'; 
                    setTimeout(() => {
                      instructions.innerHTML = instructionsForm;
                    }, 500);  
                  }, 500);
                }  
              }, 3000);  
              document.querySelector(".btn-reload").onclick = () => {
                location.reload();
              };
            }
            instructionsHeader.innerHTML = `<p>${questions[i]}</p>`;
          } else {
            instructionsHeader.innerHTML = `<p>${questions[i]}</p>`;
          }
        }

        let wrong0 = document.getElementsByClassName("wrong")[0];
        let wrong1 = document.getElementsByClassName("wrong")[1];
        let wrong2 = document.getElementsByClassName("wrong")[2];
        let correct = document.getElementsByClassName("correct")[0];
     


        wrong0.onclick = () => {
          wrong0.classList.add("wrongInput");
          setInterval(() => {
            instructionsHeader.innerHTML = "<p>" + questions[i] + "</p>";
          }, 10);
          correct.classList.add("correctInput");
        };

        wrong1.onclick = () => {
          wrong1.classList.add("wrongInput");
          setInterval(() => {
            instructionsHeader.innerHTML = "<p>" + questions[i] + "</p>";
          }, 10);
          correct.classList.add("correctInput");
        };

        wrong2.onclick = () => {
          wrong2.classList.add("wrongInput");
          setInterval(() => {
            instructionsHeader.innerHTML = "<p>" + questions[i] + "</p>";
          }, 10);
          correct.classList.add("correctInput");
        };

        correct.onclick = () => {
          setInterval(() => {
            instructionsHeader.innerHTML = "<p>" + questions[i] + "</p>";
          }, 10);
          score++;
          correct.classList.add("correctInput");
        };
      };
    }, 500);
  }, 500);
};
