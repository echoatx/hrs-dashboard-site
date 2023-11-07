function toggleFullscreen()
{
  var element = document.documentElement;
  
  var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);
  
  if (isInFullScreen)
  {
    if (document.exitFullscreen)
    {
      document.exitFullscreen();
    }
    else if (document.webkitExitFullscreen)
    {
      document.webkitExitFullscreen();
    }
    else if (document.msExitFullscreen)
    {
      document.msExitFullscreen();
    }
  }
  else
  {
    if (element.requestFullscreen)
    {
      element.requestFullscreen();
    }
    else if (element.webkitRequestFullscreen)
    {
      element.webkitRequestFullscreen();
    }
    else if (element.msRequestFullscreen)
    {
      element.msRequestFullscreen();
    }
  }
  return false;
}

var div = document.getElementById('fsButtonForToc');
div.style.visibility = 'hidden';
