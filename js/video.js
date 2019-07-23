// play video when user enters room. Pause when leaving
const video = document.getElementById('theaterVideo');
video.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const userPosition = this.el.getAttribute('position')["z"];

    if (userPosition <= -17) {
      video.play();
    } else {
      video.pause();
    }
  }
});

// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  video.play();
  video.pause();
  splash.style.display = 'none';
});


const video1 = document.getElementById('theaterVideo1');
video1.pause();
AFRAME.registerComponent('listener1', {
  tick1: function () {
    const userPosition = this.el.getAttribute('position')["z"];

    if (userPosition <= -17) {
      video1.play();
    } else {
      video1.pause();
    }
  }
});

// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton1 = document.querySelector('.splash__button')
const splash1 = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  video1.play();
  video1.pause();
  splash1.style.display = 'none';
});
