import cron from 'node-cron';
import { runAllMonitors } from '../src/services/MonitoringService';

console.log('Monitoring worker started.');

cron.schedule('* * * * *', async () => {
  try {
    console.log(`[${new Date().toISOString()}] Running all monitors...`);
    await runAllMonitors();
    console.log('Monitor checks complete.');
  } catch (err) {
    console.error('Error running monitors:', err);
  }
}); 