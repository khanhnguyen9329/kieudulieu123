function result(){
    let Amount = document.getElementById("Amount").value;
    let From= document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let result

    if (From == "USA" && To == "VND" ){
        result = "kết quả"+"="+ (Amount*23000) +" "+"VND"
    }
    else if (From == "VND"&& To =="USA" ){
        result= "kết quả"+ "="+ (Amount/23000)+"  "+"USD"
    }
    else if (From =="VND"&& To =="VND" ){
        result = "kết quả"+"="+ (Amount )+"  "+"VND"
    }
    else {
        result= ("kết quả "+"="+ Amount +"USA")
    }
    document.getElementById("khanh").innerHTML= result;
}
function demo(){
    document.getElementById("Amount").style.background="red"

}
function demo1(){
    document.getElementById("Amount").style.background="blue"
}
function demo2(){
    document.getElementById("bienmau").style.background="red"
}