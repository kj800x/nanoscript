import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const inputDir = process.env["INPUT_DIR"] as string;
const outputDir = process.env["OUTPUT_DIR"] as string;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log("hello world");
  await sleep(5000);
  console.log("listing files in input directory");
  const files = readdirSync(inputDir);
  console.log(files);
  console.log("writing files to output directory");
  writeFileSync(join(outputDir, "file1.txt"), "hello world 1");
  writeFileSync(join(outputDir, "file2.txt"), "hello world 2");
  for (var i = 0; i < 10; i++) {
    console.log(i);
    await sleep(1000);
  }
  throw new Error("Oops!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
