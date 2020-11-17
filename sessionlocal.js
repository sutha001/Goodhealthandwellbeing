var getline = sessionStorage.getItem("check");

if(getline == "ture"){
    document.getElementById("linekill1").style.display = "block";
}


function movetoforder1() {
    var element = document.querySelector(".movetoforder");
    document.getElementById("linekill1").style.display = "block";
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });

    if (typeof (Storage) !== "undefined") {
        sessionStorage.setItem("check", "ture");
    }
}
