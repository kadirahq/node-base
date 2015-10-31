require('babel/register')({
  optional: ['runtime', 'es7.asyncFunctions']
});

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});
