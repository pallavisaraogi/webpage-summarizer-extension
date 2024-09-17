window.onload = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id

    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        files: ["contentScript.js"],
      },
      () => {
        chrome.tabs.sendMessage(
          tabId,
          { action: "extractContent" },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error("Error: " + chrome.runtime.lastError.message)
            } else {
              chrome.runtime.sendMessage(
                { action: "summarize", content: response.content },
                (response) => {
                  document.getElementById("summary").textContent =
                    response.summary
                }
              )
            }
          }
        )
      }
    )
  })
}
