function showVideo(videoId) {
    const videoModal = document.getElementById('vidpopup');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    // setting seuai episode ygy
    if (videoId === 'video1') {
        videoSource.src = './thumbnail-home/vid-cas1.mp4'; 
    } else if (videoId === 'video2') {
        videoSource.src = './thumbnail-home/vid-cas2.mp4';
    } else if (videoId === 'video3') {
        videoSource.src = './thumbnail-home/vid-cas3.mp4'; 
    }

    videoPlayer.load(); 
    videoModal.style.display = 'flex'; 
}

function closeVideo() {
    const videoModal = document.getElementById('vidpopup');
    const videoPlayer = document.getElementById('videoPlayer');
    videoModal.style.display = 'none'; 
    videoPlayer.pause(); 
    videoPlayer.src = '';
}
