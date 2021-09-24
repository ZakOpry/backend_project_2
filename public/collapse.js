const button = document.getElementsByClassName(".collapsible");

const collapse = () => {
  button.toggleAttribute("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
      content.style.display = "none";
  } else {
      content.style.display = "block";
  }
}
button.addEventListener("click", collapse())
  