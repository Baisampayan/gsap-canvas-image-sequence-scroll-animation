// Select the canvas element and set up the 2D drawing context
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Set the canvas dimensions to match the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjust canvas size dynamically on window resize
window.addEventListener("resize", function () {
  // Update canvas dimensions to match new window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  // Re-render the current frame to reflect the resized canvas
    render();
});

// Function to retrieve file paths for images based on their index
function files(index) {
    var data = `
    // paste all images here, e.g., 'images/frame0.jpg\nimages/frame1.jpg\n...'
    `;
  // Split the multi-line string into an array and return the requested file path
    return data.split("\n")[index];
}

// Total number of frames in the animation
const frameCount = 300;

// Array to hold all preloaded images
const images = [];

// Object to track the current frame of the animation
const imageSeq = {
    frame: 1, // Starting frame
};

// Preload all images into the array
for (let i = 0; i < frameCount; i++) {
    const img = new Image(); // Create a new image element
    img.src = files(i); // Assign the file path based on the current index
    images.push(img); // Add the image to the array
}

// GSAP animation configuration
gsap.to(imageSeq, {
    frame: frameCount - 1, // Animate from the first frame to the last
    snap: "frame", // Ensure frame numbers snap to integers
    ease: "none", // Linear animation (no easing)
    scrollTrigger: {
        scrub: 0.15, // Smoothly tie animation progress to scroll position
        trigger: "#page>canvas", // Canvas element is the animation trigger
        start: "top top", // Start animation when top of the canvas reaches the viewport's top
        end: "600% top", // End animation after scrolling 600% of the viewport height
        scroller: "#main", // Define the scrolling container
    },
  onUpdate: render, // Call render() whenever the frame updates
});

// Ensure the first frame is drawn once the image is loaded
images[1].onload = render;

// Function to render the current frame on the canvas
function render() {
  // Draw the current frame (based on imageSeq.frame) on the canvas
    scaleImage(images[imageSeq.frame], context);
}

// Function to scale and center the image on the canvas while maintaining its aspect ratio
function scaleImage(img, ctx) {
    var canvas = ctx.canvas;

  // Calculate aspect ratios for horizontal and vertical scaling
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;

  // Use the larger ratio to cover the entire canvas
    var ratio = Math.max(hRatio, vRatio);

  // Calculate offsets to center the image on the canvas
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;

  // Clear the canvas before drawing the new image
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the image on the canvas, scaled and centered
    ctx.drawImage(
        img, // Image element
        0, 0, img.width, img.height, // Source dimensions
        centerShift_x, centerShift_y, // Destination coordinates
        img.width * ratio, img.height * ratio // Scaled dimensions
    );
}

// ScrollTrigger configuration for pinning elements
ScrollTrigger.create({
    trigger: "// object you want to pin it.", // Specify the element to pin
    pin: true, // Keep the element fixed during scrolling
    scroller: "#main", // Define the scrolling container
    start: "top top", // Start pinning when the element reaches the viewport top
    end: "600% top", // Stop pinning after scrolling 600% of the viewport height
});
