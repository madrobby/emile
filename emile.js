// emile.js (c) 2009 Thomas Fuchs
// Licensed under the terms of the MIT license.

(function(emile, object){
  var fx = [], parseEl = document.createElement('div'),
    props = ('backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth '+
    'borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize '+
    'fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight '+
    'maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft '+
    'paddingRight paddingTop right textIndent top width wordSpacing zIndex').split(' ');
  
  function $(element){
    return typeof element == 'string' ?
      document.getElementById(element) : element;
  }

  function css(element){
    return element.currrentStyle ? element.currentStyle :
      document.defaultView.getComputedStyle(element, null);
  }

  function frame(){
    var i = fx.length, prop;
    while(--i)
      for(prop in fx[i].target)
        fx[i].element.style.cssText += ';' + fx[i].target
  }
  
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

  function anim(element, style, options){
    element = $(element);
    var target = normalize(style);
    var c = css(element), prop, current = {};
    for(prop in target) current[prop] = parse(c[prop]);
    fx.push({ element: element, current: current, target: target });
    frame();
  }

  (object||window)[emile] = { anim: anim };
})('emile');