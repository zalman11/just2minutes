function getLastTwoLinesAndAddIframes() {
  // Replace 'YOUR_SHEET_ID' with the actual ID of your Google Sheet
  var spreadsheetId = '1tw4fCUljI8WQl8mfqqvaZqc6t4ww67faBLtt2YOnzVQ';
  var YOUR_API_KEY = 'AIzaSyAsyqFNrLuumdEPejAmfUWaNZ_YdDJAcKg';
  // Specify the range (A1:Z) to retrieve all data from columns A to Z
  var range = 'A1:B';

  // Create a URL to fetch the data from the Google Sheets API
  var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${YOUR_API_KEY}`;

  // Make a GET request to the URL using fetch
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extract the values from the data
      var values = data.values;

      // Get the last two rows
      var lastTwoRows = values.slice(-2);

      // Create a container element to hold the iframes
      var container = document.getElementById('iframeContainer'); // Replace 'iframeContainer' with the ID of your container element

      // Iterate over the last two rows and create iframes
      lastTwoRows.forEach(row => {
        // Create an iframe element
        var iframe = document.createElement('iframe');

        // Set the source URL of the iframe based on the row data (adjust as needed)
        iframe.src = row[0]; // Assuming the URL is in the first column

        // Append the iframe to the container
        container.appendChild(iframe);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
