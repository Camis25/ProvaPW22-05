let timer;

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    alert("Você foi redirecionado por inatividade.");
    window.location.href = "login.html";
  }, 5 * 60 * 1000); 
}

window.onload = resetTimer;

document.onmousemove = resetTimer;
document.onkeydown = resetTimer;
document.onclick = resetTimer;
document.onscroll = resetTimer;


