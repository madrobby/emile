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

    emile(element, options, after)

**Parameters**

   * element (id | element) - element to which the animation will be applied
   * options (object) - style properties which will be applied after the animation is finished
      * for some properties you'll need to define defaults on your page's css
      * duration (Number) - duration of the animation in milliseconds
      * after (Function) - a function which will be executed after the animation is finished
      * easing (Function) - easing function for the animation. Receives one argument pos which indicates position in time between animation's start and end
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

### License ###

Émile is is licensed under the terms of the MIT License, see the included MIT-LICENSE file.
Émile borrows its name from <http://en.wikipedia.org/wiki/Émile_Cohl>.

### Contributors ###
* [Thomas Fuchs](https://github.com/madrobby/emile/commits/master?author=madrobby)
* [Dustin Diaz](https://github.com/madrobby/emile/commits/master?author=ded)