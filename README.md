⭐ VishwaMihiranga – Personal Portfolio Website

A modern, responsive personal portfolio website built using HTML, CSS, and JavaScript, featuring dark mode, smooth animations, projects showcase, and a functional Web3Forms contact form.

🚀 Live Demo

🔗 https://vishwamihiranga.com
 (Add your link if hosted)

📌 Features

⚡ Fully responsive design

🌙 Light & Dark mode

🎨 Smooth animations (AOS + custom CSS animations)

📁 Projects showcase section

🧑‍💼 About, Skills, Services, Testimonials, Contact sections

📨 Web3Forms integration for contact form

📱 Mobile optimized header with animated menu toggle

💠 Clean UI / UX with custom color variables

🔥 Preloader, custom cursor & polished transitions

📂 Folder Structure
vishwamihiranga/
│
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│
└── README.md

🛠️ Installation & Setup

Clone the project:

git clone https://github.com/vmihiranga/vishwamihiranga.git
cd vishwamihiranga


Open the website directly:

index.html


Or run a local development server:
Using Python:

python -m http.server 5500


Using Live Server:

live-server

📨 Contact Form (Web3Forms)

The contact form uses Web3Forms for backend email handling.

<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>


Replace YOUR_ACCESS_KEY with your actual Web3Forms key.

🧪 Features Used
🌗 Dark Mode

Implemented using CSS variables:

body.dark-mode {
  --bg-color: #111827;
  --text-color: #a1a1aa;
  ...
}

📱 Mobile Menu

Animated hamburger with JS to open/close menu.

🚀 Deployment

You can deploy this site using:

GitHub Pages

Go to Settings → Pages

Select branch: main

Save

Vercel / Netlify

Import repo → Deploy instantly

🤝 Contributing

Pull requests are welcome!
If you want to improve UI, animations, or add new sections:

git checkout -b feature/my-improvement
git commit -m "Added new feature"
git push origin feature/my-improvement

📜 License

This project is licensed under the MIT License.
You are free to modify & distribute this project with proper attribution.

📧 Contact

👤 Vishwa Mihiranga
📩 Email: contact@vishwamihiranga.com

🌐 GitHub: https://github.com/vmihiranga

📱 WhatsApp: +94 724 826 875
