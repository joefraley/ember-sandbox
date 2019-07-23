import Component from '@ember/component';
import styles from 'ember-sandbox/components/controls/button/styles';

export default Component.extend({
  onClick: null,
  kind: null,
  tagName: 'button',
  attributeBindings: ['onClick:onclick'],
  classNames: [styles.button],
  init() {
    this._super(...arguments);
    this.classNames = [...this.classNames, styles[this.kind]]
  }
});