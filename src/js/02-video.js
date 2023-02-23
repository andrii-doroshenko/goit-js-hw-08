import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onCurrentTimeGet, 1000));

const onSetCurrentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

player.setCurrentTime(onSetCurrentTime);

function onCurrentTimeGet() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
  });
}
