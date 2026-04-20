// Minimal parallax effect mapped to mouse position for a slight interactive feel
document.addEventListener("mousemove", (e) => {
    const title = document.querySelector(".parallax-group");
    
    // Very subtle movement (-10px to +10px depending on mouse position)
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;
    
    // Applying the transition smoothly
    title.style.transition = 'transform 0.1s ease-out';
    title.style.transform = `translate(${x}px, ${y}px)`;
});

// Remove transition once mouse move stops to keep it responsive
let isMoving = false;
document.addEventListener("mousemove", () => {
    if(!isMoving) {
        document.querySelector(".parallax-group").style.transition = 'none';
        isMoving = true;
    }
    
    clearTimeout(window.moveTimeout);
    window.moveTimeout = setTimeout(() => {
        isMoving = false;
    }, 100);
});

// Generate blinking dots (sci-fi stars) for background
const createStars = () => {
    const starContainer = document.createElement("div");
    starContainer.className = "star-container";
    // Prepend to ensure it is behind everything else in the body
    document.body.prepend(starContainer);

    // Create 80 random blinking dots
    for (let i = 0; i < 80; i++) {
        let star = document.createElement("div");
        star.className = "star";
        
        // Randomize placement
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        
        // Randomize sizes for depth
        const size = Math.random() * 2 + 1; // 1px to 3px
        star.style.width = size + "px";
        star.style.height = size + "px";
        
        // Randomize animation timing to make them blink independently
        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = Math.random() * 2 + 1.5 + "s";
        
        starContainer.appendChild(star);
    }
};

// Initialize stars on load
document.addEventListener('DOMContentLoaded', createStars);
