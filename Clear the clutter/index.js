import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "D:\\JS fun challenges\\Clear the clutter";

let files = await fs.readdir(basepath);

for (const item of files) {
  console.log("running for ", item);
  // Get the extension of the file
  let ext = item.split(".")[item.split(".").length - 1];

  // Filtering Files to Organize and excluding the .js and .json files
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basepath, ext))) {
      // Move the file to this directory if its not a js or json file
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
      
    } else {
      fs.mkdir(ext); // Create new directory if it doesn't exist
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    }
  }
}
