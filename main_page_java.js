window.onload = function() {
    var textOverlay = document.querySelector('.text-overlay');

    textOverlay.addEventListener('mouseover', function() {
        this.style.color = getRandomColor();
        this.style.textShadow = '2px 2px 4px #000000';
    });

    textOverlay.addEventListener('mouseout', function() {
        this.style.color = 'white';
        this.style.textShadow = 'none';
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
