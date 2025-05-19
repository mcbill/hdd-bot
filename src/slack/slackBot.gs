function doPost(e) {
  // Log the incoming payload for debugging
  console.log(JSON.stringify(e));
  return ContentService.createTextOutput('Received');
}
