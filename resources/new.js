const startButton = document.getElementById('start')
const startQuiz = document.getElementById('start-quiz')
const submitBtn1 = document.getElementById('submit1')
const submitBtn2 = document.getElementById('submit2')
const submitBtn3 = document.getElementById('submit3')
const submitBtn4 = document.getElementById('submit4')
const submitBtn5 = document.getElementById('submit5')
const submitBtn6 = document.getElementById('submit6')
const submitBtn7 = document.getElementById('submit7')
const questionContainerElement = document.getElementById('quiz-header')
const class1 = document.getElementById('q1')
const class2 = document.getElementById('q2')
const class3 = document.getElementById('q3')
const class4 = document.getElementById('q4')
const class5 = document.getElementById('q5')
const class6 = document.getElementById('q6')
const class7 = document.getElementById('q7')
const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')
const question4 = document.getElementById('question4')
const question5 = document.getElementById('question5')
const question6 = document.getElementById('question6')
const question7 = document.getElementById('question7')
const answerEl = document.querySelectorAll('.answer')
const q1_a_text = document.getElementById('q1a')
const q1_b_text = document.getElementById('q1b')
const q1_c_text = document.getElementById('q1c')
const q1_d_text = document.getElementById('q1d')
const q1_e_text = document.getElementById('q1e')
const q2_a_text = document.getElementById('q2a')
const q2_b_text = document.getElementById('q2b')
const q3_a_text = document.getElementById('q3a')
const q3_b_text = document.getElementById('q3b')
const q4_a_text = document.getElementById('q4a')
const q4_b_text = document.getElementById('q4b')
const q4_c_text = document.getElementById('q4c')
const q4_d_text = document.getElementById('q4d')
const q4_e_text = document.getElementById('q4e')
const q5_a_text = document.getElementById('q5a')
const q5_b_text = document.getElementById('q5b')
const q6_a_text = document.getElementById('q6a')
const q6_b_text = document.getElementById('q6b')
const q7_a_text = document.getElementById('q7a')
const q7_b_text = document.getElementById('q7b')
const q7_c_text = document.getElementById('q7c')
const q1a = document.getElementById('.q1_a_text')
const q1b = document.getElementById('.q1_b_text')
const q1c = document.getElementById('.q1_c_text')
const q1d = document.getElementById('.q1_d_text')
const q1e = document.getElementById('.q1_e_text')
const q2a = document.getElementById('.q2_a_text')
const q2b = document.getElementById('.q2_b_text')
const answers1 = document.getElementById('#answers1')
const answers2 = document.getElementById('#answers2')
const answers3 = document.getElementById('#answers3')
const answers4 = document.getElementById('#answers4')
const answers5 = document.getElementById('#answers5')
const answers6 = document.getElementById('#answers6')
const answers7 = document.getElementById('#answers7')
const header = document.getElementById('quiz-header')

const inputs = document.getElementsByTagName('input');

// setNextQuestion.onload = function uncheck(checkbox) {for (let i=0; i<inputs.length; i++)  {
//   if (inputs[i].type == 'checkbox')   {
//     inputs[i].checked = false;
//   }
// }
// }

