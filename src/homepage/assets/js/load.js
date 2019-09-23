function loadFull(elem) {
    var size = 70;
    function frame() {
        size++; 
        elem.style.width = size + "%";
        if (size == 100)
            clearInterval(id)
    }
    var id = setInterval(frame, 50)
}