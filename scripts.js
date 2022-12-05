function showMenu() {
    var x = document.getElementById("menu");
    if (x.className === "header-menu") {
        x.className += " show";
        console.log(1);
    }
    else {
        x.className = "header-menu";
        console.log(0);
    }
}