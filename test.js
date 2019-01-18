var output, result;
const calculator = document.getElementById("mySidenav");
var history_value = document.getElementById("history-value");
var output_value = document.getElementById("output-value");
var history = document.getElementById("history");
var output = document.getElementById("output");
var oprand;
var length = 0;

var res;

var storeToHistory;


function getOutput() {
    return document.getElementById("output-value").innerText;
}
function getHistory() {
    return document.getElementById("history-value").innerText;
}

var ele = document.querySelectorAll(".number");
var len = ele.length;


document.onkeypress = function (evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    if (length < 10) {
         if (charStr >= 0 && charStr <= 9 /*|| charStr == "+" || charStr == "." || charStr == "-" || charStr == "*" || charStr == "/" || charStr == "!" || charStr == "%" || charStr == "^"*/) {
            var enter = document.getElementById(charStr)
            if (enter) {
                //enter.addEventListener("");
                output = output_value.innerHTML += enter.innerHTML;
                length = output.length;


                // alert("find!");
            }

            // output = output_value.innerHTML += charStr;
            // length = output.length;
            //console.log("hi");
        }

    }
    else if (length >= 10) {
        alert("Sorry no more input is allowed");
    }

}, false;


for (var i = 0; i < len; i++) {
    ele[i].addEventListener("click", function () {
        var num = this.id;
        //console.log(num);

        if (length < 10) {
            output = output_value.innerHTML += num;
            length = output.length;
            //console.log(length);
        }
        else if (length >= 10) {
            alert("Sorry no more input is allowed");
        }
    }, false);

}


var ele = document.querySelectorAll(".operator");
var len = ele.length;

for (var i = 0; i < len; i++) {
    ele[i].addEventListener("click", function () {

        if (output_value.innerHTML.length == 0) {
            alert("Please Enter digit first!!");
            output_value.innerHTML.length = "";
        }
        else {
            oprand = this.id;
            //console.log(oprand);
            output = output_value.innerHTML += oprand;
            history_value.innerHTML = getOutput();
            output_value.innerHTML = "";
            length = 0;
        }
    }, false);
    //console.log(output);
}


var eq = document.getElementById("=");
eq.addEventListener("click", function () {

    //console.log(oprand);
    var op1 = Number(getOutput());
    var op2 = getHistory();
    if (op2 == "" || op1 == "") {
        alert("Enter value to compute!");
    }

    else {

      //  console.log(op2[0]);
        var op2 = Number(op2.substring(0, op2.length - 1));
        switch (oprand) {
            case "+":
                var res = op2 + op1;
                output_value.innerHTML = res;
                break;
            case "-":
                var res = op2 - op1;
                output_value.innerHTML = res;
                break;
            case "/":
                var res = op2 / op1;
                output_value.innerHTML = res;
                break;
            case "*":
                var res = op2 * op1;
                output_value.innerHTML = res;
                break;
            case "%":
                var res = op2 % op1;
                output_value.innerHTML = res;
                break;
            case "^":

                res = Math.pow(op2, op1);
        //        console.log(res);
                output_value.innerHTML = Number(res);
                break;

            default:
          //      console.log(oprand);

        }





       // console.log(op2 + " " + op1);
        history_value.innerHTML = op2 + oprand + op1;
        var his = op2 + oprand + op1 + "=";
        //console.log("hhhh" + res);

        storeToHistory = { his, res };
        //console.log(res);

        storeHistory();
        
        // count++;
        // localStorage.setItem(count, his + "=" + res);
    }
}, false);




var squr = document.getElementById("X²");
squr.addEventListener("click", function () {
    var op2 = getHistory();
    if (op2 == "") {
        //console.log("null");
    }
    else {

        var his = getHistory();
        var op2 = Number(op2.substring(0, op2.length - 2));
        //console.log("hi" + op2);
        res = op2 * op2;
        //console.log(res);
        output_value.innerHTML = res;
        // count++;
        //localStorage.setItem(count, his + "=" + res);
        var his = his + "=";
        storeToHistory = { his, res };
        storeHistory();
    }
});

