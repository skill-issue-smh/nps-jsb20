var divItems = document.getElementsByClassName("grid-item");
var value = document.getElementById('custom').value
function selected(item) {
    this.clear();
    item.style.backgroundColor = '#113259';
    item.style.borderColor = '#113259';
    item.style.color = 'white';
}

function clear() {
    for(var i=0; i < divItems.length; i++) {
        var item = divItems[i];
        item.style.backgroundColor = 'white';
        item.style.color = 'black';
        item.style.borderColor = 'grey'
    }
}
