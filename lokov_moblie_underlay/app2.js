var frame1 = gsap.timeline({
  delay: 0,
  repeat: 0,
  repeatDelay: 0,
  paused: true,
});
var clicked = false;
var animationStart = false;

function renderAnimation() {
  frame1.play();
  frame1.addLabel("start");
}
// renderAnimation();
window.addEventListener("load", initialCode, false);

function initialCode() {
  bindEvents();
}

function bindEvents() {
  window.addEventListener("message", messageHandler, false);
}

function messageHandler(event) {
  var eventMsg = event.data;
  if (eventMsg.isCompleteInline != undefined) {
    document
      .getElementById("external-link")
      .setAttribute("href", eventMsg.ClickAdsInline);
  }
  if (eventMsg.isCompleteInline < 50 && eventMsg.isCompleteInline > -90) {
    if (!animationStart) {
      animationStart = true;
      frame1.play();
      renderAnimation();
    }
  } else {
    animationStart = false;
    frame1.restart();
    frame1.paused(true);
    frame1.clear();
  }
}
