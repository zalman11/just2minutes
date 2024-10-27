document.addEventListener('DOMContentLoaded', function() {
    const sheetId = '1tw4fCUljI8WQl8mfqqvaZqc6t4ww67faBLtt2YOnzVQ';
    const apiKey = 'AIzaSyAsyqFNrLuumdEPejAmfUWaNZ_YdDJAcKg';
    const range = 'Sheet1!A:B';

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const values = data.values;
            const container = document.getElementById('iframes-container');
            if (!container) {
                console.error('Container element not found');
                return;
            }

            values.forEach((row, index) => {
                if (index === 0 || index === 1) return; // Skip header row if present

                const iframeSrc = row[0];
                const iframeTitle = row[1];

                const liwrapper = document.createElement('li');
                liwrapper.id = iframeTitle;
                const wrapper = document.createElement('div');
                wrapper.className = 'video-container';
                //wrapper.id = 'video-container';
                wrapper.style.height = 'auto';
                wrapper.style.width = '100%';
                wrapper.style.padding = '0';
                //wrapper.id = iframeTitle;

                const title = document.createElement('h1');
                title.textContent = iframeTitle;
                title.style.height = '10%';
                title.style.textAlign = 'center';

                const iframe = document.createElement('iframe');
                iframe.src = iframeSrc;
                iframe.width = '100%';
                iframe.minWidth = '500px';
                iframe.height = '90%';
                iframe.allowFullscreen = 'true';
                iframe.allow = 'autoplay';

                wrapper.appendChild(title);
                wrapper.appendChild(iframe);
                container.appendChild(liwrapper);
                liwrapper.appendChild(wrapper);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

