Émile
=====

#### Stand-alone CSS animation JavaScript mini-framework ####

* Doesn't need a JavaScript framework
* Full set of CSS properties for animation (length-based and colors)
* Easing and callbacks
* Less than 50 lines of code

Get updates on Twitter: <http://twitter.com/emilejs>

Also see the video of my presentation at Fronteers 2009:
<http://fronteers.nl/congres/2009/sessions/roll-your-own-effects-framework>

### Targeted platforms ###

Émile currently targets the following platforms:

* Microsoft Internet Explorer for Windows, version 6.0 and higher
* Mozilla Firefox 1.5 and higher
* Apple Safari 2.0.4 and higher
* Opera 9.25 and higher
* Chrome 1.0 and higher

### Documentation ###

One method:

    emile(element, style, options, after)

**Parameters**

   * element (id | element) - element to which the animation will be applied
   * style (String) - style which will be applied after the animation is finished
      * for some properties you'll need to define defaults on your page's css
   * options (Object) - optional; the following options are available
      * duration (Number) - duration of the animation in milliseconds
      * after (Function) - a function which will be executed after the animation is finished
      * easing (Function) - easing function for the animation. Receives one argument pos which indicates position in time between animation's start and end
   * after (Function) - optional; a callback that will be excuted after everything is done (in addition to options.after)

### License ###

Émile is is licensed under the terms of the MIT License, see the included MIT-LICENSE file.
Émile borrows its name from <http://en.wikipedia.org/wiki/Émile_Cohl>.
