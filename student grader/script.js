function calculate(){
    let i = document.getElementById('i').value;
    let s = document.getElementById('s').value;
    let c = document.getElementById('c').value;
    let p = document.getElementById('p').value;

    let total = parseFloat(i) + parseFloat(s) + parseFloat(c) + parseFloat(p);
    document.getElementById("demo").innerHTML = `your total is ${total}`

}