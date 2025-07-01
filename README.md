# 📚 Laptop/Tablet Scheme for Students

This is a web application built for a laptop scheme designed to help students apply and get selected based on academic performance.

## ✨ Features

- Multi-step form with personal and academic details
- Document upload (marksheet, ID proof, etc.)
- Google Sheets integration for form data storage
- File upload to Google Drive
- Email OTP verification for user authenticity
- CAPTCHA verification to prevent spam
- ₹100 application fee integration (optional future feature)
- Admin dashboard to view applicants (future upgrade)

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Google Apps Script (used with Google Sheets & Drive)
- **Database**: Google Sheets
- **Others**: Google Drive API, EmailJS/Firebase for OTP, reCAPTCHA

## 🧾 How it Works

1. Student fills the form in multiple steps:
   - Personal Info
   - Academic Info
   - Document Upload
2. CAPTCHA verification ensures human entry.
3. Email OTP is sent and verified.
4. Submitted form data is saved in Google Sheets.
5. Uploaded documents are stored in Google Drive.
6. Admin selects winners based on academic performance.

## 📁 Folder Structure

project-folder/
├── index.html
├── style.css
├── script.js
├── README.md
├── /uploads (for uploaded docs if stored locally)
├── google-app-script.gs (if using Google Apps Script)


## 🔐 Security Features

- Email OTP verification
- reCAPTCHA to prevent bots
- Limited form resubmission
- Input validation on frontend

## 📈 Future Improvements

- Online payment for ₹100 fee
- Admin login & dashboard
- Email confirmation for successful submission
- SMS-based OTP
- Auto-selection and result publishing system

## 👨‍💻 Developed By

**Developer**: Prem Bhoi  
**Location**: Jalgaon, Maharashtra  
**Tech Role**: Full Stack Web Developer

---

## 📞 Contact

If you want to collaborate or have queries, feel free to reach out.

📧 Email: [your-email@example.com]  
🌐 Website: [your-website.com]

