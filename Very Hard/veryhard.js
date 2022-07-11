function calculator(){
    var operator = prompt("Enter a sign (either +, -, *, /)");
 
    if (operator = "+" ){
        var num1 = parseInt(prompt("Enter number: "));
        var num2 = parseInt(prompt("Enter another number: "))
        sum= num1 + num2; 
        console.log(`${num1}+${num2}= ${sum}`)
    }
    else if (operator =="-") {
        var sub1 = parseInt (prompt("Enter number: ") );
        var sub2 = parseInt (prompt ("Enter another number: ")) ;
        diff = sub1 - sub2;
        console.log(`${sub1}- ${sub2} = ${diff}`);
    }

    else if (operator =="*") {
        var mul1 = parseInt (prompt("Enter number: ") );
        var mul2 = parseInt (prompt ("Enter another number: ")) ;
        prod = mul1 - mul2;
        console.log(`${mul1}- ${mul2} = ${prod}`);
    }

    else if (operator =="/") {
        var div1 = parseInt (prompt("Enter number: ") );
        var div2 = parseInt (prompt ("Enter another number: ")) ;
        quo = div1 / div2;
        console.log(`${div1}/${div2} = ${res}`);
    }

    else{
        console.log ("Please make sure the operator is one of the following, +, -, *, or /");
    }
}    
    calculator();