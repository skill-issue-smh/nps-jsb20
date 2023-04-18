var divItems = document.getElementsByClassName("grid-item");

function selected(item) {
    this.clear();
    item.style.backgroundColor = 'orangered';
    item.style.color = 'white';
}

function clear() {
    for(var i=0; i < divItems.length; i++) {
        var item = divItems[i];
        item.style.backgroundColor = 'white';
        item.style.color = 'black';
    }
}
