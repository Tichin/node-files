"use strict";
const axios = require("axios");
const fsP = require("fs/promises");


const filepathOrUrl = process.argv[2];

/** This function takes one argument, filepath,
 * and it reads the file with that path,
 * and prints the contents of that file. */

async function cat(filepath) {

  try {

    const content = await fsP.readFile(filepath, 'utf8');
    console.log(content);

  } catch (err) {

    //console.log(err)
    console.log(`Error reading ${filepath}`);
    console.log(`Error: ENOENT: no such file or directory, open '${filepath}'`);

    process.exit(1);
  }
}

/** This function takes one argument, url,
 * and it makes a get request to the url,
 * and prints the contents of that page. */

async function webCat(url) {
  try {

    const response = await axios.get(url);
    console.log(response.data);

  } catch (err) {

    console.log(`Error fetching ${url}`);
    console.log(`Error: ${err.message}`);

    process.exit(1);
  }
}

/** This function takes an argument and
 * it decides whether the argument is a file path or a URL
 * and calls either cat or webCat, respectively.*/

async function doCatOrWebCat(filepathOrUrl) {

  let isUrl = true;

  try {
    const url = new URL(filepathOrUrl);
  } catch {
    isUrl = false;

  }

  if (isUrl) {
    await webCat(url);
  } else {
    await cat(url);
  }

}

doCatOrWebCat(filepathOrUrl);

