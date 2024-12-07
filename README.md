# gsap-canvas-image-sequence-scroll-animation
A scroll-triggered animation project using HTML5 Canvas and GSAP ScrollTrigger, where image sequences play seamlessly like a video as you scroll.

# Canvas Scroll Animation with GSAP

This project demonstrates a scroll-based animation on an HTML canvas element, where a series of images play seamlessly like a video as the user scrolls. The animation is powered by GSAP's ScrollTrigger plugin for smooth and responsive scrolling interactions.

---

## **Features**
- Smooth animation tied to the user's scroll position.
- Responsive design: Automatically adjusts canvas size to fit the viewport.
- Maintains aspect ratio for images while filling the canvas.
- Preloads images for seamless playback.
- Easy customization of scroll behavior and animation triggers.

---

## **Technologies Used**
1. **HTML5 Canvas**: For rendering and displaying images.
2. **JavaScript**: Core scripting language for logic and rendering.
3. **GSAP (GreenSock Animation Platform)**: Provides smooth animations and the ScrollTrigger plugin for scroll-based control.

---

## **Getting Started**

### **Prerequisites**
- A basic understanding of HTML, CSS, and JavaScript.
- Install GSAP and ScrollTrigger:
  Include these in your HTML:
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

# License

This project is licensed under the **MIT License**.  

You are free to:
- Use this project for personal and commercial purposes.
- Modify and distribute the source code as long as you include the original license.

Refer to the `LICENSE` file for more details.  

---

## Usage

### Adding Your Images
1. Open the `script.js` file in your editor.
2. Locate the `files()` function and update it with your image file paths. For example:
   ```javascript
   function files(index) {
     var data = `
       images/frame0.jpg
       images/frame1.jpg
       images/frame2.jpg
       ...
     `;
     return data.split("\n")[index];
   }

3. Ensure all your images are named sequentially (e.g., frame0.jpg, frame1.jpg) and stored in the correct folder.

## Adjusting Animation Settings

The scroll-triggered animation can be customized by modifying the `gsap.to` configuration in the `script.js` file.

### Key Parameters to Adjust:
1. **`scrub`**: Controls the synchronization between scroll and animation. Lower values make the animation smoother.
   - Example: 
     ```javascript
     scrub: 0.2, // Smooth scroll synchronization
     ```

2. **`start`**: Defines when the animation starts relative to the viewport.
   - Common values:
     - `"top top"`: Starts when the top of the canvas aligns with the top of the viewport.
     - `"center center"`: Starts when the center of the canvas aligns with the center of the viewport.
   - Example:
     ```javascript
     start: "top top", // Animation starts when canvas top aligns with viewport top
     ```

3. **`end`**: Determines when the animation ends.
   - This is typically set as a percentage of the viewport height or another relative unit.
   - Example:
     ```javascript
     end: "500% top", // Ends after scrolling 5x the viewport height
     ```

4. **`scroller`**: Defines the scroll container (default is the `body` or `window`).
   - Example:
     ```javascript
     scroller: "#main", // Targeting a specific scrollable container
     ```

### Example Configuration:
```javascript
gsap.to(imageSeq, {
  frame: frameCount - 1,  // Total number of frames to animate
  snap: "frame",          // Snaps to the nearest frame for a smoother animation
  ease: "none",           // No easing for linear playback
  scrollTrigger: {
    scrub: 0.15,          // Smooth scrolling effect
    start: "top top",     // Start animation when canvas top is at viewport top
    end: "600% top",      // End animation after scrolling 6x viewport height
    scroller: "#main",    // Scroll container
  },
  onUpdate: render,        // Callback to update the animation frame
});

## Testing the Animation

To test the scroll-triggered animation in your project, follow these steps:

### Step 1: Ensure the Project is Set Up Correctly

Before testing the animation, make sure that all necessary files are properly set up:
1. **Images**: Ensure your sequential images are available in the correct directory (e.g., `images/frame0.jpg`, `images/frame1.jpg`, etc.). 
2. **Script Configuration**: Open the `script.js` file and verify that the `files()` function contains the correct paths to the images.

