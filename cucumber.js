module.exports = {
    default: {
      require: [
        process.env.CUCUMBER_REQUIRE || 'features/step-definitions/**/*.ts',
        'support/**/*.ts'
      ],
      requireModule: ['ts-node/register'],
      format: [process.env.CUCUMBER_FORMAT || 'progress'],
      paths: [process.env.CUCUMBER_PATHS || 'features/**/*.feature'],
      parallel: process.env.CUCUMBER_PARALLEL ? Number(process.env.CUCUMBER_PARALLEL) : 1
    }
  };
  