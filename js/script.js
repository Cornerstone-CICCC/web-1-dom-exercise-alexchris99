// YOUR CODE HERE
// btn 1
const block_1 = document.querySelector("#output1");

const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",() =>{
    block_1.classList.toggle("output_click")
});

//btn 2
const text2 = document.querySelector("#output2")

const btn2 = document.querySelector("#btn2");

const nElement = document.createElement("span");
    nElement.textContent ="Hello World";

btn2.addEventListener("click", () =>{
    text2.append(nElement);
})

// btn 3
const text3 = document.querySelector("#output3>p");

const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () =>{
    text3.classList.toggle("small-text");
})

// btn 4

const text4 = document.querySelectorAll("#output4>p");

const btn4 = document.querySelector("#btn4")

btn4.addEventListener("click", () =>{
    for(let i = 0; i < text4.length; i++){
        text4[i].style.color = "red";
    }
});

// btn 5
const text5 = document.querySelector("#message");

const btn5 = document.querySelector("#btn5");

btn5.addEventListener("click", () => {
    console.log(text5.value)
});
