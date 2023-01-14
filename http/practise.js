const fs = require('fs');
const path = require('path');
const { resourceUsage } = require('process');


async function read() {
  const reader = await fs.createReadStream('./content/input.txt', 'utf-8');
  reader.on()
}

read()