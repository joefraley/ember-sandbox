import Component from '@ember/component';
import styles from 'ember-sandbox/components/layout/row/styles';

export default Component.extend({
  tagName: 'div',
  classNames: styles.row,
  full: false,
  init() {
    this._super(...arguments);
    this.classNames = [...this.classNames, this.full ? styles.full : '']
  }
});