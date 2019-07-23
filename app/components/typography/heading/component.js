import Component from '@ember/component';
import styles from 'ember-sandbox/components/typography/heading/styles';

export default Component.extend({
  classNames: styles.heading,
  init() {
    this._super(...arguments);
    this.tagName = `h${this.level}`
  },
});