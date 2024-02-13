#!/usr/bin/env node

import { hasPackageJson } from "./lib/findFiles";
import logger from "./lib/logger";

function main() {
	if (!hasPackageJson) {
		logger.error(new Error("No package.json found"), "Run this module on the root of your project");
		process.exit(1);
	}
	var args = process.argv.slice(2);
    console.log(args) ;
    process.exit(0) ;

	// Validate input
	if (args.length !== 2) {
		console.log("Warning: Requires 2 arguments");
		console.log("node index.js [path/source.html] [targetfile]");
		process.exit();
	}

	const src = args[0];
	const target = args[1];
}

if (require.main === module) {
	main();
}
