var api = {
  getDataV1: function() {},
  getDataV2: function() {},
}
var fn;
var data;
if (typeId === 1) {
  fn = api.getDataV1;
  data = {id: 1};
} else {
  fn = api.getDataV2;
  data = {id: 2};
}
fn(data);