function doPost(e) {
  // Log the incoming payload for debugging
  console.log(JSON.stringify(e));

  // Extract the text parameter which should contain the Opportunity ID
  var opportunityId = '';
  if (e && e.parameter && e.parameter.text) {
    opportunityId = e.parameter.text.trim();
    // Store the ID for later steps using Script Properties
    PropertiesService.getScriptProperties()
      .setProperty('currentOpportunityId', opportunityId);
  }

  // Respond with the extracted ID so Slack confirms receipt
  return ContentService.createTextOutput(
    'Received Opportunity ID: ' + opportunityId
  );
}
