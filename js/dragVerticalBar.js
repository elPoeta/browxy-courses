let dragging2 = false;
let self = this;
$('#horizontalDragBar').mousedown(function(e) {
  e.preventDefault();
  dragging2 = true;
  $('#browxySite').append('<div id="tarp" class="tarp"></div>');
  let main2 = $('#compilerConsole');
  let ghostbar2 = $('<div>', {
    id : 'ghostbar2',
    css : {
      height : "5px",
      top : main2.offset().top - 6,
      left : "0px",
      width : main2.outerWidth()
    }
  }).appendTo('body');
  $(document).mousemove(function(e) {
    if (e.pageY > $('#compilerNew').offset().top) {
      ghostbar2.css("top", e.pageY + "px");
    }
  });
});

$(document).mouseup(function(e) {
  if (dragging2) {
    let currentHeight = $(document).height() - $('#ghostbar2').offset().top;
    $('#horizontalDragBar').css("bottom", currentHeight - 6);
    $('#compilerConsole').css("height", currentHeight - 6);
    $('#bxy_compiler__editor-container').css("bottom", currentHeight);
    $('#bxy_compiler__top_container').css("bottom", currentHeight);
    $('#ghostbar2').remove();
    $('#tarp').remove();
    $(document).unbind('mousemove');
    dragging2 = false;
  }
});

let dragging = false;
$('#verticalDragBar').mousedown(function(e) {
  e.preventDefault();
  dragging = true;
  $('#browxySite').append('<div id="tarp" class="tarp"></div>');
  let main = $('#rightNavigation');
  let ghostbar = $('<div>', {
    id : 'ghostbar',
    css : {
      height : main.outerHeight(),
      top : main.offset().top,
      left : main.offset().left - 6
    }
  }).appendTo('body');
  $(document).mousemove(function(e) {
    if (e.pageX > 0) {
      ghostbar.css("left", e.pageX);
    }
  });
});

$(document).mouseup(function(e) {
  if (dragging) {
    let currentWidth = $(document).width() - $('#ghostbar').offset().left;
    $('#verticalDragBar').css("right", (currentWidth - 6) + "px");
    $('#rightNavigation').css("width", currentWidth - 6);
    if(currentWidth > 600) {
      $('#nav-bar').css("width", (currentWidth) + "px");
    } else {
      $('#nav-bar').css("width", "inherit");
    }
    $('#bxy_compiler').css("right", currentWidth);
    $('#ghostbar').remove();
    $('#tarp').remove();
    $(document).unbind('mousemove');
    dragging = false;
  }
});
