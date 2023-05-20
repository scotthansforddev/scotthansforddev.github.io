document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listeners to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            const targetId = link.getAttribute('href'); // Get the target section's ID
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                // Calculate the offset position of the target section
                const offset = targetSection.offsetTop;

                // Perform a smooth scroll animation to the target section
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
