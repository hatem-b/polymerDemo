!function(t){function e(e,r,i,n){var o=t();return t.each(a,function(t,a){if(a.height()>0){var l=a.offset().top,c=a.offset().left,s=c+a.width(),u=l+a.height(),f=!(c>r||s<n||l>i||u<e);f&&o.push(a)}}),o}function r(){++s;var r=o.scrollTop(),i=o.scrollLeft(),n=i+o.width(),a=r+o.height(),c=e(r+u.top+200,n+u.right,a+u.bottom,i+u.left);t.each(c,function(t,e){var r=e.data("scrollSpy:ticks");"number"!=typeof r&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",s)}),t.each(l,function(t,e){var r=e.data("scrollSpy:ticks");"number"==typeof r&&r!==s&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),l=c}function i(){o.trigger("scrollSpy:winSize")}function n(t,e,r){var i,n,o,a=null,l=0;r||(r={});var c=function(){l=r.leading===!1?0:f(),a=null,o=t.apply(i,n),i=n=null};return function(){var s=f();l||r.leading!==!1||(l=s);var u=e-(s-l);return i=this,n=arguments,u<=0?(clearTimeout(a),a=null,l=s,o=t.apply(i,n),i=n=null):a||r.trailing===!1||(a=setTimeout(c,u)),o}}var o=t(window),a=[],l=[],c=!1,s=0,u={top:0,right:0,bottom:0,left:0},f=Date.now||function(){return(new Date).getTime()};t.scrollSpy=function(e,i){var l=[];e=t(e),e.each(function(e,r){a.push(t(r)),t(r).data("scrollSpy:id",e),t('a[href="#'+t(r).attr("id")+'"]').click(function(e){e.preventDefault();var r=t(this.hash).offset().top+1;t("html, body").animate({scrollTop:r-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),i=i||{throttle:100},u.top=i.offsetTop||0,u.right=i.offsetRight||0,u.bottom=i.offsetBottom||0,u.left=i.offsetLeft||0;var s=n(r,i.throttle||100),f=function(){t(document).ready(s)};return c||(o.on("scroll",f),o.on("resize",f),c=!0),setTimeout(f,0),e.on("scrollSpy:enter",function(){l=t.grep(l,function(t){return 0!=t.height()});var e=t(this);l[0]?(t('a[href="#'+l[0].attr("id")+'"]').removeClass("active"),e.data("scrollSpy:id")<l[0].data("scrollSpy:id")?l.unshift(t(this)):l.push(t(this))):l.push(t(this)),t('a[href="#'+l[0].attr("id")+'"]').addClass("active")}),e.on("scrollSpy:exit",function(){if(l=t.grep(l,function(t){return 0!=t.height()}),l[0]){t('a[href="#'+l[0].attr("id")+'"]').removeClass("active");var e=t(this);l=t.grep(l,function(t){return t.attr("id")!=e.attr("id")}),l[0]&&t('a[href="#'+l[0].attr("id")+'"]').addClass("active")}}),e},t.winSizeSpy=function(e){return t.winSizeSpy=function(){return o},e=e||{throttle:100},o.on("resize",n(i,e.throttle||100))},t.fn.scrollSpy=function(e){return t.scrollSpy(t(this),e)}}(jQuery);