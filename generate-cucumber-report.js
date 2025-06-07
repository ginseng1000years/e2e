const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './reports', // Directory with JSON files
  reportPath: './cucumber-html-report', // Output directory for HTML report
  metadata: {
    browser: {
      name: 'chrome',
      version: 'XX',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10',
    },
  },
}); 