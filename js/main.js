document.getElementById("txtEmail").onkeyup = function () {
    if (this.value !== "") {
        document.getElementById("spanEmail").style.display = "none";
    }
    else {
        document.getElementById("spanEmail").style.display = "block";
    }
}