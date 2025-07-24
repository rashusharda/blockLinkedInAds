chrome.webNavigation.onCommitted.addListener(function (details) {
  if (details.frameId === 0) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      if (!tabs[0]) return;

      let url = tabs[0].url;

      let parsedUrl = url.replace("https://", "").replace("www.", "");
      let domain = parsedUrl.split('/')[0].split('?')[0];

      try {
        if (domain && domain === "linkedin.com") {
          runLinkedinScript(tabs[0].id);
        }
      } catch (err) {
        console.error("Error injecting script:", err);
      }
    });
  }
});

function runLinkedinScript(tabId) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['linkedin.js']
  });
}