Example of `files()` function:
```javascript
function files(index) {
  var data = `
    images/frame0.jpg
    images/frame1.jpg
    images/frame2.jpg
    ...
  `;
  return data.split("\n")[index];
}

## Customizing Scroll Behavior

You can adjust the scroll behavior to match your desired animation effect by modifying the configuration of the `ScrollTrigger` and `GSAP` animations in the `script.js` file.

### Key Scroll Settings to Customize:

1. **`scrub`**: Determines how much the scroll controls the animation. A value closer to `1` will make the animation move in sync with scrolling, while smaller values can create a smoother, delayed effect.
   - Example: 
     ```javascript
     scrub: 0.25, // Adjust smoothness of the scroll animation
     ```

2. **`start` and `end`**: These define the start and end points of the animation relative to the viewport or a scrollable container.
   - Example:
     ```javascript
     start: "top top",   // Start when the top of the canvas hits the top of the viewport
     end: "600% top",    // End after scrolling 6 times the viewport height
     ```

3. **`trigger`**: Defines the element that triggers the scroll animation. You can set this to an element other than the canvas if desired.
   - Example:
     ```javascript
     trigger: "#page",   // Trigger animation on scrolling through a specific container
     ```

4. **`scroller`**: Specifies the scroll container (if you're using a specific scrollable area instead of the whole window).
   - Example:
     ```javascript
     scroller: "#main", // The scroll container that should trigger the animation
     ```

5. **`pin`**: Pins the scroll container (or specific element) in place while the animation is active. This is useful if you want the canvas or a specific section to remain visible while scrolling.
   - Example:
     ```javascript
     pin: true,  // Pin the canvas while scrolling through the animation
     ```

### Example Configuration:
```javascript
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",     // Ensures the frame snaps to the nearest integer for crisp animation
  ease: "none",      // No easing for a linear animation
  scrollTrigger: {
    scrub: 0.15,     // Smooth synchronization between scroll and animation
    trigger: "#page", // The element that will trigger the animation
    start: "top top", // When the top of the canvas reaches the top of the viewport
    end: "600% top",  // Ends after scrolling 6x the viewport height
    scroller: "#main", // The scrollable container
    pin: true,        // Pin the canvas in place while scrolling
  },
  onUpdate: render,   // Update the animation frame on scroll
});


## Future Enhancements

While the current project implements basic scroll-triggered animation, there are several enhancements that could be made in the future to improve functionality and user experience.

### Suggested Enhancements:
1. **Mobile Optimization**: 
   - The current animation may not perform optimally on mobile devices. Implementing mobile-specific optimizations, such as reducing the number of frames or using lighter images, can improve performance.
   - Add touch support to allow scrolling animations to work with swipe gestures on mobile devices.

2. **Lazy Loading for Images**:
   - Currently, all images are loaded at once when the page loads, which can cause performance issues for large numbers of images. Implementing lazy loading (loading images only when needed) will help improve the loading time and performance of the animation.

3. **Custom Scroll Effects**:
   - Experiment with adding different scroll effects, such as parallax scrolling, to enhance the animation.
   - You could also add additional animations, like opacity changes or scale transitions, to make the scroll effect more dynamic.

4. **Canvas Scaling Options**:
   - Implement custom scaling options for different screen sizes and resolutions to ensure that the canvas looks great on all devices, including high-DPI (Retina) displays.

5. **Interactive Features**:
   - Add interactive features to the canvas, such as mouse hover effects or clickable elements that trigger events, enhancing user engagement.

6. **Performance Improvements**:
   - Continue optimizing the frame rendering and animation logic to ensure smooth performance even with a large number of frames or complex animations.
   - Investigate the use of WebGL or other hardware-accelerated rendering techniques for better performance.

## Contributing

We welcome contributions from the community! Whether you’re fixing a bug, adding a feature, or improving the documentation, your help is appreciated.

### How You Can Contribute:
If you’d like to contribute to this project, please follow these steps:

1. **Fork the Repository**:
   - Click on the "Fork" button at the top-right corner of this repository to create a personal copy of the project.

2. **Clone Your Fork**:
   - After forking, clone the repository to your local machine by running:
     ```bash
     git clone https://github.com/your-username/scroll-animation.git
     cd scroll-animation
     ```

3. **Create a New Branch**:
   - Create a new branch for your changes. This helps keep the `main` branch clean while you work on your feature.
     ```bash
     git checkout -b feature-name
     ```

4. **Make Changes**:
   - Implement your feature, fix a bug, or improve documentation. Ensure your changes are thoroughly tested.

5. **Commit Your Changes**:
   - Once you are happy with your changes, commit them with a clear and concise commit message.
     ```bash
     git add .
     git commit -m "Add detailed description of changes"
     ```

6. **Push Your Changes**:
   - Push your changes to your fork on GitHub.
     ```bash
     git push origin feature-name
     ```

7. **Open a Pull Request (PR)**:
   - Navigate to the original repository and click on "Compare & Pull Request". This will initiate the process of reviewing your changes.
   - Provide a detailed description of your changes, including the motivation behind them and any relevant details. The project maintainers will review your PR and may provide feedback or suggestions for further changes.

### Code of Conduct:
We expect all contributors to follow this project's code of conduct to foster an open and respectful environment. Here are a few simple guidelines to follow:

- Be respectful and considerate in all your interactions.
- Provide constructive feedback and be open to suggestions.
- Avoid offensive language and behavior.
- If you see someone being disrespectful, kindly call it out and address it professionally.

### Reporting Issues:
If you encounter a bug or have a feature request, feel free to open an issue on the GitHub repository. Please provide as much detail as possible to help us understand the problem or request.

- **Bug Report**: Describe the issue you’ve encountered, steps to reproduce, and any errors or issues that occur.
- **Feature Request**: Provide a detailed description of the new feature you'd like to see.

---

Thank you for contributing to this project! Your input helps make this tool even better.
