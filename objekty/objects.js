var currentPage = 1;
var pageURLs = [
    "objectsss2.html",
    "objectsss3.html",
    "objectsss4.html",
    "objectsss5.html",
    "objectsss6.html",
    "objectsss7.html"
]; // Update this array with the URLs of your pages

document.getElementById("prevBtn").addEventListener("click", showPrev);
document.getElementById("nextBtn").addEventListener("click", showNext);

function showPrev() {
    if (currentPage > 1) {
        currentPage--;
        navigateToPage(currentPage);
    }
}

function showNext() {
    if (currentPage < pageURLs.length) {
        currentPage++;
        navigateToPage(currentPage);
    }
}


function navigateToPage(pageNumber) {
    window.location.href = pageURLs[pageNumber - 1];
}