import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    rowSelect(id) {
      // console.debug("abc: " + id);
      alert("abc:" + id);
    }
  }
});
