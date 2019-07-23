import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['user_id'],
  user_id: null,
  content: '',
  title: '',
  handleChange(key, args) {
    const event = args.slice(-1)[0] ;
    this.set(key, event.target.value)
    event.preventDefault();
  },
  handleTitle(...args) {
    this.handleChange('title', args);
  },
  handleContent(...args) {
    this.handleChange('content', args);
  }
})