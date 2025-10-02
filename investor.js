// Scroll to Top Button functionality for investor page
window.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button if not present
    let scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) {
        scrollBtn = document.createElement('button');
        scrollBtn.id = 'scrollTopBtn';
        scrollBtn.title = 'Go to top';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(scrollBtn);
    }
    scrollBtn.style.display = 'none';
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '40px';
    scrollBtn.style.right = '40px';
    scrollBtn.style.zIndex = '9999';
    scrollBtn.className = 'btn btn-primary rounded-circle';

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