var cube = document.getElementById("X³");
cube.addEventListener("click", function () {
    var op2 = getHistory();
    if (op2 == "") {
        //console.log("null");
    } else {
        var his = getHistory();
        var op2 = Number(op2.substring(0, op2.length - 2));
        //console.log(op2);
        res = op2 * op2 * op2;
        var his = his + "=";
        storeToHistory = { his, res };
        //console.log(res);
        output_value.innerHTML = res;
        //count++;
        storeHistory();
    }
});

var root = document.getElementById("√");
root.addEventListener("click", function () {
    var op2 = getHistory();
    if (op2 == "") {
        //console.log("null");
    }
    else {
        var his = getHistory();
        var op2 = Number(op2.substring(0, op2.length - 1));
        //console.log(op2);
        res = Math.sqrt(op2);
        //console.log(res);
        output_value.innerHTML = res;
        // count++;
        // localStorage.setItem(count, his + "=" + res);
        var his = his + "=";
        storeToHistory = { his, res };
        storeHistory();
    }
});

var fact = document.getElementById("!");
fact.addEventListener("click", function () {
    var op2 = getHistory();
    if (op2 == "") {
        //console.log("null");
    } else {
        var his = getHistory();
        var op2 = Number(op2.substring(0, op2.length - 1));
        //console.log(op2);
        //console.log(typeof(op2));
        if (his.includes('.')) {
            alert("Floating point value is not allowed is Factorial function!!\nEnter Integer value!");
        }
        factorial(op2);
        //console.log(factorial(op2));
        output_value.innerHTML = factorial(op2);
        var res = factorial(op2);
        // count++;
        // localStorage.setItem(count, his + "=" + res);
        var his = his + "=";
        storeToHistory = { his, res };
        storeHistory();
    }
}), false;
function factorial(num) {
    if (num == 0)
        return 1;
    else
        return num * factorial(num - 1);
}

var clear = document.getElementById("clear");
clear.addEventListener("click", function () {
    output_value.innerHTML = "";
    history_value.innerHTML = "";
}, false)

var clear = document.getElementById("backspace");
clear.addEventListener("click", function () {

    var output = reverseNumberFormat(getOutput()).toString();
    if (output) {//if output has a value
        output = output.substr(0, output.length - 1);
        output_value.innerHTML = output;
    }


}, false)

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}



// function display() {
//     var ll = localStorage.length;
//     console.log(ll);
//     for (var j = ll - 1; j >= ll - 10; j--) {

//         var data = localStorage.getItem(j);
//         console.log(data);
//         var sH = document.createElement('p');
//         sH.style.textAlign = "center";// is a node
//         sH.innerHTML = data;
//         calculator.appendChild(sH);
//     }
// }

// function removechild() {
//     while (calculator.children.length - 3) {
//         calculator.removeChild(calculator.lastChild);
//     }
// }
function storeHistory() {
   // console.log(res);
    let abc = [];
    abc = JSON.parse(localStorage.getItem('ans'));

    if (abc == null) {
        abc = [];
    }
    if (Object.keys(abc).length > 9) {
        abc.shift();
    }
    abc.push(storeToHistory);

    localStorage.setItem('ans', JSON.stringify(abc));
}


while (calculator.children.length - 1) {
    calculator.removeChild(calculator.lastChild);
}
let historyDisplay = [];
historyDisplay = JSON.parse(localStorage.getItem('ans'));
if (historyDisplay !== null) {

    historyDisplay.forEach(element => {
        let newA = document.createElement('p');
        newA.textContent = (element.his + " " + element.res);
        newA.style.textAlign = "center";
        newA.style.paddingBottom = "10px";
        calculator.appendChild(newA);
       // window.location.reload();
        
    });
}