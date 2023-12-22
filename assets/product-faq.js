document.querySelectorAll(".details-toggle").forEach(function(details) {
    const pluseArrow = details.querySelector(".pluse-arrow");
    const minusArrow = details.querySelector(".minus-arrow");
    if (!details.open) {
        pluseArrow.style.display = "inline-block";
        minusArrow.style.display = "none";
    }
    details.addEventListener("toggle", function() {
        if (this.open) {
            pluseArrow.style.display = "none";
            minusArrow.style.display = "inline-block";
        } else {
            pluseArrow.style.display = "inline-block";
            minusArrow.style.display = "none";
        }
    });
});