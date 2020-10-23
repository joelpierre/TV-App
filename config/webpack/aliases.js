const path = require("path");

const aliases = {
  "sass": path.resolve(__dirname, "../../src/assets/sass"),
  "@atoms": path.resolve(__dirname, "../../src/components/_atoms"),
  "@molecules": path.resolve(__dirname, "../../src/components/_molecules"),
  "@organisms": path.resolve(__dirname, "../../src/components/_organisms"),
  "@shared": path.resolve(__dirname, "../../src/components/_shared"),
  "@templates": path.resolve(__dirname, "../../src/components/_templates"),
  "@layouts": path.resolve(__dirname, "../../src/layouts"),
  "@hooks": path.resolve(__dirname, "../../src/hooks"),
  "common/types": path.resolve(__dirname, "../../src/types"),
  "common/utils": path.resolve(__dirname, "../../src/utils"),
  "test-utils": path.resolve(__dirname, "../../src/utils/tests")
};

module.exports = aliases;
