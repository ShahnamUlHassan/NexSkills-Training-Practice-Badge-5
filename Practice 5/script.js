function getperc(){
    var name = prompt("Please enter your name")
    let obtainedMarks = document.getElementById("obt1").value 
    let totalMarks = document.getElementById("tm1").value 
    let result = (obtainedMarks / totalMarks) * 100;
    document.querySelector("#h1").innerHTML=(`<h1>Dear ${name} your percentage is ${result}</h1>`)
    alert(result)
    console.log("Dear " + name + " your percentage is " + result)
};