// const quizDAta1 = [
//     {
//         question: "Was möchtest du handeln?",
//         answers: [
//             {a: "Kryptowährungen (z.B. Bitcoin, Ethereum)", score: 1},
//             {b: "Forex / Klassische Währungen (z.B. Euro, US-Dollar)", score: 2},
//             {c: "Rohstoffe (z.B. Öl, Gold)", score: 3},
//             {d: "Aktien (z.B. Apple, Tesla)", score: 4},
//             {e: "Ich möchte alles handeln", score: 5},
//         ],        
//     },
// ];
// const quizData1 = [
//     {
//         question: "Was möchtest du handeln?",
//         a: {a: "Kryptowährungen (z.B. Bitcoin, Ethereum)", score: 1},
//         b: {b: "Forex / Klassische Währungen (z.B. Euro, US-Dollar)", score: 2},
//         c: {c: "Rohstoffe (z.B. Öl, Gold)", score: 3},
//         d: {d: "Aktien (z.B. Apple, Tesla)", score: 4},
//         e: {e: "Ich möchte alles handeln", score: 5},
//     },
//     {
//         question: "Ist dir ein Kostenloses Demokonto wichtig?",
//         a: {a: "Ja"},
//         b: {b: "Nein"},
//     },
//     {
//         question: "Ist dir ein hoher Hebel wichtig? (Kleines Fragezeichen mit Erklärung „Was ist ein Hebel? In fast jedem Konto der Broker bekommst du einen Hebel, der dir es ermöglicht größere Summen zu handeln, was mehr mögliche Gewinne oder Verluste bedeuten kann)",
//         a: {a: "Ja"},
//         b: {b: "Nein"},
//     },
//     {
//         question: "Mit wie viel Kapital möchtest du Starten? (Kleines Fragezeichen mit Erklärung „Wieso Fragen wir das? Einige Broker haben Mindesteinzahlungsbeträge, mit dieser Frage können wir Broker ausschließen, die eine zu hohe Mindesteinzahlung haben und so können wir dir Broker auflisten, die für dich in Frage kommen“)",
//         a: {a: "Weniger als 200€"},
//         b: {b: "200-500€"},
//         c: {c: "500-1200€"},
//         d: {d: "1200-3000€"},
//         e: {e: "Mehr als 3000€"},
//     },
//     {
//         question: "Ist dir ein Deutscher Kundensupport wichtig?",
//         a: {a: "Ja"},
//         b: {b: "Nein"},
//     },
//     {
//         question: "Bevorzugst du eine App zu haben um immer und überall zugriff auf dein Konto zu haben?",
//         a: {a: "Ja ich möchte eine App haben"},
//         b: {b: "Nein, mir reicht eine Desktop Version"},
//     },
//     {
//         question: "Bis zu welcher Summe Soll dein Geld zu 100% abgesichert sein?(Einlagensicherung) (Kleines Fragezeichen “In dem Fall das irgendetwas mit den Kundengeldern passiert sind Broker durch Einlagensicherungsfonds abgedeckt, die nachfolgende Summe ist die Summe die Maximal pro Kunde abgedeckt ist”)",
//         a: {a: "Bis zu 3000€"},
//         b: {b: "Bis zu 20.000€"},
//         c: {c: "Bis zu 100.000€"},
//     },
// ];

// to get data from the HTML form
// Array.from(document.querySelectorAll('#q1 input')).reduce((acc, input) => ({...acc, [input.id]: input.value }), {});



// function getCheckboxValue() {
//     var lang1= document.getElementById("q1_a_text");
//     var lang2= document.getElementById("q1_b_text");
//     var lang3= document.getElementById("c");
//     var lang4= document.getElementById("d");
//     var lang5= document.getElementById("e");
//     var result= " ";
//     if (lang1.checked == true){
//         var lg1= document.getElementById("a").value;
//         return document.getElementById('result').innerHTML = 'Blackbull is out';
//     }
//     else if (lang2.checked == true){
//         var lg2= document.getElementById("s2").value;
//         result= result + lg2 + " ";
//     }
//     else if (lang3.checked == true){
//         document.write(result);
//         var lg3= document.getElementById("s3").value;
//         result= result + lg3 ;
//     }
//     else {
//         return document.getElementById("result").innerHTML= "Select any one";
//     }
//     return document.getElementById("result").innerHTML= "You have selected " + result + " language";
// }
                
let currentQuiz = 0
let myBrokerChoice = ['Plus500', 'XTB', 'Blackbull', 'Admiral Markets', 'eToro']
// var myArray = []

startButton.addEventListener('click', startGame)

// function deselectAnswers() {
//     answers.forEach(answerEl => answers.checked = false)
// }

function checkAnswers() {
    if(saveAnswer1() === saveAnswer2() && document.querySelector('#q4_e_text').checked !== true) {
        document.getElementById('blackbull-500').classList.remove('hide')
        document.getElementById('quiz').style.height = "80%";
        document.getElementById('quiz').style.width = "80%";
    }
    else if(saveAnswer1() === saveAnswer2() && document.querySelector('#q4_e_text').checked == true) {
        document.getElementById('blackbull-admiral').classList.remove('hide')
        document.getElementById('quiz').style.height = "90%";
    }
    else if(document.querySelector('#q4_e_text').checked == true) {
        document.getElementById('admiral').classList.remove('hide')
    }
    else {
        document.getElementById('plus500').classList.remove('hide')
    }
}
// function checkAnswers2() {
//         if(document.querySelector('#q4_e_text').checked == true) {
//             document.getElementById('admiral').classList.remove('hide')
//         }
//         else {
//             document.getElementById('plus500').classList.remove('hide')
//         }
// }

// function writeText() {
//     if(saveAnswer1() === 'Blackbull') {
//         document.getElementById('blackbull').classList.remove('hide')
//     }
// }
function saveAnswer1() {
    if(document.querySelector('#q1_a_text').checked !== true && (document.querySelector('#q1_d_text').checked !== true)) {
        var firstChoice = 'Blackbull'
        return firstChoice
    } else {
        return 'nothing'
    }
}

function saveAnswer2() {
    if(document.querySelector('#q3_a_text').checked == true) {
        var firstChoice1 = 'Blackbull'
        return firstChoice1
    } else {
        return 'only one'
    }
}

