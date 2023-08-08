"use strict";
const fsP = require("fs/promises");

const filepath = process.argv[2];

/** This function takes one argument, filepath,
 * and it reads the file with that path,
 * and prints the contents of that file. */

async function cat(filepath) {

  try {

    const content = await fsP.readFile(filepath, 'utf8');
    console.log(content);

  } catch { // catch(error)

    console.log(`Error reading ${filepath}`);
    console.log(`Error: ENOENT: no such file or directory, open '${filepath}'`);

    process.exit(1);

  }

}

cat(filepath);