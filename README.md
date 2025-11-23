# Lead Generation Form

A modern, responsive lead generation form that captures user contact information and submits it to Google Sheets via Google Apps Script.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation**: Validates 10-digit phone numbers
- **Google Sheets Integration**: Automatically logs leads to a Google Sheet
- **User Feedback**: Real-time form submission feedback with success/error messages
- **Disabled Button State**: Prevents duplicate submissions during processing

## Project Structure

```
lead-gen-2/
├── index.html      # Main HTML form
├── script.js       # JavaScript form handler
├── README.md       # Project documentation
└── .gitignore      # Git ignore file
```

## How It Works

1. User fills out the form with Name, Phone, and Email
2. JavaScript validates the 10-digit phone number format
3. Form data is sent to Google Apps Script
4. Google Apps Script logs the data to a Google Sheet
5. User receives a success confirmation message

## Setup Instructions

### Prerequisites

- A web browser
- A Google Account for the spreadsheet integration

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd lead-gen-2
   ```

2. Open `index.html` in your web browser to test locally

3. Replace the Google Apps Script URL in `script.js` with your own:
   - Create a Google Sheet
   - Set up a Google Apps Script to handle form submissions
   - Deploy as a web app
   - Copy the deployment URL to `script.js`

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `https://[username].github.io/lead-gen-2`

### Option 2: Netlify (Free)
1. Create a Netlify account at netlify.com
2. Drag and drop this folder into Netlify
3. Get an instant live URL

### Option 3: Vercel (Free)
1. Create a Vercel account at vercel.com
2. Import this repository
3. Deploy with one click

### Option 4: Traditional Hosting
- Upload files via FTP to your web hosting provider
- Configure the domain to point to the hosting

## Google Sheets Integration

To set up the Google Sheets backend:

1. Create a new Google Sheet
2. Create a Google Apps Script with the following function:
   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     sheet.appendRow([new Date(), data.name, data.phone, data.email]);
     return ContentService.createTextOutput("Success");
   }
   ```
3. Deploy as a web app with "Execute as Me" and "Anyone" access
4. Copy the deployment URL to `script.js`

## Customization

- **Styling**: Modify the `<style>` section in `index.html`
- **Form Fields**: Add new fields to both HTML and the JavaScript submission
- **Validation**: Update validation logic in `script.js`
- **Google Apps Script**: Modify the backend to suit your needs

## License

MIT License - Feel free to use this project for personal or commercial purposes

## Support

For issues or questions, please open an issue on GitHub.
