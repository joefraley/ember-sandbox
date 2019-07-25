import Component from '@ember/component';

export default Component.extend({
  level: 1,
  init() {
    this._super(...arguments);
    this.tagName = `h${this.level}`
  },
});