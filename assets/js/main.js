const icons = document.getElementsByClassName("icon");

for (let i = 0; i < icons.length; i++) {
  let paragraph = document.createElement("p");
  paragraph.textContent = "icon-" + (i + 1);
  icons[i].append(paragraph)
}