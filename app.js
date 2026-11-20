function telOp(aantal) {
  return aantal + 1;
}

if (typeof document !== "undefined") {
  let aantal = 0;
  document.getElementById("knop").addEventListener("click", () => {
    aantal = telOp(aantal);
    document.getElementById("teller").textContent = "Aantal klikken: " + aantal;
  });
}

if (typeof module !== "undefined") module.exports = { telOp };
