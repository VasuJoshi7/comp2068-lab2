var express = require('express');
var app = express();



app.get('/', function (req, res) {
    var method_name = req.query.method;
    var num1 = req.query.x;
    var num2 = req.query.y;
    if (method_name != undefined) {
        if (num1 != undefined || num2 != undefined) {
            var result = calculator(method_name, num1, num2);
            res.send(result);
        }
    }
    else {
        // res.send("Hi" + method_name + ", " + param1 + ", " + param2);
        res.sendFile(__dirname+"/error.html");
    }

});


function calculator(method, num1, num2) {
    var number1 = parseFloat(num1);
    switch (method) {
        case 'add':
            return "Output: " + number1 + " + " + num2 + " = " + (parseFloat(num1) + parseFloat(num2));
        case 'subtract':
            return "Output: " + num1 + " - " + num2 + " = " + (parseFloat(num1) - parseFloat(num2));
        case 'multiply':
            return "Output: " + num1 + " * " + num2 + " = " + (parseFloat(num1) * parseFloat(num2));
        case 'divide':
            return "Output: " + num1 + " / " + num2 + " = " + (parseFloat(num1) / parseFloat(num2));
        default:
            return "Method is not valid or check method spell mistake.";
    }
}

// app.get('/p', function (req, res) {
//     res.send("Hi shubham welcome to your first devlopment site");
// });

// app.get('/:method=add&:num1&:num2', function (req, res) {
//     var n1 = parseFloat(req.params.num1);
//     var n2 = parseFloat(req.params.num2);
//     var sum = (n1 + n2);
//     res.send("the addition is = " + sum);

// });

app.get('/method=subtract', function (req, res) {
    res.send("you are called substract method");
});
app.listen(3000);
console.log("server is ruuning at http://localhost:3000 ");