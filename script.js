/**
 * Function to switch between the different tabs (Service Times, Ministries, etc.)
 * in the footer section.
 * * @param {string} tabId The ID suffix of the tab content to show (e.g., 'services').
 * @param {HTMLElement} clickedButton The button element that was clicked.
 */
function showTab(tabId, clickedButton) {
    // 1. Hide all tab content
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.style.display = 'none');
    
    // 2. Remove 'active' class from all buttons
    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(button => button.classList.remove('active'));
    
    // 3. Show the selected tab content
    const selectedTab = document.getElementById(`tab-content-${tabId}`);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
    
    // 4. Add 'active' class to the clicked button
    clickedButton.classList.add('active');
}

// Initial call to ensure the 'services' tab is displayed and active on page load
// The buttons in details.html now pass 'this' (the button element) to the function
// We don't need a separate event listener for initial load if the first button 
// has the 'active' class and the content is set as default.
// However, to strictly follow the separation and ensure initial state:

document.addEventListener('DOMContentLoaded', () => {
    // Check if the 'services' tab should be the default on load
    const defaultButton = document.querySelector('.tab-button.active');
    if (defaultButton) {
        // Extract the tabId from the onclick attribute, e.g., 'showTab('services', this)' -> 'services'
        const onclickAttr = defaultButton.getAttribute('onclick');
        const tabIdMatch = onclickAttr ? onclickAttr.match(/showTab\('([^']*)'/i) : null;
        const tabId = tabIdMatch ? tabIdMatch[1] : 'services';
        
        // Ensure the default tab is shown
        const defaultTab = document.getElementById(`tab-content-${tabId}`);
        if (defaultTab) {
             defaultTab.style.display = 'block';
        }
    }
});