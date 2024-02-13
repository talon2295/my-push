#!/usr/bin/env node

import { f } from ".";

function main() {
	f("Delafia");
}

if (require.main === module) {
	main();
}
