
var catList = document.getElementById('cat-list');

window.addEventListener('load', function () {
    for (var i = 0; i < 5; i++) {
        var catListItem = document.createElement('div');
        catListItem.className = 'cat-list-item';
        
        var catName = document.createElement('span');
        catName.className = 'cat-name';
        catName.innerText = `Cat ${i}`;
    
        catListItem.addEventListener('click', (function(current) {
            return function() {
                alert(current);
            }
        })(i));
    
        catListItem.append(catName);
        catList.append(catListItem);
    }
});