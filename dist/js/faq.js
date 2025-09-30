 document.addEventListener('DOMContentLoaded', function() {
        // Hide all answers initially
        document.querySelectorAll('.ans').forEach(function(ans) {
            ans.style.display = 'none';
        });
        // Add click event to each showAns button
        document.querySelectorAll('.showAns').forEach(function(btn, idx) {
            btn.addEventListener('click', function() {
                // Find the next .ans sibling
                var ansDiv = btn.parentElement.nextElementSibling;
                if (ansDiv && ansDiv.classList.contains('ans')) {
                    // Toggle display
                    ansDiv.style.display = (ansDiv.style.display === 'none' || ansDiv.style.display === '') ? 'block' : 'none';
                }
            });
        });
    });