// function compare() {
//     if(document.querySelector('#q3_a_text').checked == true) {
//         var compare1 = ['Blackbull'];
//         for(let i = 0; i < myArray().length; i++) {
//             if(compare1[0] === myArray()[i]) {
//                     // console.log(compare1)
//                     return compare1
//                 } else {
//                     console.log('why this?')
//                     return myArray()
//             }
//         }
//     } else {
//         return myArray()
//     }
// }

// function myArray() {
//     if(document.querySelector('#q1_a_text').checked == true) {
//         var myArray1 = ['Plus500', 'XTB', 'Admiral Markets', 'eToro']
//         console.log(myArray1)
//         return myArray1
//     }
//     else if(document.querySelector('#q1_d_text').checked == true) {
//         var myArray1 = ['Plus500', 'XTB', 'Admiral Markets', 'eToro']
//         console.log(myArray1)
//         return myArray1
//     } else {
//         var myArray1 = ['Plus500', 'XTB', 'Blackbull', 'Admiral Markets', 'eToro']
//         console.log(myArray1)
//         return myArray1
//     };
// }

// function array2() {
//     if(document.querySelector('#q4_a_text').checked == true) {
//         var myArray2 = ['Plus500', 'Blackbull', 'eToro']
//         console.log(myArray2)
//         return myArray2
//     }
//     else if(document.querySelector('#q4_b_text').checked == true) {
//         var myArray2 = ['Plus500', 'Blackbull', 'eToro']
//         console.log(myArray2)
//         return myArray2
//     }
//     else if(document.querySelector('#q4_c_text').checked == true) {
//         var myArray2 = ['Plus500', 'XTB', 'Blackbull', 'eToro']
//         console.log(myArray2)
//         return myArray2
//     } else {
//         var myArray2 = ['Plus500', 'XTB', 'Blackbull', 'Admiral Markets', 'eToro']
//         console.log(myArray2)
//         return myArray2
//     };
// }

// function compare2() {
//     if(document.querySelector('#q5_a_text').checked == true && document.querySelector('#q4_c_text').checked == true) {
//         var compare2 = ['Plus500', 'XTB', 'eToro'];
//         console.log(compare2)
//         return compare2
        
//     } 
//     else if(document.querySelector('#q5_a_text').checked == true && document.querySelector('#q4_a_text').checked == true) {
//         var compare2 = ['Plus500', 'eToro'];
//         console.log(compare2)
//         return compare2
//     }  
//     else if(document.querySelector('#q5_a_text').checked == true && document.querySelector('#q4_b_text').checked == true) {
//         var compare2 = ['Plus500', 'eToro'];
//         console.log(compare2)
//         return compare2
//     }
//     else if(document.querySelector('#q5_a_text').checked == true && document.querySelector('#q4_d_text').checked == true) {
//         var compare2 = ['Plus500', 'XTB', ('Blackbull'), 'Admiral Markets', 'eToro'];
//         console.log(compare2)
//         return compare2
//     }
//     else if(document.querySelector('#q5_a_text').checked == true && document.querySelector('#q4_e_text').checked == true) {
//         var compare2 = ['Plus500', 'XTB', ('Blackbull'), 'Admiral Markets', 'eToro'];
//         console.log(compare2)
//         return compare2
//     } else {
//             console.log('continue in flow')
//             return array2()
//     };
// }

// function compare3() {
//     if(document.querySelector('#q7_a_text').checked == true) {
//         console.log('not what I selected')
//         return compare2()
//     } 
//     if(document.querySelector('#q7_b_text').checked == true) {
//         var compare3 = ['Plus500', 'Blackbull', 'Admiral Markets', 'eToro'];
//         var empty = [];
//         for(let i = 0; i < compare2().length; i++) {
//             if(compare3[i] === compare2()[i]) {
//                 empty.push(compare2()[i])
//                 console.log(empty)
//                 return empty
//                 // var i = 0;
//                 // var entry1;
//                 // while (i < array1.length) {
//                 //     entry1 = array1[i];
//                 //     if (array2.some(function(entry2) { return entry1.Id === entry2.Student.Id; })) {
//                 //         // Found, progress to next
//                 //     ++i;
//                 // } else {
//                 // // Not found, remove
//                 // array1.splice(i, 1);
//     }
// }
//             } else {
//                 console.log('didn\'t work')
//                 return myArray()
//             }
//         }
//     }
// }

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    startQuiz.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    class1.classList.remove('hide')
    submitBtn1.classList.remove('hide')
    setNextQuestion()
    
}

let currentQuizData = quizData1[currentQuiz]
const liAnswers = document.querySelectorAll('li');

function setNextQuestion() {
    // deselectAnswers()

    submitBtn1.addEventListener('click', check1)
}

