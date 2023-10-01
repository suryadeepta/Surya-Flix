// script.js
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        
        const tabId = tab.getAttribute('data-tab');
        tabContents.forEach((content) => {
            content.classList.remove('active');
            if (content.getAttribute('id') === tabId) {
                content.classList.add('active');
            }
        });
    });
});

// Initialize the first tab
tabs[0].click();
