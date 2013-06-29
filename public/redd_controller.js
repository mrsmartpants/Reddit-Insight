Redd.Controller = Backbone.View.extend({
  initialize: function() {
    // this.navBar.setElement(this.$('.navBar'));
    console.log('in controller');
    this.navbar    = new Redd.Views.Navbar();
    this.index     = new Redd.Views.Index();
    this.trackpost = new Redd.Views.TrackPost({model: new Redd.Models.TrackPost(), collection: new Redd.Collections.Posts()});
    this.trackuser = new Redd.Views.TrackUser({model: new Redd.Models.TrackUser()});
    this.dashboard = new Redd.Views.Dashboard();
  },
  el: 'html',
  show: function(action) {
    this[action].render();
    $('#'+action).show();
    return this;
  },
  hide: function() {
    $('section').hide();
    return this;
  }
});
