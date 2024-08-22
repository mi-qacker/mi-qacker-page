import path from 'path';
import {uploadFolder} from './s3/upload-folder.js';
import {BUILD_FOLDER_NAME} from './s3/variables.js';

async function main() {
	const distPath = path.resolve(import.meta.dirname, `../${BUILD_FOLDER_NAME}`);
	uploadFolder(distPath);
}

main();
