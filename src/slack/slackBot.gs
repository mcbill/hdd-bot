function doPost(e) {
  // Log the incoming payload for debugging
  console.log(JSON.stringify(e));

  // Extract Opportunity ID from the slash command text
  var oppId = '';
  if (e && e.parameter && e.parameter.text) {
    oppId = e.parameter.text.trim();
    // Store latest Opportunity ID for debugging/state purposes
    PropertiesService.getScriptProperties().setProperty('lastOpportunityId', oppId);
  }

  var reply = oppId ? 'Received Opportunity ID: ' + oppId
                     : 'No Opportunity ID found';
  return ContentService.createTextOutput(reply);
}
