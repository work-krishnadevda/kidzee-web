/**
 * Kidzee jeetshree — Google Sheet + Email webhook
 *
 * SETUP:
 * 1. Create a new Google Sheet (e.g. "Kidzee Form Submissions")
 * 2. Extensions → Apps Script → paste this entire file
 * 3. Update SCRIPT_SECRET and NOTIFY_EMAIL below
 * 4. Run setupSheet() once from the editor (authorize when prompted)
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL into your site env: GOOGLE_SCRIPT_URL
 * 7. Set GOOGLE_SCRIPT_SECRET to the same value as SCRIPT_SECRET
 */

const SCRIPT_SECRET = "change-me-to-a-long-random-string";
const NOTIFY_EMAIL = "kidzee5789@kidzee.com";

function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  sheet.appendRow([
    "Timestamp",
    "Form Type",
    "Student Name",
    "Date of Birth",
    "Gender",
    "Program",
    "Parent Name",
    "Phone",
    "Email",
    "Address",
    "Child Info",
    "Tour Date",
    "Tour Time",
    "Message",
  ]);
  sheet.getRange(1, 1, 1, 14).setFontWeight("bold");
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      message: "Kidzee form webhook is active. Submit forms via POST from the website.",
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    if (payload.secret !== SCRIPT_SECRET) {
      return jsonResponse({ success: false, error: "Unauthorized" });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    sheet.appendRow([
      timestamp,
      payload.formType || "",
      payload.studentName || "",
      payload.dateOfBirth || "",
      payload.gender || "",
      payload.program || "",
      payload.parentName || "",
      payload.phone || "",
      payload.email || "",
      payload.address || "",
      payload.child || "",
      payload.tourDate || "",
      payload.tourTime || "",
      payload.message || "",
    ]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "[Kidzee jeetshree] New " + formatFormType(payload.formType),
      body: buildEmailBody(payload, timestamp),
    });

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

function formatFormType(type) {
  const labels = {
    admission: "Admission Application",
    contact: "Contact Inquiry",
    "book-tour": "School Tour Booking",
    "landing-enquiry": "Landing Page Enquiry",
  };
  return labels[type] || type || "Form Submission";
}

function buildEmailBody(p, timestamp) {
  var lines = [
    "New form submission — Kidzee jeetshree, Ratlam",
    "========================================",
    "Submitted: " + timestamp,
    "Form: " + formatFormType(p.formType),
    "",
  ];

  if (p.studentName) lines.push("Student Name: " + p.studentName);
  if (p.dateOfBirth) lines.push("Date of Birth: " + p.dateOfBirth);
  if (p.gender) lines.push("Gender: " + p.gender);
  if (p.program) lines.push("Program: " + p.program);
  if (p.parentName) lines.push("Parent Name: " + p.parentName);
  if (p.phone) lines.push("Phone: " + p.phone);
  if (p.email) lines.push("Email: " + p.email);
  if (p.address) lines.push("Address: " + p.address);
  if (p.child) lines.push("Child: " + p.child);
  if (p.tourDate) lines.push("Tour Date: " + p.tourDate);
  if (p.tourTime) lines.push("Tour Time: " + p.tourTime);
  if (p.message) lines.push("Message: " + p.message);

  lines.push("", "— Sent automatically from the Kidzee jeetshree website");
  return lines.join("\n");
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
