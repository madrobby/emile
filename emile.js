// emile.js (c) 2009 Thomas Fuchs
// Licensed under the terms of the MIT license.

(function(emile, object){
  var parseEl = document.createElement('div'),
    props = ('backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth '+
    'borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize '+
    'fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight '+
    'maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft '+
    'paddingRight paddingTop right textIndent top width wordSpacing zIndex').split(' ');

  function parse(value){
    var v = parseFloat(value), u = value.replace(/\d/g,'');
    return { value: isNaN(v) ? u : v, unit: isNaN(v) ? 'color' : u };
  }

  function normalize(style){
    var css, rules = {}, i, v;
    parseEl.innerHTML = '<div style="'+style+'"></div>';
    css = parseEl.childNodes[0].style;
    for(i=0;i<props.length;i++) 
      if(v = css[props[i]]) rules[props[i]] = parse(v);
    return rules;
  }
  
  (object||window)[emile] = function(el, style, opts){
    el = typeof el == 'string' ? document.getElementById(el) : el;
    opts = opts || {};
    var target = normalize(style), comp = el.currentStyle ? el.currentStyle : document.defaultView.getComputedStyle(el, null),
      prop, current = {}, start = (new Date).getTime(), dur = opts.duration||200, finish = start+dur, interval;
    for(prop in target) current[prop] = parse(comp[prop]);
    interval = setInterval(function(){
      var time = (new Date).getTime(), delta = time>finish ? 1 : (time-start)/dur;
      for(prop in target)
        if(target[prop].unit == 'color') {
          // todo
        } else
          el.style[prop] = (current[prop].value+(target[prop].value-current[prop].value)*delta).toFixed(3) + target[prop].unit;
      time>finish && clearInterval(interval) || opts.after && opts.after();
    },10);
  }
})('emile');
