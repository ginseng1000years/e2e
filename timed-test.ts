import { exec } from 'child_process';

const start = Date.now();
const child = exec('npm run test', (error, stdout, stderr) => {
  const end = Date.now();
  const seconds = ((end - start) / 1000).toFixed(2);
  console.log(stdout);
  if (stderr) console.error(stderr);
  if (error) console.error(error);
  console.log(`Total test time: ${seconds} seconds`);
}); 