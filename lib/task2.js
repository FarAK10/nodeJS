import { dirname } from "path";
import { createReadStream, createWriteStream, write } from 'fs';
import { fileURLToPath } from "url";
import path from 'path';
import csv from 'csvtojson';
import { pipeline } from "stream";
const __filename = fileURLToPath(import.meta.url);
const __diranme = dirname(__filename);
const inputPath = path.join(__diranme, 'table.csv');
const outputPath = path.join(__diranme, 'output.txt');
const reader = createReadStream(inputPath);
const writer = createWriteStream(outputPath);
pipeline(reader, csv(), writer, err => {
  console.log(err);
});