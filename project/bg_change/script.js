function setBackground(image) {
    const background = document.getElementById('background');
    
    // Start the fade-out transition
    background.classList.add('fade-out');
    
    // Wait for the fade-out transition to complete before changing the background image
    setTimeout(() => {
        background.style.background = `url('${image}') no-repeat center center/cover`;
        background.classList.remove('fade-out');
    }, 500); // Match the duration of the CSS transition
}
