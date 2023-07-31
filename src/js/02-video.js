import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef, {
  fullscreen: true,
  quality: '1080p',
  loop: true,
});

const onPlay = function (data) {
  console.log(data);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
