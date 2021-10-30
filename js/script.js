var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// console.log(button);
// console.log(cat);

// When user clicks on the button, function is triggered to show cat image
button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    //console.log("yes");
    cat.classList.remove("show");
    button.innerHTML = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    //console.log("no");
    cat.classList.add("show");
    button.innerHTML = "Shoo, cat!";
    button.classList.remove("disappear");
  }
});
