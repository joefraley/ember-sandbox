import Controller from '@ember/controller';
import songs from 'ember-sandbox/data/songs';

export default Controller.extend({
  queryParams: ['user_id'],
  user_id: null,
  handleClick(...args) {
    const event = args.slice(-1)[0] ;
    alert(JSON.stringify(args));
    event.preventDefault();
  },
  songs
})