/**
 * Mihir & Mansi — "Message for the Couple" receiver
 *
 * Saves each wish as a row in a "Wishes" tab of the spreadsheet this script
 * is attached to. Wishes are private: nothing is sent back to the website.
 *
 * Setup (about 5 minutes):
 * 1. Open your RSVP Google Sheet -> Extensions -> Apps Script.
 * 2. Click "+" next to Files -> Script, name it "wishes", paste this file.
 *    (If the project already has a doPost for RSVPs, put this in a NEW
 *    Apps Script project instead: Sheet -> Extensions -> Apps Script opens
 *    the existing one, so create a new spreadsheet or use script.google.com
 *    and replace getActiveSpreadsheet() with SpreadsheetApp.openById('<sheet id>').)
 * 3. Deploy -> New deployment -> type "Web app".
 *    Execute as: Me. Who has access: Anyone.
 * 4. Copy the Web App URL into CONFIG.wishes.googleScriptUrl in script.js.
 */
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Wishes') || ss.insertSheet('Wishes');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Message']);
    sheet.setFrozenRows(1);
  }

  var p = (e && e.parameter) || {};
  sheet.appendRow([
    new Date(),
    String(p.name || '').slice(0, 60),
    String(p.message || '').slice(0, 500)
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
