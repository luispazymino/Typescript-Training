function greeting(name: String) {
    var el = document.getElementById("content");
    el.innerHTML = "Hello " + name + "!";
}

greeting("Luis.");