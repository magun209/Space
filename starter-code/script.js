document.querySelector("#menu-icon").addEventListener("click", function () {
    document.querySelector("#menu-icon").classList.toggle("open");

    if (document.querySelector("#menu-icon").classList.contains("open")) {
        document.querySelector("nav > ul").style.right = "0";
    } else {
        document.querySelector("nav > ul").style.right = "-400px";
    }
});
