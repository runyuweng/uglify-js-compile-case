**Bug report or feature request?**
use collapse_vars causes compiled code logic changes

**Uglify version (`uglifyjs -V`)**
3.6.5

**JavaScript input**
```
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
```

**The `uglifyjs` CLI command executed or `minify()` options used.**
```
{
  mangle: true,
  compress: {}
}
```

**JavaScript output or error produced.**
```
var fn,
  data,
  api = { getDataV1: function() {}, getDataV2: function() {} };
fn(
  (data =
    1 === typeId
      ? ((fn = api.getDataV1), { id: 1 })
      : ((fn = api.getDataV2), { id: 2 }))
);
```

**JavaScript output when set collapse_vars fasle.**
```
var fn,
  data,
  api = { getDataV1: function() {}, getDataV2: function() {} };
(data =
  1 === typeId
    ? ((fn = api.getDataV1), { id: 1 })
    : ((fn = api.getDataV2), { id: 2 })),
  fn(data);
```

**demo url**
https://github.com/runyuweng/uglify-js-compile-case