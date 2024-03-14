function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("modal-image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

window.addEventListener('load', function() {
    var images = document.querySelectorAll('.gallery img');

    images.forEach(function(img) {
        img.onload = function() {
            if (img.naturalWidth < img.naturalHeight) {
                img.style.width = '50%';
                img.style.height = 'auto';
            }
        };
    });
});
