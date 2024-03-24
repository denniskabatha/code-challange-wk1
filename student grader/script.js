//create an event listeners
function calculate(){
    let i = document.getElementById('i').value;
    let s = document.getElementById('s').value;
    let c = document.getElementById('c').value;
    let p = document.getElementById('p').value;

    const total = parseFloat(i) + parseFloat(s) + parseFloat(c) + parseFloat(p);
    document.getElementById("demo").innerHTML = `your total is ${total}`

    const per = (total/400)*100;
    document.getElementById("demo1").innerHTML = `your percentage is ${per}`

    if (per>=79) {
        document.getElementById("demo2").innerHTML = `your grade is A`
    }
    else if (per>=70) {
        document.getElementById("demo2").innerHTML = `your grade is B+`
    }
    else if (per>=60) {
        document.getElementById("demo2").innerHTML = `your grade is B`
    }
    else if (per>=50) {
        document.getElementById("demo2").innerHTML = `your grade is C+`
    }
    else if (per>=49) {
        document.getElementById("demo2").innerHTML = `your grade is C`
    }
    else if (per>=41) {
        document.getElementById("demo2").innerHTML = `your grade is D`
    }else if (per<40) {
        document .getElementById("demo2").innerHTML= `your grade is E`
    }


}