// 获取按钮和音乐元素
const showImageButton = document.getElementById('showImageButton');
const image = document.getElementById('image');
const playMusicButton = document.getElementById('playMusicButton');
const music = document.getElementById('music');

// 点击按钮显示图片
showImageButton.addEventListener('click', function() {
    image.style.display = 'block';
});

// 点击按钮播放音乐
playMusicButton.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        playMusicButton.textContent = '暂停音乐';
    } else {
        music.pause();
        playMusicButton.textContent = '播放音乐';
    }
});
