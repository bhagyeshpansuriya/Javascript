function changeTheme(bgColor, textColor) {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
}

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;

  if (!currentColor || currentColor === "white") {
    changeTheme("black", "white");
    themeButton.innerText = "Light Mode";
  } else {
    changeTheme("white", "black");
    themeButton.innerText = "Dark Mode";
  }
});