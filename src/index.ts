import Minizip from "minizip-asm.js";
import fs from "fs";

/// CREATING ZIP

var mz1 = new Minizip();
var text = Buffer.from("Abc~~~");

mz1.append("haha/abc.txt", text, { password: "~~~" });
mz1.append("haha/cde.txt", text, { password: "abc" });
fs.writeFileSync("abc.zip", Buffer.from(mz1.zip()));
console.info("zip created");

/// LISTING FILES
let data = fs.readFileSync("abc.zip");
var mz2 = new Minizip(Buffer.from(data));
console.info(mz2.list());

/// Extracting
let xdata = mz2.extract("haha/abc.txt", { password: "~~~" });
console.info("extracted_data:", xdata.toString());
