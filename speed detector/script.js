function checkSpeed() {
    let speed = document.getElementById("speed").value;

    const number = parseFloat(speed)

    if (number<=70) {
        document.getElementById("demo").innerHTML = "Ok"
        
    }else if (number<=75) {
        document.getElementById("demo1").innerHTML = "2 points"
    }else if (number<=80) {
        document.getElementById("demo1").innerHTML = "4 points"
    }else if (number<=85) {
        document.getElementById("demo1").innerHTML = "6 points"
    }else if (number<=90) {
        document.getElementById("demo1").innerHTML = "8 points"
    }else if (number<=95) {
        document.getElementById("demo1").innerHTML = "10 points"
    }else if (number<=100) {
        document.getElementById("demo1").innerHTML = "12 points"
    }else if (number<=105) {
        document.getElementById("demo1").innerHTML = "licence suspended"
    }

}