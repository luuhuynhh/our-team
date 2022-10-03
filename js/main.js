document.getElementById("txtEmail").onkeydown = function () {
    if (this.value !== "") {
        document.getElementById("spanEmail").style.display = "none";
    }
    else {
        document.getElementById("spanEmail").style.display = "block";
    }
}

window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    console.log(top);
    if (top > 300) {
        document.getElementById("navbarTogglerDemo01").style.position = "fixed";
        document.getElementById("navbarTogglerDemo01").style.top = "0";
        document.getElementById("navbarTogglerDemo01").style.left = "0";
        document.getElementById("navbarTogglerDemo01").style.background = "white";
        document.getElementById("navbarTogglerDemo01").style.width = "100%";
        document.getElementById("logo").style.display = "none";
        document.getElementById("navbarTogglerDemo01").style.padding = "0 8rem";
        document.getElementById("navbarTogglerDemo01").style.height = "60px";
        document.getElementById("navbarTogglerDemo01").style.boxShadow = "0 2px 10px #888";
    }
    else {
        document.getElementById("navbarTogglerDemo01").style.position = "static";
        document.getElementById("navbarTogglerDemo01").style.background = "transparent";
        document.getElementById("logo").style.display = "block";
        document.getElementById("navbarTogglerDemo01").style.height = "auto";
        document.getElementById("navbarTogglerDemo01").style.padding = "0";
        document.getElementById("navbarTogglerDemo01").style.boxShadow = "none";
    }
}