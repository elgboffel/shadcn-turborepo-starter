import fs from "fs";
import path from "path";

export const getFile = (relativePath: string) => {
  const dir = path.join(process.cwd(), relativePath);
  let data;

  if (!fs.existsSync(dir)) return null;

  try {
    data = JSON.parse(fs.readFileSync(dir, "utf8"));
  } catch (error) {
    console.error(`ERROR | File not initialized on path ${dir}`);
    return null;
  }

  return data;
};
