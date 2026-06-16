# eNVision - Modern Eyewear E-Commerce Website

![BINUS University](https://img.shields.io/badge/BINUS%20University-Computer%20Science-blue)
![Course](https://img.shields.io/badge/Course-Human%20and%20Computer%20Interaction-orange)
![Tech](https://img.shields.io/badge/Tech-Vanilla%20HTML%20%7C%20CSS%20%7C%20JS-green)

**eNVision** is a responsive e-commerce web application developed as an individual project for the **Human and Computer Interaction (HCI) Laboratory** course at BINUS University. The project encompasses an end-to-end workflow, beginning with UI prototyping in Figma and translating the approved layout into clean, semantic frontend source code.

---

## 📌 Project Overview

eNVision is designed as a premium, modern optical store providing high-quality frames and precision lenses. To support the store's global expansion and drive online customer outreach, this website serves as an interactive platform showcasing modern eyewear collections, customer rewards, and a structured ordering ecosystem built entirely around user-centric design principles.

---

## 🛠️ Tech Stack & Software Used

- **Design & Prototyping:** Figma (Color/Text Styles, Components, and Interactive Prototypes)
- **Frontend Development:** Vanilla HTML5, External CSS3 (Box Positioning, Media Queries), Vanilla JavaScript
- **Development Environment:** Visual Studio Code
- **Testing Environment:** Google Chrome (Responsive DevTools)

---

## 🚀 Key Features

The platform consists of **five core responsive web pages**, each structured with a semantic Header, Navigation, Content, and Footer layout:

1. **Home Page:** Displays the brand philosophy, corporate tagline, and an engaging "Latest Arrival" display showcasing recent additions to the catalog.
2. **Product Page:** Features an organized card grid showcasing available premium frames, including high-quality product images, titles, detailed descriptions, and pricing tags.
3. **Rewards Page:** An interactive loyalty gallery detailing exclusive tier rewards, vouchers, and member perks to optimize long-term customer retention.
4. **About Us Page:** Delivers deeper storytelling about eNVision's brand origin, vision, and core leadership/founders accompanied by relevant visual media.
5. **Order Page:** A dynamic transaction module requiring specific checkout data. Features **five distinct input form components** backed by **custom vanilla JavaScript validation** (without regular expressions) to ensure high data integrity.

---

## 📱 Responsiveness & UI/UX Standards

Adhering strictly to **Human-Computer Interaction (HCI)** principles, the website incorporates fluid layout adjustments to deliver an optimized user experience across desktops, tablets, and mobile devices:
- Implements the `meta viewport` tag for multi-device scalability.
- Utilizes an **External CSS stylesheet** built entirely with custom box positioning (no `<table>` tags for layouts).
- Employs **CSS Media Queries (`@media screen`)** triggered below a **768px** viewport breakpoint to ensure seamless mobile-phone readability.
- Strictly programmed without any external frameworks (Bootstrap, Tailwind, or React) to preserve pure vanilla engine performance.

---

## 📂 Directory Structure

```text
├── assets/             # Images resources
├── styles.css          # External CSS stylesheets for structural layouts     
├── script.js           # Vanilla JavaScript files for dynamic UI and form validation  
├── index.html          # Home Page
├── products.html       # Product Catalog Page
├── rewards.html        # Customer Rewards Page
├── about.html          # About Us Page
├── order.html          # Checkout Form Page
└── README.md           # Project documentation
