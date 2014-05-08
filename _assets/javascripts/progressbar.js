$(document).ready(function(){
  var getMax = function(){
    return $(document).height() - $(window).height();
  }
  
  var getValue = function(){
      return $(window).scrollTop();
  }

  var progressBar = $('progress');
  
  progressBar.attr({ max: getMax() });

  $(document).on('scroll', function(){
    progressBar.attr({ value: getValue() });
  });

  $(window).resize(function(){
    progressBar.attr({ max: getMax(), value: getValue() });
  });
});

$(document).ready(function(){
  $(document).on('scroll', function(){
      maxAttr = $('#progressBar').attr('max');
      valueAttr = $('#progressBar').attr('value');
      percentage = (valueAttr/maxAttr) * 100;
  });
});