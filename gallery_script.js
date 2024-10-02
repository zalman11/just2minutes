// Load uploaded videos from the server
fetch('/get_videos')
.then(response => response.json())
.then(videos => {
    videos.forEach(video => {
        const videoItem = document.createElement('li');
        videoItem.innerHTML = `<h2>${video.title}</h2><video src="${video.url}" controls></video>`;
        document.getElementById('videoList').appendChild(videoItem);
    });
})
.catch(error => {
    console.error('Error loading videos:', error);
});