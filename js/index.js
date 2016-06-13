
  (function($){
     var lunbo = function(contant){
     	var _contant = {
     		interval:4000,
     		step:$.noop
     	}
     	$.extend(_contant,contant)
     	 var ul = $('.big-banner').find('.banner-wrapper'),
     	     li = ul.find('li'),
     	     off = li.outerWidth(true),
     	     index = 1;
       setInterval(function(){
       	ul.animate({'marginLeft':-index*off});
        $('.banner-ico li').removeClass('active').eq(index).addClass('active');
       	index += 1;
       	_contant.step(index)
       	if(index === li.length){
       		index = 0;
       	}
       },_contant.interval)
       return this;
     }
     $.fn.extend({lunbo:lunbo})
       lunbo()
  })(jQuery)
