import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    var self = this;
    this._super(...arguments);
    var initData = this.get('data-list').toArray();
    var jsonArray = [];
    for (var i = 0 ; i < initData.length; i++) {
      var ele = initData[i].toJSON();
      ele.id = initData[i].get('id');
      jsonArray.push(ele);
    }
    $(this.$()).puidatatable({
      columns: [
        {field: 'name', headerText: 'Name'},
        {field: 'owner', headerText: 'Owner'},
        {field: 'description', headerText: 'Description'}
      ],
      datasource:jsonArray,
      selectionMode: 'single',
      rowSelect: function(event, data) {
        self.get("row-select")(data.id);
      }
    });
  }
});
