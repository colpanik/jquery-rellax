;(function($) { 
  function randomMultiplier() {
    var r = Math.floor((Math.random() * 2 ) + 1) - Math.random(); 
    console.log(r)
    return r;
  }

  var elements = [];

  $.fn.rellax = function(options) {
    var settings = {};
    if(typeof(options) == 'object') {
      settings = options;
    } else if(typeof(options) == 'number') {
      settings.multiplier = options;
    }

    this.each(function(){
      var e = $(this);
      elements.push({
        el: e,
        multiplier: settings.multiplier || randomMultiplier(),
        offset: e.offset().top
      });
    });

    return this;
  };

  function updatePositions(t) {
    for(e in elements) {
      elements[e].el.css({ top: -Math.abs((t*elements[e].multiplier))+elements[e].offset+'px' })
    }
  }

  $(window).on('scroll', function(){
    var t = $(window).scrollTop();
    updatePositions(t);
  });
}(jQuery));