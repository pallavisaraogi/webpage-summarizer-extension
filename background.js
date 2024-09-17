chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "summarize") {
    fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer <YOUR_GROQ_AI_API_KEY>`,
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `Summarize this text: \n\n${request.content}`,
          },
        ],
        model: "mixtral-8x7b-32768",
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        sendResponse({ summary: data.choices[0].message.content })
      )
      .catch((error) => sendResponse({ summary: "Error: " + error.message }))

    return true
  }
})
