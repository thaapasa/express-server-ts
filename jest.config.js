const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },	
  transformIgnorePatterns: [	
    "node_modules/(?!(@?react-native.*|@?react-navigation.*|react|shared)/)"
  ],
  testURL: "http://localhost:3500"
}
