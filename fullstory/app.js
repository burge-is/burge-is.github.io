function playPad(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const pad = document.querySelector(`.drum-pads>div[data-key="${keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  pad.classList.add('playing');
}

function keydownHandiler(e) {
  playPad(e.keyCode);
};

function removeTransitionClass(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function padClickHandiler(e) {
  const target = e.target.tagName === "SPAN" ? e.target.parentNode : e.target;
  playPad(target.attributes['data-key'].value);
}

const pads = document.querySelectorAll('.drum-pads>div');
pads.forEach(pad => { pad.addEventListener('transitionend', removeTransitionClass);
pad.addEventListener('click', padClickHandiler)
                    });
window.addEventListener('keydown', keydownHandiler);
