const allDropdowns = document.querySelectorAll('.dropdown');

function dropdownToggle(selectedDropdown) {
    selectedDropdown.firstElementChild.classList.toggle('dropdown-summary-flipped');
    
    // Closes all other dropdowns
    allDropdowns.forEach(dropdown => {
        if (dropdown != selectedDropdown && dropdown.open) {
            dropdown.firstElementChild.classList.toggle('dropdown-summary-flipped');
            dropdown.open = false;
        }
    });
}

allDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', dropdownToggle.bind(null, dropdown));
});

window.addEventListener('click', () => {
    allDropdowns.forEach(dropdown => {
        if (dropdown.open) {
            dropdown.firstElementChild.classList.toggle('dropdown-summary-flipped');
            dropdown.open = false;
        }
    });
})