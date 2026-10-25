/**
 * Mihir & Mansi — "Wedding Predictions" live poll
 *
 * Records one vote per guest per question in a "Poll" tab and returns the
 * current tallies so the invitation can show live result bars.
 *
 * Setup (about 5 minutes):
 * 1. Go to script.google.com -> New project, name it "Wedding Poll".
 *    (Use a NEW project so your existing RSVP script is untouched.)
 * 2. Paste this file. Replace SHEET_ID below with the id of the Google Sheet
 *    to store votes in (the long code in the sheet's URL between /d/ and /edit).
 * 3. Deploy -> New deployment -> type "Web app".
 *    Execute as: Me. Who has access: Anyone.
 * 4. Copy the Web App URL into CONFIG.poll.googleScriptUrl in script.js.
 *
 * Endpoints (GET):
 *   ?action=results                         -> { tallies: { q: { option: count } } }
 *   ?action=vote&voter=..&q=..&a=..         -> records/updates the vote, returns tallies
 */
var SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';

function doGet(e) {
  var p = (e && e.parameter) || {};
  var sheet = getPollSheet_();

  if (p.action === 'vote' && p.voter && p.q && p.a) {
    var voter = String(p.voter).slice(0, 40);
    var question = String(p.q).slice(0, 40);
    var answer = String(p.a).slice(0, 80);

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var rows = sheet.getDataRange().getValues();
      var updated = false;
      for (var i = 1; i < rows.length; i++) {
        if (rows[i][1] === voter && rows[i][2] === question) {
          sheet.getRange(i + 1, 1, 1, 4).setValues([[new Date(), voter, question, answer]]);
          updated = true;
          break;
        }
      }
      if (!updated) sheet.appendRow([new Date(), voter, question, answer]);
    } finally {
      lock.releaseLock();
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ tallies: tallies_(sheet) }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getPollSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName('Poll') || ss.insertSheet('Poll');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Voter', 'Question', 'Answer']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function tallies_(sheet) {
  var rows = sheet.getDataRange().getValues();
  var out = {};
  for (var i = 1; i < rows.length; i++) {
    var q = rows[i][2];
    var a = rows[i][3];
    if (!q || !a) continue;
    out[q] = out[q] || {};
    out[q][a] = (out[q][a] || 0) + 1;
  }
  return out;
}
