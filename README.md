# Aari Work Website — MySQL version

This project keeps the existing HTML/CSS/JavaScript website design and replaces MongoDB/Mongoose with MySQL (`mysql2`). Order and enquiry submissions are saved in MySQL. The server can also email notifications to the business inbox through Gmail SMTP; customers are not redirected to Gmail.

## Requirements
- Node.js
- MySQL Server (MySQL Workbench is optional; it is only a GUI)
- A Gmail account with 2-Step Verification and a Google App Password for email notifications

## Setup in VS Code
1. Extract this ZIP and open the `aari-work-website` folder in VS Code.
2. Open Terminal → New Terminal.
3. Install packages:
   ```powershell
   npm install
   ```
4. Copy `.env.example` to `.env`:
   ```powershell
   Copy-Item .env.example .env
   ```
5. Edit `.env`:
   - `DB_USER` and `DB_PASSWORD`: your MySQL login.
   - `EMAIL_USER`: the Gmail account used to send notification.
   - `EMAIL_APP_PASSWORD`: its Google App Password (not the normal Gmail password).
   - `ORDER_RECEIVER_EMAIL`: `g03128519@gmail.com`.
6. Start MySQL Server from Windows Services or MySQL Installer.
7. Start the website:
   ```powershell
   npm run dev
   ```
8. Open `http://localhost:5000`.

The backend creates the `aari_work_db` database and the `orders` and `enquiries` tables automatically when it starts. The MySQL user must have permission to create databases/tables.

## Important
- MongoDB and Mongoose are no longer used by this version. You do not need MongoDB for this project.
- The existing page design, forms, gallery and browser-side form submission logic are retained.
- Email notification is optional until valid Gmail SMTP settings are added to `.env`. Orders/enquiries are saved even if email sending fails.
- Never share or commit `.env` or your Google App Password.
- This starter does not include an admin dashboard, payment gateway, image upload, or WhatsApp integration.
- Before public deployment, configure production database credentials, HTTPS, validation, spam protection, rate limiting and privacy/security controls.
