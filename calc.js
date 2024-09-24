const { exec } = require('child_process');

// Use the exec function to run the 'calc' command (Windows Calculator)
exec('c:\\windows\\system32\\calc.exe', (err) => {
  if (err) {
    console.error('Failed to open Calculator:', err);
  } else {
    console.log('Calculator opened successfully!');
  }
});
