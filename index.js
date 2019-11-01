const UglifyJS = require("uglify-js")
const fs = require("fs");
const prettier = require("prettier");

const sourceCode = fs.readFileSync("./source.js", {"encoding": "utf8"})

const {code: compiledCode} = UglifyJS.minify(
  sourceCode,
  {
    mangle: true,
    compress: {
      // collapse_vars: false
    }
  });

fs.writeFileSync("./compiled.js", prettier.format(
  compiledCode,
  { parser: "babel" }
))