"use strict";
const axios = require("axios");
const fsP = require("fs/promises");


const filepath = process.argv[2];

/** This function takes one argument, filepath,
 * and it reads the file with that path,
 * and prints the contents of that file. */

async function cat(filepath) {

  try {

    const content = await fsP.readFile(filepath, 'utf8');
    console.log(content);

  } catch (err) {

    // console.log(err.response)
    // console.log(err.cause.Error)
    // console.log(`Error reading ${filepath}`);
    // console.log(`Error: ENOENT: no such file or directory, open '${filepath}'`);

    process.exit(1);
  }
}


async function webCat(url){
  try{
    const response = await axios.get(url);
    console.log(response)
  } catch (err) {
    console.log(`Error fetching ${url}`)
    console.log(err.message)
    // console.log(err.cause)

    // console.log(`Error reading ${filepath}`);
    // console.log(`Error: ENOENT: get request to '${filepath}' failed`);

    process.exit(1);
  }
}

// cat(filepath);
webCat(filepath)