$(window, document, undefined).ready(function() {

    $('input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });
  
    var $ripples = $('.ripples');
  
    $ripples.on('click.Ripples', function(e) {
  
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find('.ripplesCircle');
  
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
  
      $circle.css({
        top: y + 'px',
        left: x + 'px'
      });
  
      $this.addClass('is-active');
  
    });
    
  
    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });
  
  });
  document.getElementById('lcc').onclick = function() {
    var hazard = this.checked; 
    var radios = this.form.elements['ship'];
    for (var i=0, len=radios.length; i<len; i++) {
        var r = radios[i];
         if ( hazard ) { 
             if ( r.value === 'std' ) { 
                r.checked = true; 
            } else { 
                r.checked = false; 
                r.disabled = true; 
    
        } else { 
            r.disabled = false; 
        }
    
    }
    }
    window.onclick = function(event) {
      if (event.target == sidenav) {
        sidenav.style.display = "none";
      }
    }