let cursor = document.querySelector(".follow");

document.onmousemove = function follow(s) {
  let x = s.clientX;
  let y = s.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};
