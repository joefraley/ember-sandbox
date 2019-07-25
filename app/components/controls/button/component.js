import Component from '@ember/component';

export default Component.extend({
  onClick: null,
  kind: null,
  tagName: 'button',
  attributeBindings: ['onClick:onclick'],
  classNameBindings: ['kind']
});