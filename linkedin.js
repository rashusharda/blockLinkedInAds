function removeAds(){

    //Get all 'span' elements on the page
    const spans = document.querySelectorAll("span");

    spans.forEach(span => {
        if (span.textContent.trim().toLowerCase() === "promoted") {
        let card = span.closest("div[data-urn]");

        // Fallback if closest doesn't work
        if (!card) {
            let node = span;
            for (let i = 0; i < 6; i++) {
            if (node.parentNode) node = node.parentNode;
            }
            card = node;
        }

        if (card) {
            card.style.display = "none";
            console.log("Ad removed:", card);
        }
        }
    });
}

// Run once on load
removeAds();

// Run repeatedly as new posts appear while scrolling
setInterval(() => {
  removeAds();
}, 1000);