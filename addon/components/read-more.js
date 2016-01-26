import Ember from 'ember';
import layout from '../templates/components/read-more';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'read-more',
  classNameBindings: ['isOpen:is-open:is-closed'],

  isOpen: false,
  maxHeight: '200px',

  toggleClass: 'read-more-toggle',
  openText: 'Read more',
  closeText: 'Close',
  toggleText: Ember.computed('openText', 'closeText', 'isOpen', function() {
    return this.get('isOpen') ? this.get('closeText') : this.get('openText');
  }),

  bodyClass: 'read-more-body',
  bodyCss: 'overflow-y: hidden; width: 100%; display: block;',
  bodyStyle: Ember.computed('isOpen', 'maxHeight', 'bodyCss', function() {
    let styles = this.get('bodyCss');
    if (!this.get('isOpen')) {
      styles += ' max-height: ' + this.get('maxHeight') + ';';
    }
    return new Ember.Handlebars.SafeString(styles);
  }),

  actions: {
    toggle() {
      this.toggleProperty('isOpen');

      if (this.get('isOpen')) {
        this.sendAction('onOpen');
      } else {
        this.sendAction('onClose');
      }
    }
  }
});
