const text = `     
Hello, you can contact us at info@example.com or support@mysite.org.      
Our phone number is (123) 456-7890. The event will be held on 12/25/2024.     
Visit our website at http://www.example.com or https://secure-site.net.     
You can also call (987) 654-3210 for more details.     
Another event is on 01/01/2025, and you can reach out at contact@site.com.
`;

// Function to extract emails
function extractEmails(text) {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailPattern);
    console.log('Emails:', emails);
}

// Function to extract phone numbers
function extractPhoneNumbers(text) {
    const phonePattern = /\(\d{3}\) \d{3}-\d{4}/g;
    const phoneNumbers = text.match(phonePattern);
    console.log('Phone Numbers:', phoneNumbers);
}

// Function to extract dates in MM/DD/YYYY format
function extractDates(text) {
    const datePattern = /\b\d{2}\/\d{2}\/\d{4}\b/g;
    const dates = text.match(datePattern);
    console.log('Dates:', dates);
}

// Function to extract URLs
function extractURLs(text) {
    const urlPattern = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const urls = text.match(urlPattern);
    console.log('URLs:', urls);
}

// Execute the functions
extractEmails(text);
extractPhoneNumbers(text);
extractDates(text);
extractURLs(text);