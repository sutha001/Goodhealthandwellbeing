var getline = sessionStorage.getItem("check");
var getline2 = sessionStorage.getItem("check2");
var getline3 = sessionStorage.getItem("check3");
var getline4 = sessionStorage.getItem("check4");

if(getline == "ture"){
    document.getElementById("linekill1").style.display = "block";
}
if(getline2 == "ture"){
    document.getElementById("linekill2").style.display = "block";
}
if(getline3 == "ture"){
    document.getElementById("linekill3").style.display = "block";
}
if(getline4 == "ture"){
    document.getElementById("linekill4").style.display = "block";
}



function movetoforder1() {
    var element = document.querySelector(".movetoforder");
    document.getElementById("linekill1").style.display = "block";
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });

    if (typeof (Storage) !== "undefined") {
        sessionStorage.setItem("check", "ture");
        sessionStorage.setItem("checkcountpage3_1", "ture");
    }
}

function movetoforder2() {
    var element = document.querySelector(".movetoforder");
    document.getElementById("linekill2").style.display = "block";
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });

    if (typeof (Storage) !== "undefined") {
        sessionStorage.setItem("check2", "ture");
        sessionStorage.setItem("checkcountpage3_2", "ture");
    }
}

function movetoforder3() {
    var element = document.querySelector(".movetoforder");
    document.getElementById("linekill3").style.display = "block";
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });

    if (typeof (Storage) !== "undefined") {
        sessionStorage.setItem("check3", "ture");
        sessionStorage.setItem("checkcountpage3_3", "ture");
    }
}

function movetoforder4() {
    var element = document.querySelector(".movetoforder");
    document.getElementById("linekill3").style.display = "block";
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });

    if (typeof (Storage) !== "undefined") {
        sessionStorage.setItem("check4", "ture");
        sessionStorage.setItem("checkcountpage3_4", "ture");
    }
}

//-------------------------------------------------------------------------------------------------------------//

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
    mov1re();
    mov2re();
    mov3re();
    mov4re();
    mov5re();
}

function mov1re(){
    var elem = document.getElementById("erraa1");
    var pos = 154;
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 0) {
            document.getElementById('popup').style.display = "none";
            clearInterval(id);
        } else {
            pos--;
            elem.style.clip = "rect(auto," + pos + "vw, auto, auto)";
        }
    }
}
function mov2re(){
    var elem = document.getElementById("erraa2");
    var pos = 0;
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 154) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.clip = "rect(auto, 154vw, auto, "+pos+"vw)";
        }
    }
}
function mov3re(){
    var elem = document.getElementById("erraa3");
    var pos = 154;
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.clip = "rect(auto," + pos + "vw, auto, auto)";
        }
    }
}
function mov4re(){
    var elem = document.getElementById("erraa4");
    var pos = 154;
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.clip = "rect(auto," + pos + "vw, auto, auto)";
        }
    }
}

function mov5re(){
    var elem = document.getElementById("erraa5");
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 154) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.clip = "rect(auto, 154vw, auto, "+pos+"vw)";
        }
    }
}

