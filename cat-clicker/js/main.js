var counterRef = document.getElementById('counter');

var catButton = document.getElementById('cat');
catButton.addEventListener('click', function() {
    somarValorContador();
});

function somarValorContador() {
    var value = parseInt(counterRef.innerText);
    
    counterRef.innerText = value + 1;
}