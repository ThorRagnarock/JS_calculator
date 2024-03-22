const numBtns = document.querySelectorAll(".calc .btn");
let scrn = document.querySelector(".display")
let factorOne = "",
    factorTwo = "";
let arithmaticsOperator = false;
scrn.innerHTML = "";
scrn.innerHTML = 0;
let calcRes = 0;

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function () {
        inputFactors(this.value)
    });
}
function inputFactors(pressedKey) {
    scrn.classList.remove("blink");      //UN-BLINK!!!

    if (pressedKey >= 0 && pressedKey <= 9) {
        if (calcRes == scrn.innerHTML) {
            factorOne = "";
            factorTwo = "";
            arithmaticsOperator = false;
            calcRes = 0;
       }

        if (!arithmaticsOperator) {
            factorOne += pressedKey;
            scrn.innerText = factorOne;
            console.log("hello there!");
        } else {
            factorTwo += pressedKey;
            scrn.innerText = factorTwo;
            console.log("hello there too!");
        }

    } else {
        console.log(factorOne);
        scrn.innerHTML = factorOne;

        console.log(factorTwo);
        switch (pressedKey) {
            case "clr":
                factorOne = "";
                factorTwo = "";
                arithmaticsOperator = false;
                scrn.innerHTML = "";
                scrn.innerHTML = 0;
                break;
            case "/":
            case "*":
            case "-":
            case "+":
                if (arithmaticsOperator) scrn.innerText = "2 factors only";
                arithmaticsOperator = true;
                arithmaticsOperator = pressedKey;
                scrn.classList.add("blink");    //BLINK!!!
                break;
            case "=":
                calcRes = makeArithmetics(factorOne, arithmaticsOperator, factorTwo);
                scrn.innerHTML = calcRes;
                calcRes = scrn.innerHTML;
                scrn.classList.add("blink");    //BLINK!!!
                break;
            default:
                scrn.innerText = "Invalid key";
                break;
        }
    }
}

function makeArithmetics(factorOne, arithmaticsOperator, factorTwo) {

    let calcRes = 0;
    if (arithmaticsOperator == "/") calcRes = +factorOne / +factorTwo;
    else if (arithmaticsOperator == "*") calcRes = +factorOne * +factorTwo;
    else if (arithmaticsOperator == "-") calcRes = +factorOne - +factorTwo;
    else if (arithmaticsOperator == "+") calcRes = +factorOne + +factorTwo;

    return calcRes;
}