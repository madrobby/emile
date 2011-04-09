!function () {
  var e = emile.noConflict();
  $.augment({
    animate: function (o, after) {
      for (var i = 0; i < this.elements.length; i++) {
        e(this.elements[i], o, after);
      }
      return this;
    }
  }, true);
}();