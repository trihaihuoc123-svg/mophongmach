function load() {
  ["m1","m2"].forEach(id=>{
    let s = localStorage.getItem(id) || "OFF";
    document.getElementById(id).innerText = s;
  });
}

function toggle(id) {
  let current = localStorage.getItem(id) || "OFF";
  let next = current === "OFF" ? "ON" : "OFF";

  localStorage.setItem(id, next);
  document.getElementById(id).innerText = next;
}

function openPage() {
  window.location.href = "motor.html";
}

load();
