# 🚫 LinkedIn AdBlocker

**A lightweight browser extension that silently cleans up your LinkedIn feed by removing sponsored content and unwanted distractions.**

---

## ⚡ Features

- 🔍 Detects and removes LinkedIn sponsored posts from your feed
- 🧹 Improves readability and page performance by eliminating ad-heavy elements
- 🧠 Minimalist design — no popups, no fuss
- 🔒 Secure by design — only accesses LinkedIn feed and uses the least privileges required

---

## 🛠️ Installation (Developer Mode)

1. Clone or download this repository.
2. Open `chrome://extensions` in your browser.
3. Enable **Developer mode** (top right toggle).
4. Click **"Load unpacked"** and select the folder where this extension lives.
5. Browse LinkedIn with clarity!

---

## 👨‍💻 How It Works

The extension uses Chrome’s `scripting` API and a service worker to inject a lightweight script that identifies and removes sponsored content on LinkedIn using DOM selectors and behavior patterns.

- **background.js**: Registers events and injects the cleaner script
- **linkedin.js**: Executes ad-removal logic directly on the page

---

## 📁 Project Structure

```
linkedin-adblocker/
├── background.js       # Service worker script triggered by navigation or icon click
├── linkedin.js         # Content script injected into LinkedIn to remove ads
├── manifest.json       # Chrome extension configuration (Manifest V3)
├── README.md           # Project overview and setup instructions
├── icons/              # Extension icons for various sizes
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
```

---

## ✨ Roadmap

- [ ] Add support for detecting promoted job postings
- [ ] Option to toggle blocker on/off
- [ ] Firefox-compatible version
- [ ] UI enhancements with badge notifications

---

## 💬 Contributing

Pull requests are welcome! If you’ve got a smarter way to identify ads or ideas for expanding functionality, let’s collaborate. Just fork the repo, make your changes, and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Credits

Created with ❤️ by **Rashu Sharda**.
