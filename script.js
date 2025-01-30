document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');
    
    // Click handlers for gallery images
    document.querySelectorAll('.image-placeholder').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            // Replace with actual image source when available
            modalImg.src = 'https://picsum.photos/700/400';
        });
    });

    // Close modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update copyright year
    document.querySelector('footer p').textContent = 
        `© ${new Date().getFullYear()} Minecraft SMP. All rights reserved.`;
});