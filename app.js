$(function () {
  $("#draggable").draggable();
});

const dragForm = document.querySelector(".drag-form");

dragForm.addEventListener("submit", function (e) {
  const selectValue = document.querySelector(".form-select").value;
  const body = document.querySelector("body");
  if (body.classList.contains(selectValue)) {
    return;
  } else {
    body.className = "";
    body.classList.add(selectValue);
  }

  e.preventDefault();
});

// Drag UI Close

const closeIcon = document.querySelector(".fa-window-close");
closeIcon.addEventListener("click", function (e) {
  document.querySelector("#draggable").style.display = "none";
});

//edit
document.querySelector(".edit").addEventListener("click", function () {
  document.querySelector("#draggable").style.display = "block";
});
