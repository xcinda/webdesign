function tlacitkoklik(bary) {
    var elementy = document.getElementsByClassName("menu");
    bary.classList.toggle("krizek");
    Array.from(elementy).forEach((x) => {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })
}
