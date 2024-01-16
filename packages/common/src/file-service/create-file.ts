import fs from "fs";
import path from "path";

export const createFile = (
  fileName: string,
  directory: string,
  data: string | NodeJS.ArrayBufferView
) => {
  const dir = path.join(process.cwd(), directory);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    fs.writeFileSync(`${dir}/${fileName}`, data, "utf8");
  } catch (error) {
    console.error(`Error | Could not write file on path ${dir}/${fileName}`);
    console.error(error);
  }
};
