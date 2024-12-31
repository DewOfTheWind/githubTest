//give new names to the 'html'IDs
const dealsInfo = document.getElementById('deals_info');
const callsInfo = document.getElementById('water_hoops_info');
const storyInfo = document.getElementById('author');

//Image file paths
const defaultImage = 'images/o_on_w_sales_content.png'; // Default image
const hoverImage = 'images/content_one.png'; // Hover image

const secondaryDefaultImage = 'images/my_phone_is_linging.png';
const secondaryHoverImage = 'images/content_two.png';

const tertiaryDefaultImage = 'images/why_dont_u_call.png';
const tertiaryHoverImage = 'images/content_three.png';

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
