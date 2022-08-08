function Addition(){
    let number1= +document.getElementById("demo").value;
    let number2=+ document.getElementById("demo1").value;
    let result ;
    result = number1+number2
    document.getElementById("ketqua").innerHTML="kết quả ="+"  " +result;

}
function Subtraction(){
    let number1= +document.getElementById("demo").value;
    let number2=+ document.getElementById("demo1").value;
    let result1 ;
    result1= (number1-number2)
    document.getElementById("ketqua").innerHTML="kết quả ="+"  " +result1;
}
function Multiplication(){
    let number1= +document.getElementById("demo").value;
    let number2=+ document.getElementById("demo1").value;
    let result2 ;
    result2= (number1*number2)
    document.getElementById("ketqua").innerHTML="kết quả ="+"  " +result2;
}
function Division(){
    let number1= +document.getElementById("demo").value;
    let number2=+ document.getElementById("demo1").value;
    let result3 ;
    result3= (number1/number2)
    document.getElementById("ketqua").innerHTML="kết quả ="+"  " +result3;
}
function abc(){
    document.getElementById("demo").style.background="red"
}
function abcd(){
    document.getElementById("demo").style.background="blue"
}