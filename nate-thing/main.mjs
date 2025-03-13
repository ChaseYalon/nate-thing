const image = document.getElementById('image');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Add the 'willReadFrequently' attribute for optimization
canvas.willReadFrequently = true;

// Draw the image onto the canvas once it's loaded
image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
};

// Function to get pixel color under the mouse
function getPixelColor(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // Get the pixel data from the canvas at (x, y)
    const pixel = ctx.getImageData(x, y, 1, 1).data;

    // Convert pixel data to RGB format
    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];
    const a = pixel[3] / 255; // Alpha channel is between 0 and 1

    console.log(`RGB: (${r}, ${g}, ${b}), Alpha: ${a}`);
}

// Attach mousemove event to the image
image.addEventListener('mousemove', getPixelColor);