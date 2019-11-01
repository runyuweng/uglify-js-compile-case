var fn,
  data,
  api = { getDataV1: function() {}, getDataV2: function() {} };
(data =
  1 === typeId
    ? ((fn = api.getDataV1), { id: 1 })
    : ((fn = api.getDataV2), { id: 2 })),
  fn(data);
