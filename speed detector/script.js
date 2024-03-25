function checkSpeed() {
    let speed = document.getElementById("speed").value;

    const number = parseFloat(speed)

    if (number<=70) {
        document.getElementById("demo").innerHTML = "Ok"
        
    }else if (number<=75) {
        document.getElementById("demo").innerHTML = "2 points"
    }else if (number<=80) {
        document.getElementById("demo").innerHTML = "4 points"
    }else if (number<=85) {
        document.getElementById("demo").innerHTML = "6 points"
    }else if (number<=90) {
        document.getElementById("demo").innerHTML = "8 points"
    }else if (number<=95) {
        document.getElementById("demo").innerHTML = "10 points"
    }else if (number<=100) {
        document.getElementById("demo").innerHTML = "12 points"
    }else if (number<=105) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=110) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=115) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=120) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=125) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=130) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=135) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=140) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=145) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }else if (number<=150) {
        document.getElementById("demo").innerHTML = "licence suspended"
    }

}