window.addEventListener('load', function() {
    setCatName(cat);
    setCatName(challengerCat);
});

var cat = {
    name: 'Cat',
    catNameDom: document.getElementById('cat-name'),
    domRef: document.getElementById('cat'),
    counterRef: document.getElementById('cat-counter')
}

var challengerCat = {
    name: 'Challenger Cat',
    catNameDom: document.getElementById('challenger-cat-name'),
    domRef: document.getElementById('challenger-cat'),
    counterRef: document.getElementById('challenger-cat-counter')
}

cat.domRef.addEventListener('click', function() {
    somarValorContador(cat.counterRef);
});

challengerCat.domRef.addEventListener('click', function() {
    somarValorContador(challengerCat.counterRef);
})

function somarValorContador(ref) {
    var value = parseInt(ref.innerText);    
    ref.innerText = value + 1;
}

function setCatName(cat) {
    cat.catNameDom.innerText = cat.name;
}