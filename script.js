// Get references to HTML elements
const signInForm = document.getElementById('signInForm');
const uploadForm = document.getElementById('uploadForm');
const draftsList = document.getElementById('draftsList');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const videoTitleInput = document.getElementById('videoTitleInput');
const videoInput = document.getElementById('videoInput');
const uploadStatus = document.getElementById('uploadStatus');
const progressBar = uploadStatus.querySelector('.progress-bar');

// Handle form submissions
signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get username and password values
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Implement sign-in logic here
    // Verify username and password against stored credentials
    // If credentials are valid, allow user to upload videos and view drafts

    if (username === 'ZTB' && password === '123') {
        // Sign in successful
        // Show upload form and hide sign-in form
        uploadForm.style.display = 'block';
        signInForm.style.display = 'none';
    } else {
        // Sign-in failed
        alert('Invalid username or password');
    }
});

uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get video title
    const videoTitle = videoTitleInput.value;

    // Get selected video file
    const videoFile = videoInput.files[0];

    // Create FormData object to send video and title
    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('title', videoTitle);

    // Show upload status and hide form
    uploadStatus.style.display = 'block';
    uploadForm.style.display = 'none';

    // Update progress bar during upload
    const uploadInterval = setInterval(() => {
        // Simulate progress updates (replace with actual progress tracking)
        const progress = Math.floor(Math.random() * 100);
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(uploadInterval);
        }
    }, 1000);

    // Make AJAX request to upload video
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Video uploaded successfully
            alert('Video uploaded successfully!');
            // Redirect to gallery.html
            window.location.href = 'gallery.html';
        } else {
            // Error uploading video
            console.error('Error uploading video:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error uploading video:', error);
    });
});

// ... (rest of the code for loading drafts and displaying them)