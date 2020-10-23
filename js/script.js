var element = document.getElementById("ele");

TweenMax.to(element, 0.5, {y:"+=20", yoyo:true, repeat:-1});
TweenMax.to(element, 0.5, {y:"-=20", yoyo:true, repeat:-1});