function check1() {
    if(document.querySelector('#q1_a_text').checked == true) {
        correct1()
        document.getElementById('error1').classList.add('hide')
    }
    else if(document.querySelector('#q1_b_text').checked == true) {
        correct1()
        document.getElementById('error1').classList.add('hide')
    }
    else if(document.querySelector('#q1_c_text').checked == true) {
        correct1()
        document.getElementById('error1').classList.add('hide')
    }
    else if(document.querySelector('#q1_d_text').checked == true) {
        correct1()
        document.getElementById('error1').classList.add('hide')
    }
    else if(document.querySelector('#q1_e_text').checked == true) {
        correct1()
        document.getElementById('error1').classList.add('hide')
    }
    else {
        document.getElementById('error1').classList.remove('hide')
    }
}
function correct1() {
    setQuestion2()
}

function setQuestion2() {

    saveAnswer1()

    class1.classList.add('hide')
    class2.classList.remove('hide')
    submitBtn1.classList.add('hide')
    submitBtn2.classList.remove('hide')

    submitBtn2.addEventListener('click', check2)
}

function check2() {
    if(document.querySelector('#q2_a_text').checked == true) {
        correct2()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q2_b_text').checked == true) {
        correct2()
        document.getElementById('error2').classList.add('hide')
    }
    else {
        document.getElementById('error2').classList.remove('hide')
    }
}
function correct2() {
    setQuestion3()
}

function setQuestion3() {

    class2.classList.add('hide')
    class3.classList.remove('hide')
    submitBtn2.classList.add('hide')
    submitBtn3.classList.remove('hide')

    submitBtn3.addEventListener('click', check3)
}

function check3() {
    if(document.querySelector('#q3_a_text').checked == true) {
        correct3()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q3_b_text').checked == true) {
        correct3()
        document.getElementById('error2').classList.add('hide')
    }
    else {
        document.getElementById('error2').classList.remove('hide')
    }
}

function correct3() {
    setQuestion4()
}

function setQuestion4() {

    saveAnswer2()

    class3.classList.add('hide')
    class4.classList.remove('hide')
    submitBtn3.classList.add('hide')
    submitBtn4.classList.remove('hide')

    submitBtn4.addEventListener('click', check4)
}

function check4() {
    if(document.querySelector('#q4_a_text').checked == true) {
        correct4()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q4_b_text').checked == true) {
        correct4()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q4_c_text').checked == true) {
        correct4()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q4_d_text').checked == true) {
        correct4()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q4_e_text').checked == true) {
        correct4()
        document.getElementById('error2').classList.add('hide')
    }
    else {
        document.getElementById('error2').classList.remove('hide')
    }
}

function correct4() {
    setQuestion5()
}


function setQuestion5() {
    
    class4.classList.add('hide')
    class5.classList.remove('hide')
    submitBtn4.classList.add('hide')
    submitBtn5.classList.remove('hide')

    submitBtn5.addEventListener('click', check5)
}

function check5() {
    if(document.querySelector('#q5_a_text').checked == true) {
        correct5()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q5_b_text').checked == true) {
        correct5()
        document.getElementById('error2').classList.add('hide')
    }
    else {
        document.getElementById('error2').classList.remove('hide')
    }
}

function correct5() {
    setQuestion6()
}


function setQuestion6() {

    class5.classList.add('hide')
    class6.classList.remove('hide')
    submitBtn5.classList.add('hide')
    submitBtn6.classList.remove('hide')

    submitBtn6.addEventListener('click', check6)
}

function check6() {
    if(document.querySelector('#q6_a_text').checked == true) {
        correct6()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q6_b_text').checked == true) {
        correct6()
        document.getElementById('error2').classList.add('hide')
    }
    else {
        document.getElementById('error2').classList.remove('hide')
    }
}
function correct6() {
    setQuestion7()
}


function setQuestion7() {
    class6.classList.add('hide')
    class7.classList.remove('hide')
    submitBtn6.classList.add('hide')
    submitBtn7.classList.remove('hide')

    submitBtn7.addEventListener('click', check7)
}

function check7() {
    if(document.querySelector('#q7_a_text').checked == true) {
        correct7()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q7_b_text').checked == true) {
        correct7()
        document.getElementById('error2').classList.add('hide')
    }
    else if(document.querySelector('#q7_c_text').checked == true) {
        correct7()
        document.getElementById('error2').classList.add('hide')
    }
    else {
        document.getElementById('error2').classList.remove('hide')
    }
}
function correct7() {
    getEmail()
    checkAnswers()
}

function getEmail() {

    class7.classList.add('hide')
    submitBtn7.classList.add('hide')
    document.getElementById('quiz-header').classList.add('hide')
    checkAnswers()
    checkAnswers2()
}