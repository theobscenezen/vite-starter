module.exports = {
  rules: {
    'declaration-no-important': null,
    'selector-no-vendor-prefix': [true, {
      ignoreSelectors: ['::-moz-selection', '::-webkit-input-placeholder'],
    }],
    'selector-max-id': 2,
    'selector-max-type': 5,
    'selector-max-class': 6,
    'selector-max-attribute': 2,
    'selector-max-pseudo-class': 5,
    'selector-max-compound-selectors': 7,
    'max-line-length': 230,
  },
  "at-rule-no-unknown": [
    true,
    {
      "ignoreAtRules": [
        "extends",
        "apply",
        "tailwind",
        "components",
        "utilities",
        "screen",
      ],
    },
  ],
};
