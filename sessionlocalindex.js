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
        document.getElementById('popup').style.display = "block";
    }
}