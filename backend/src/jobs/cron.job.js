// backend/src/cron/test-job.js
import cron from 'node-cron';
import { logInfo } from '../utils/logger.js';

console.log("🧪 Test Cron Job Loaded - Will run every 3 minutes");

// Run every 3 minutes
cron.schedule('*/3 * * * *', () => {
  const now = new Date().toLocaleTimeString();
  
  console.log(`[${now}] ✅ Test Cron Job Executed - Every 3 minutes!`);

  logInfo("TEST_CRON_JOB", `Cron job executed at ${now}`, {
    type: "test",
    interval: "3 minutes"
  });
});

// Optional: Run once when the server starts
console.log("🚀 Test cron job scheduled successfully!");