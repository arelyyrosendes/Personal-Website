// Home File
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

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const headerRight = document.querySelector('.header-right');

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            headerRight.classList.toggle('active');
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const headerRight = document.querySelector('.header-right');
    
        menuToggle.addEventListener('click', function() {
            headerRight.classList.toggle('active'); // Toggle the 'active' class
        });
    });
    
// Projects File
const text_project = "My Projects";
const typingElement_project = document.getElementById('typing_project');
let index_project = 0;

function type_project() {
    if (index_project < text_project.length) {
        typingElement_project.textContent_project += text_project[index_project];
        index_project++;
        setTimeout(type_project, 100); 
    }
}

// Resume File
const text_resume = "My Resume";
const typingElement_resume = document.getElementById('typing_resume');
let index_resume = 0;

function type_resume() {
    if (index_resume < text_resume.length) {
        typingElement_resume.textContent_resume += text_resume[index_resume];
        index_resume++;
        setTimeout(type_resume, 100); 
    }
}

// Start typing effects when window loads
window.onload = function() {
    type();         // Start typing for home
    type_project(); // Start typing for projects
    type_resume();  // Start typing for resume
};