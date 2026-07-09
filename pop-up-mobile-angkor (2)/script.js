window.onload = function() {
  var adContainer = document.getElementById('ad-container');
  var clickCta = document.getElementById('clickCta');
  var closeBtn = document.getElementById('ad-close');

  clickCta.addEventListener('click', function() {
    // This is the standard way to implement the clickTag
    window.open("https://www.google.com/");
  });

  // Also open clickTag when clicking the ad area (not the close button)
  adContainer.addEventListener('click', function(e){
    if(e.target === closeBtn || e.target.closest && e.target.closest('.ad-close')) return;
    window.open("https://www.google.com/");
  });

  // Close button behavior
  if(closeBtn){
    closeBtn.addEventListener('click', function(e){
      e.stopPropagation();
      adContainer.style.display = 'none';
    });
    // allow Esc to close
    document.addEventListener('keydown', function(ev){ if(ev.key==='Escape') adContainer.style.display='none'; });
  }
};