const allDropdowns = document.querySelectorAll('.dropdown');

function dropdownToggle(e, selectedDropdown) {
    selectedDropdown.firstElementChild.classList.toggle('dropdown-summary-flipped');
    
    allDropdowns.forEach(dropdown => {
        if (dropdown != selectedDropdown && dropdown.open) {
            dropdown.firstElementChild.classList.toggle('dropdown-summary-flipped');
            dropdown.open = false;
        }
    });
    e.stopPropagation();
}

allDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', e => dropdownToggle(e, dropdown));
});

window.addEventListener('click', () => {
    allDropdowns.forEach(dropdown => {
        if (dropdown.open) {
            dropdown.firstElementChild.classList.toggle('dropdown-summary-flipped');
            dropdown.open = false;
        }
    });
})