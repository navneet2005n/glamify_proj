
    // Toggle dropdown menu on mobile
    function toggleDropdown() {
        const dropdown = document.getElementById('mobileDropdown');
        dropdown.classList.toggle('active');
    }

    // Scroll to the Login/Sign Up section
    function scrollToLogin() {
        const loginSection = document.getElementById('login-signup');
        loginSection.scrollIntoView({ behavior: 'smooth' });
    }



document.querySelector('.box i').addEventListener('click', function () {
    document.querySelector('.input').focus();
});



document.querySelectorAll('.product').forEach(function (product) {
    product.addEventListener('mouseenter', function () {
        product.style.transform = 'scale(1.05)';
    });

    product.addEventListener('mouseleave', function () {
        product.style.transform = 'scale(1)';
    });
});

// Function to display testimonials from localStorage
function displayTestimonials() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    testimonialsContainer.innerHTML = ''; // Clear current testimonials

    // Get testimonials from localStorage
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];

    // Loop through and display each testimonial
    testimonials.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        testimonialDiv.innerHTML = `
            <p>"${testimonial.comment}"</p>
            <span>- ${testimonial.name}</span>
            <button class="delete-btn" onclick="deleteTestimonial(${index})">Delete</button>
        `;
        testimonialsContainer.appendChild(testimonialDiv);
    });
}

// Function to add a new testimonial
function addTestimonial() {
    const userComment = document.getElementById('userComment').value;
    const userName = document.getElementById('userName').value;

    if (userComment && userName) {
        // Get existing testimonials from localStorage
        const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];

        // Add the new testimonial
        testimonials.push({ comment: userComment, name: userName });

        // Save updated testimonials array to localStorage
        localStorage.setItem('testimonials', JSON.stringify(testimonials));

        // Re-display testimonials
        displayTestimonials();

        // Clear the input fields
        document.getElementById('userComment').value = '';
        document.getElementById('userName').value = '';
    } else {
        alert("Please enter both a comment and your name.");
    }
}

// Function to delete a testimonial
function deleteTestimonial(index) {
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    testimonials.splice(index, 1); // Remove the testimonial at the given index
    localStorage.setItem('testimonials', JSON.stringify(testimonials)); // Save updated testimonials to localStorage
    displayTestimonials(); // Re-display testimonials
}

// Ensure testimonials are displayed when the page loads
window.onload = displayTestimonials;
