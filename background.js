/*
    This event triggers when the browser has comitted to loading a webpage.
    As oppsosed to e.g. webNavigation.onCompleted, this  will start to run early 
    so that we can begin to remove ads as soon as possible.
*/

chrome.webNavigation.onCommitted.addListener(function(tab){
    // prevents script from running when other frames load
    if (tab.frameId === 0) {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs =>{

            // get the url of the webpage
            let url = tabs[0]. url;

            // Remove unnecessary protocol definitions and www subdomain from the URL
            let parsedUrl = url.replace("https://", "")
            .replace("https://", "")
            .replace("www.", "")

            //Remove path and queries e.g linkedin.com/feed or linkedin.com?query-value
            //Only want the base domain
            let domain = parsedUrl.split('/')[0].split('?')[0];
            
            try {
                if (domain.length < 1 || domain === null || domain === undefined){
                    return;
                } else if (domain == "linkedin.com"){
                    runLinkedinScript();
                    return;
                }
            } catch (err){
                throw err;
            }

        });
}});

function runLinkedinScript(){
    // Inject script from file into the webpage
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['linkedin.js']
    });
}