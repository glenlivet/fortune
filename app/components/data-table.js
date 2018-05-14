import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    let initData = this.get('data-list').toJSON();
    this.$().puidatatable({
      columns: [
        {field: 'name', headerText: 'Name'},
        {field: 'owner', headerText: 'Owner'},
        {field: 'description', headerText: 'Description'}
      ],
      datasource:initData
    });
  }
});
