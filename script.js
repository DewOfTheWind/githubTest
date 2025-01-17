//give new names to the 'html'IDs
const dealsInfo = document.getElementById('deals_info');
const callsInfo = document.getElementById('water_hoops_info');
const storyInfo = document.getElementById('author');

//Image file paths
const defaultImage = 'images/content/content_filler/sales.png'; // Default image
const hoverImage = 'images/content/content_filler/content_one.png'; // Hover image

const secondaryDefaultImage = 'images/content/content_filler/contact.png';
const secondaryHoverImage = 'images/content/content_filler/content_two.png';

const tertiaryDefaultImage = 'images/content/content_filler/about.png';
const tertiaryHoverImage = 'images/content/content_filler/content_three.png';

// Check if the dealsInfo element (id) exists and add event listeners to check for mouse
if (dealsInfo) {
    dealsInfo.onmouseover = function () {
        dealsInfo.src = hoverImage; // Change image
    };
    dealsInfo.onmouseout = function () {
        dealsInfo.src = defaultImage; // revert back to default image
    };
} else {
    //Tells me that 'it is not there,' if there is no element (id) under said name
    console.error("The element with ID 'deals_info' was not found.");
}

// Check if the callsInfo element exists and add event listeners
if (callsInfo) {
    callsInfo.onmouseover = function () {
        callsInfo.src = secondaryHoverImage; // Change to hover image
    };
    callsInfo.onmouseout = function () {
        callsInfo.src = secondaryDefaultImage; // Change back to default image
    };
} else {
    console.error("The element with ID 'water_hoops_info' was not found.");
}

// Check if the storyInfo element exists and add event listeners
if (storyInfo) {
    storyInfo.onmouseover = function () {
        storyInfo.src = tertiaryHoverImage; // Change to hover image
    };
    storyInfo.onmouseout = function () {
        storyInfo.src = tertiaryDefaultImage; // Change back to default image
    };
} else {
    console.error("The element with ID 'author' was not found.");
}

function toggleMenu() {
    const nav = document.querySelector('.centered_content');
    nav.classList.toggle('show');
}
