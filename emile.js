// emile.js (c) 2009 Thomas Fuchs
// Licensed under the terms of the MIT license.

(function(emile, container){
  var parseEl = document.createElement('div'),
    IE = !!window.attachEvent && !window.opera,
    props = ('backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth '+
    'borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize '+
    'fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight '+
    'maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft '+
    'paddingRight paddingTop right textIndent top width wordSpacing zIndex').split(' '),
    handlers = { 
      opacity: function(el,v){
        if(IE){
          var s = el.style, f = el.currentStyle.filter;
          if(v==1){ f = f.replace(/alpha\([^\)]*\)/gi,'') ? s.filter = f : s.removeAttribute('filter'); return; }
          if(!el.currentStyle.hasLayout) s.zoom = 1;
          s.filter = f.replace(/alpha\([^\)]*\)/gi,'')+'alpha(opacity='+((v<0.001 ? 0 : v) * 100)+')';
        } else s.opacity = v.toFixed(3);
      }};

  function parse(value){
    var v = parseFloat(value), u = value.replace(/^[\d\.]+/,'');
    return { value: isNaN(v) ? u : v, unit: isNaN(v) ? 'color' : u };
  }

  function normalize(style){
    var css, rules = {}, i = props.length, v;
    parseEl.innerHTML = '<div style="'+style+'"></div>';
    css = parseEl.childNodes[0].style;
    while(i--) if(v = css[props[i]]) rules[props[i]] = parse(v);
    return rules;
  }

  function s(str, p, c){ return str.substr(p,c||1); }
  function color(source,target,pos){
    var i = 2, j, c, tmp, v = [], r = [];
    while(j=3,c=arguments[i-1],i--)
      if(s(c,0)=='r') { 
        c = c.match(/\d+/g); while(j--) v.push(~~c[j]); 
      } else {
        if(c.length==4) c='#'+s(c,1)+s(c,1)+s(c,2)+s(c,2)+s(c,3)+s(c,3);
        while(j--) v.push(parseInt(s(c,1+j*2,2), 16));
      }
    while(j--) { tmp = ~~(v[j+3]+(v[j]-v[j+3])*pos); r.push(tmp<0?0:tmp>255?255:tmp); }
    return 'rgb('+r.join(',')+')';
  }

  container[emile] = function(el, style, opts){
    el = typeof el == 'string' ? document.getElementById(el) : el;
    opts = opts || {};
    var target = normalize(style), comp = el.currentStyle || getComputedStyle(el, null),
      prop, current = {}, start = +new Date, dur = opts.duration||200, finish = start+dur, interval,
      easing = opts.easing || function(pos){ return (-Math.cos(pos*Math.PI)/2) + 0.5; };
    for(prop in target) current[prop] = parse(comp[prop]);
    interval = setInterval(function(){
      var time = +new Date, pos = time>finish ? 1 : (time-start)/dur;
      for(prop in target) 
        if(prop in handlers) 
          handlers[prop](el, (current[prop].value+(target[prop].value-current[prop].value)*easing(pos)));
        else
          el.style[prop] = target[prop].unit == 'color' ?
            color(current[prop].value,target[prop].value,easing(pos)) :
            (current[prop].value+(target[prop].value-current[prop].value)*easing(pos)).toFixed(3) + target[prop].unit;
      if(time>finish) { clearInterval(interval); opts.after && opts.after(); }
    },10);
  }
})('emile', this);