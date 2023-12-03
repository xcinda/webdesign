function tlacitkoklik(bary) {
    var elementy = document.getElementsByClassName("menu");
    bary.classList.toggle("krizek");
    Array.from(elementy).forEach((x) => {
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    })
}
