function changeText() {

  document.getElementById("text").textContent = "You clicked the button!";
}

document.getElementById("addBtn").addEventListener("click", changeText);