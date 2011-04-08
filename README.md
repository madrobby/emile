Émile
=====

## A Stand-alone JavaScript CSS animation mini-framework ##

* Doesn't need a JavaScript framework
* Full set of CSS properties for animation (length-based and colors)
* Easing and callbacks
* uses native CSS transitions for hardware acceleration when available
* tiny 1.6k

[Follow Émile](http://twitter.com/emilejs) on Twitter and see the [introduction video](http://fronteers.nl/congres/2009/sessions/roll-your-own-effects-framework) of Émile from Fronteers 2009.

### Browser Support ###

Émile currently targets the following platforms:

* IE 6, 7, 8, 9
* Firefox 1.5, 2, 3, 4
* Safari 2, 3, 4, 5
* Opera 9, 10, 11
* Chrome 1 - 10

### Documentation ###

One method:

    emile(element, options, after)

**Parameters**

   * element (id | element) - element to which the animation will be applied
   * options (object) - style properties which will be applied after the animation is finished
      * for some properties you'll need to define defaults on your page's css
      * duration (Number) - duration of the animation in milliseconds
      * after (Function) - a function which will be executed after the animation is finished
      * easing (Function|String) - easing function for the animation. Receives one argument pos which indicates position in time between animation's start and end. Note that easing functions will bypass the native CSS-transitions.
   * after (Function) - optional; a callback that will be excuted after everything is done (in addition to options.after)

### Example ###

    emile('example', {
      left: 100,
      opacity: 1,
      duration: 500,
      easing: easeFn,
      after: function () {
        console.log('done!');
      }
    });

### Building ###

Building Émile requires GNU 'make' and [Node.js](http://nodejs.org) to run the [JSHint](http://jshint.com) linter and [Uglify](https://github.com/mishoo/UglifyJS) compiler. It's then quite simple:

    git clone git://github.com/madrobby/emile.git
    cd emmile
    git submodule update --init
    make

### Tests ###

    open tests/emile.html

### License ###

Émile is is licensed under the terms of the MIT License, see the included MIT-LICENSE file.
Émile borrows its name from [Émile Kohl](http://en.wikipedia.org/wiki/Émile_Cohl).

### Contributors ###
* [Thomas Fuchs](https://github.com/madrobby/emile/commits/master?author=madrobby)
* [Dustin Diaz](https://github.com/madrobby/emile/commits/master?author=ded)