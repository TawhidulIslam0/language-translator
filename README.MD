# Language Translator App
A clean, responsive, and functional web application that allows users to translate text between various languages. It supports real-time translation, document uploads, and a toggleable dark mode interface.

Live application
https://tawhidulislam0.github.io/language-translator/

🚀 Features
Real-time Translation: Get translations instantly as you type.

Language Selection: Dropdown menu with a comprehensive list of supported languages (from Auto-detect to Yiddish).

Language Swapping: Quickly swap the "from" and "to" languages with a single click.

File Support: Upload documents (.txt, .pdf, .doc, .docx) for bulk translation.

Export: Download the translated text directly as a .txt file.

Dark Mode: Switch between light and dark themes for better accessibility.

Character Limiter: Built-in constraint of 5,000 characters per translation request.

Responsive Design: Fully optimized for both desktop and mobile views.

🛠️ Technologies Used
HTML5: Structured semantic markup.

CSS3: Custom styles, Flexbox, and CSS Variables for theme management.

Vanilla JavaScript: Logic for DOM manipulation, file handling, and API integration.

Google Translate API (Unofficial): Used for fetching translations via fetch.

Ionicons: Vector icons for a modern UI.

📁 Project Structure
index.html: The main structure of the application.

styles/style.css: Contains styling, layout definitions, and dark mode theme variables.

script/languages.js: A JavaScript array containing all supported language codes and display names.

script/script.js: Core application logic, event listeners, API integration, and file handling.

images/: Directory containing UI assets (sun.png, moon.png).

⚙️ How It Works
API Integration: The application uses an unofficial Google Translate API endpoint (translate.googleapis.com) to handle translation requests in real-time as the user types.

State Management: The app keeps track of the selected source and target languages. When a change is detected in the input or the selection menus, the translate() function is triggered.

File Reading: It utilizes the FileReader API to read the content of uploaded documents directly in the browser and injects the text into the translation area.

Blob Downloading: The application creates a browser-native Blob from the translated output, allowing users to save their results as a .txt file locally.

💻 Setup Instructions
Clone this repository or download the files to your local machine.

Ensure you have the images/ directory properly populated with sun.png and moon.png.

Open index.html in any modern web browser to start translating.

Ensure you have an active internet connection, as the application requires external access to the Google Translate API and the Ionicons CDN.

💡 Note
API Limitations: This application uses an unofficial Google Translate API endpoint. It is perfect for personal projects, learning, and prototyping, but it is not intended for high-traffic production use. For commercial applications, consider using the official Google Cloud Translation API.
