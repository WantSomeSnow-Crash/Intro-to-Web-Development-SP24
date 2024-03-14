window.onload = function() {
    // Array of image paths
    var desktopImages = ["/Intro To Web Dev/Intro-to-Web-Development-SP24/Week4/img/Africa - Keyna 05 copy.jpeg", "desktop-image2.jpg", "desktop-image3.jpg"];
    var mobileImages = ["mobile-image1.jpg", "mobile-image2.jpg", "mobile-image3.jpg"];

    // Randomly select an image from the array
    var randomDesktopImage = desktopImages[Math.floor(Math.random() * desktopImages.length)];
    var randomMobileImage = mobileImages[Math.floor(Math.random() * mobileImages.length)];

    // Set the image source based on the device width
    var bgImage = document.getElementById("bg-image");
    if (window.innerWidth > 768) {
        bgImage.src = randomDesktopImage;
    } else {
        bgImage.src = randomMobileImage;
    }
};

