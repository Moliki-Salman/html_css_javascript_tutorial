// selecting using getelementbyid
const firstNumber = document.getElementById("first_number");
const secondNumber = document.getElementById("second_number");

// selecting using queryselector (selects class)
const addButtton = document.querySelector(".btn");
const main = document.querySelector(".main")

// selecting using queryselector all (all element that marches the criteria be it class, div etc)
const numbers = document.querySelectorAll("input");
 console.log("working");

//  adding eventlisteners
addButtton.addEventListener("click", () => {
    const result = Number(firstNumber.value) + Number(secondNumber.value);
    // console.log(result)
    const div = document.createElement("div");
    div.innerHTML = `${firstNumber.value} + ${secondNumber.value} = ${result})`
    if(result > 0) {
        div.className = "positive"
    } else {
        div.className = "negative"
    }
    main.appendChild(div)
})

