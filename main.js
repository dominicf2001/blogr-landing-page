const allDropdowns = document.querySelectorAll('.dropdown');

const allDropdownLists = document.querySelectorAll('.dropdown-list');

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


// Prevents dropdown arrow from changing on dropdownlist click
allDropdownLists.forEach(dropdownlist => {
    dropdownlist.addEventListener('click', () => {
        dropdownlist.click();
    })
})