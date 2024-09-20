const text = "Hi, I'm Arely";
const typingElement = document.getElementById('typing');
let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text[index];
            index++;
            setTimeout(type, 100);
        }
    }

    window.onload = function() {
        type();
    };

    const buttons = document.querySelectorAll('.expandable-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
            const toggleButton = document.getElementById('toggle-button');
            const megaGapSpace = document.getElementById('mega-gap-space');

            toggleButton.addEventListener('click', function() {
                megaGapSpace.classList.toggle('active');
            });
        });

const skillContainers = document.querySelectorAll('.each-skill-container');

skillContainers.forEach(container => {
    container.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});

    document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background');
    const x = e.clientX;
    const y = e.clientY;

    // Create a radial gradient centered at the mouse position
    background.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), transparent)`;
});

    function copyEmail() {
        const email = 'arelyrosendes@gmail.com';
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Email address copied to clipboard!');
    }