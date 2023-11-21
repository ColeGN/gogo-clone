/* Source: https://codepen.io/tommyho tommyho510@gmail.com */

// Function to create a shooting star element
function createShootingStar() {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    return shootingStar;
  }
  
  // Function to randomly generate a frequency for the shooting star animation
  function getRandomFrequency() {
    return Math.random() * 50 + 1; // Adjust the range of frequencies as needed
  }
  
  // Function to apply shooting star animation to a star with a random frequency
  function applyShootingStarAnimation(star) {
    const frequency = getRandomFrequency();
    star.style.animationDuration = `${frequency}s`;
  }
  
  // Function to randomly generate a delay for shooting star appearance
  function getRandomDelay() {
    return Math.random() * 400 + 100; // Adjust the range of delays as needed
  }
  
  // Function to randomly generate a rotation angle for shooting star appearance
  function getRandomRotation() {
    return Math.random() * 360; // Adjust the range of angles as needed
  }
  
  // Function to create and animate a shooting star
  function createAndAnimateShootingStar() {
    const shootingStar = createShootingStar();
    //shootingStar.style.top = `${Math.random() * window.innerHeight}px`;
    shootingStar.style.top = '0px';
    shootingStar.style.left = `${Math.random() * window.innerWidth}px`;
    shootingStar.style.transform = `rotate(${getRandomRotation()}deg)`;
    document.body.appendChild(shootingStar);
  
    setTimeout(() => {
      applyShootingStarAnimation(shootingStar);
    }, 0);
  
    setTimeout(() => {
      shootingStar.style.opacity = 1.0;
      shootingStar.remove();
      createAndAnimateShootingStar(); // Repeat for forever
    }, 6000); // Adjust the duration as needed
  }
  
  // Start the shooting star animation
  setInterval(createAndAnimateShootingStar, getRandomDelay());
  