document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side authentication (for demonstration purposes)
    if (username === 'ZTB' && password === '123') {
        localStorage.setItem('isAuthenticated', 'true');
        document.getElementById('uploadForm').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoInput = document.getElementById('videoInput');
    const file = videoInput.files[0];
    const videos = JSON.parse(localStorage.getItem('videos')) || [];

    if (file) {
        const videoURL = URL.createObjectURL(file);
        videos.push(videoURL);
        localStorage.setItem('videos', JSON.stringify(videos));
        window.location.href = 'gallery.html';
    }
});
