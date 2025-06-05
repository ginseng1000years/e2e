module.exports = {
    default: {
      require: [
        'features/step-definitions/**/*.ts',
        'support/**/*.ts'
      ],
      requireModule: ['ts-node/register'],
      format: ['progress'],
      paths: ['features/**/*.feature'],
      parallel: 1
    }
  };
  