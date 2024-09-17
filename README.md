# Webpage Summarizer Chrome Extension

This Chrome extension automatically summarizes the content of the active webpage using **Groq AI** and displays the summary in a popup.

## Features

- Automatically extracts the main content of the active webpage.
- Summarizes the content using AI.
- Displays the summary in a clean, easy-to-read format within the extension popup.

## Getting Started

These instructions will help you set up the Chrome extension for development or personal use.

### Prerequisites

- **Google Chrome** browser installed.
- Basic knowledge of JavaScript and Chrome Extensions (Manifest V3).

### Installation

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/pallavisaraogi/webpage-summarizer-extension.git
   cd webpage-summarizer-extension
   ```

2. **Install dependencies**:

   - No external dependencies are needed. All code is written using plain JavaScript and the Chrome Extensions API.

3. **Set up Groq AI API Key**:

   - You’ll need to generate an API key from **Groq AI**.
   - Modify `background.js` to include the API key and adjust the summarization logic to use Groq AI.

4. **Load the extension** into Chrome:

   - Open **Chrome** and go to `chrome://extensions/`.
   - Enable **Developer mode** (toggle in the top right).
   - Click **Load unpacked** and select the directory where the repository was cloned.
   - The extension should now be loaded and visible in the extensions toolbar.

## Usage

1. Navigate to any webpage you want to summarize.
2. Click on the **Webpage Summarizer** extension icon.
3. The popup will load automatically, extract the content from the page, and display the summary within the popup.

**Make sure to replace YOUR_GROQ_AI_API_KEY with your actual Groq AI API key in background.js.**
