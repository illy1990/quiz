let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: false
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
]

let section = document.createElement("section")
section.id = "gallery"
let index = 1;
let index2 = 0;



for (let i of data) {
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    img.src = i.url
    let figcaption = document.createElement("figcaption")

    let p1 = document.createElement("p")
    p1.innerText = i.question
    p1.style.fontWeight = "bold"

    let div = document.createElement("div")

    let divArray = i.choice;
    let AnswerArray = i.answer;

    div.style.display = "flex"
    console.log(divArray)


    for (l of divArray) {
        let span = document.createElement("span")
        div.appendChild(span)
        span.innerHTML = (l)
        span.setAttribute("id", index);
        span.setAttribute("class", index2);
        index++;
        span.style.margin = "40px"
        span.style.padding = "50px"
        span.style.backgroundColor = "grey"
        span.style.color = "white"
        // span.setAttribute("onclick", "Uberprufen(l)")
    }
    index2++;

    // let p3 = document.createElement("p")

    // p3.innerText = i.answer
    // for (j of i.choice) {
    //     p3.innerText += j
    // }


    figcaption.appendChild(p1)
    figcaption.appendChild(div)
    // figcaption.appendChild(p3)
    figure.appendChild(img)
    figure.appendChild(figcaption)
    section.appendChild(figure)


}

document.body.appendChild(section)
document.getElementById("gallery").style.display = "grid"
document.getElementById("gallery").style.gridTemplateColumns = "1fr"
for (let j of document.getElementsByTagName("img")) {
    j.style.width = "50%";
}



let newSpans = document.querySelectorAll("span")
for (i of newSpans) {
    i.addEventListener("click", e =>
        Uberprufen(e)
    )
}


function Uberprufen(e) {
    console.log(e)
    console.log(e.target.className)
    console.log(e.target.innerHTML)
    console.log(data[e.target.className].answer)
    if (e.target.innerHTML == data[e.target.className].answer) {

        e.target.style.backgroundColor = "green"
    } else {
        e.target.style.backgroundColor = "red"
    }
}


// ganz pragmatisch:

// document.getElementById("1").addEventListener("click", () => {
//     document.getElementById("1").style.backgroundColor = "red"
// })

// document.getElementById("2").addEventListener("click", () => {
//     document.getElementById("2").style.backgroundColor = "red"
// })
// document.getElementById("3").addEventListener("click", () => {
//     document.getElementById("3").style.backgroundColor = "red"
// })
// document.getElementById("4").addEventListener("click", () => {
//     document.getElementById("4").style.backgroundColor = "green"
// })
// document.getElementById("5").addEventListener("click", () => {
//     document.getElementById("5").style.backgroundColor = "red"
// })
// document.getElementById("6").addEventListener("click", () => {
//     document.getElementById("6").style.backgroundColor = "red"
// })
// document.getElementById("7").addEventListener("click", () => {
//     document.getElementById("7").style.backgroundColor = "green"
// })
// document.getElementById("8").addEventListener("click", () => {
//     document.getElementById("8").style.backgroundColor = "red"
// })
// document.getElementById("9").addEventListener("click", () => {
//     document.getElementById("9").style.backgroundColor = "red"
// })
// document.getElementById("10").addEventListener("click", () => {
//     document.getElementById("10").style.backgroundColor = "green"
// })
// document.getElementById("11").addEventListener("click", () => {
//     document.getElementById("11").style.backgroundColor = "red"
// })
// document.getElementById("12").addEventListener("click", () => {
//     document.getElementById("12").style.backgroundColor = "red"
// })
// document.getElementById("13").addEventListener("click", () => {
//     document.getElementById("13").style.backgroundColor = "red"
// })
// document.getElementById("14").addEventListener("click", () => {
//     document.getElementById("14").style.backgroundColor = "green"
// })
// document.getElementById("15").addEventListener("click", () => {
//     document.getElementById("15").style.backgroundColor = "red"
// })
// document.getElementById("16").addEventListener("click", () => {
//     document.getElementById("16").style.backgroundColor = "red"
// })
// document.getElementById("17").addEventListener("click", () => {
//     document.getElementById("17").style.backgroundColor = "red"
// })
// document.getElementById("18").addEventListener("click", () => {
//     document.getElementById("18").style.backgroundColor = "green"
// })
// document.getElementById("19").addEventListener("click", () => {
//     document.getElementById("19").style.backgroundColor = "red"
// })
// document.getElementById("20").addEventListener("click", () => {
//     document.getElementById("20").style.backgroundColor = "green"
// })
// document.getElementById("21").addEventListener("click", () => {
//     document.getElementById("21").style.backgroundColor = "red"
// })
// document.getElementById("22").addEventListener("click", () => {
//     document.getElementById("22").style.backgroundColor = "red"
// })
// document.getElementById("23").addEventListener("click", () => {
//     document.getElementById("23").style.backgroundColor = "red"
// })
// document.getElementById("24").addEventListener("click", () => {
//     document.getElementById("24").style.backgroundColor = "green"
// })
// document.getElementById("25").addEventListener("click", () => {
//     document.getElementById("25").style.backgroundColor = "red"
// })
// document.getElementById("26").addEventListener("click", () => {
//     document.getElementById("26").style.backgroundColor = "red"
// })
// document.getElementById("27").addEventListener("click", () => {
//     document.getElementById("27").style.backgroundColor = "red"
// })
// document.getElementById("28").addEventListener("click", () => {
//     document.getElementById("28").style.backgroundColor = "red"
// })
// document.getElementById("29").addEventListener("click", () => {
//     document.getElementById("29").style.backgroundColor = "green"
// })
// document.getElementById("30").addEventListener("click", () => {
//     document.getElementById("30").style.backgroundColor = "red"
// })
// document.getElementById("31").addEventListener("click", () => {
//     document.getElementById("31").style.backgroundColor = "red"
// })
// document.getElementById("32").addEventListener("click", () => {
//     document.getElementById("32").style.backgroundColor = "red"
// })
// document.getElementById("33").addEventListener("click", () => {
//     document.getElementById("33").style.backgroundColor = "green"
// })
// document.getElementById("34").addEventListener("click", () => {
//     document.getElementById("34").style.backgroundColor = "red"
// })
// document.getElementById("35").addEventListener("click", () => {
//     document.getElementById("35").style.backgroundColor = "green"
// })
// document.getElementById("36").addEventListener("click", () => {
//     document.getElementById("36").style.backgroundColor = "red"
// })
// document.getElementById("37").addEventListener("click", () => {
//     document.getElementById("37").style.backgroundColor = "red"
// })