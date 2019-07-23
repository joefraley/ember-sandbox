import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {name: 'Joe', age: 30, favorite_cd: 'Where the Light Is'},
      {name: 'Amanda', age: 30, favorite_cd: 'Room for Squares'}
    ]
  }
})