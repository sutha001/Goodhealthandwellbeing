var getcountpage31 = sessionStorage.getItem("checkcountpage3_1");
var getcountpage32 = sessionStorage.getItem("checkcountpage3_2");
var getcountpage33 = sessionStorage.getItem("checkcountpage3_3");
var getcountpage34 = sessionStorage.getItem("checkcountpage3_4");

if(getcountpage31 == "ture" && getcountpage32 == "ture" && getcountpage33 == "ture" && getcountpage34 == "ture"){
    document.getElementById('menulock').style.color = "#ffe91a";
}

function movetopage3() {
    if (getcountpage31 == "ture" && getcountpage32 == "ture" && getcountpage33 == "ture" && getcountpage34 == "ture") {
        document.getElementById('popup').style.display = "none";
        location.href = "page3.html";
    }
    else {
        mov1();
        mov2();
        mov3();
        mov4();
        mov5();
    }
}


function mov1(){
    var elem = document.getElementById("erraa1");
    var pos = 0;
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 154) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.clip = "rect(auto," + pos + "vw, auto, auto)";
        }
        document.getElementById('popup').style.display = "block";
    }
}
function mov2(){
    var elem = document.getElementById("erraa2");
    var pos = 154;
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.clip = "rect(auto, 154vw, auto, "+pos+"vw)";
        }
    }
}
function mov3(){
    var elem = document.getElementById("erraa3");
    var pos = 0;
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 154) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.clip = "rect(auto," + pos + "vw, auto, auto)";
        }
    }
}
function mov3(){
    var elem = document.getElementById("erraa3");
    var pos = 0;
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 154) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.clip = "rect(auto," + pos + "vw, auto, auto)";
        }
    }
}
function mov4(){
    var elem = document.getElementById("erraa4");
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 154) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.clip = "rect(auto," + pos + "vw, auto, auto)";
        }
    }
}

function mov5(){
    var elem = document.getElementById("erraa5");
    var pos = 154;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.clip = "rect(auto, 154vw, auto, "+pos+"vw)";
        }
    }
}
function clospopup(){
    document.getElementById('popup').style.display = "none";
}