import fs from "fs";
import path from "path";

export function checkForFile(fileName: string, baseFolder: string = "./") {
	return fs.existsSync(path.join(baseFolder, fileName));
}

const hasPackageJson = checkForFile("package.json");

export { hasPackageJson };
