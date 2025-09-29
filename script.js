function showTab(tabId, clickedButton) {
    // 1. Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // 2. Deactivate all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // 3. Show the target content
    const targetContent = document.getElementById('tab-content-' + tabId);
    if (targetContent) {
        targetContent.style.display = 'block';
    }

    // 4. Activate the clicked button
    clickedButton.classList.add('active');
}

// Initial activation on page load (ensures the 'services' tab is visible when the page loads)
document.addEventListener('DOMContentLoaded', () => {
    const initialButton = document.querySelector('.tab-button.active');
    if (initialButton) {
        // Run showTab logic for the button that is already marked as active in the HTML
        // This ensures the content is displayed correctly even after separating the files.
        const initialTabId = initialButton.getAttribute('aria-controls').replace('tab-content-', '');
        showTab(initialTabId, initialButton);
    }
});
