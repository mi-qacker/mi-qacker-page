import fs from 'fs';
import path from 'path';
import {uploadFile} from './upload-file.js';

/**
 * Recursively uploads a local folder to S3 bucket
 * @param {string} folderPath - path to the uploaded folder
 * @param {string} baseKey - base path to uploaded folder
 */
export async function uploadFolder(folderPath, baseKey = '') {
	try {
		const files = fs.readdirSync(folderPath);

		for (const file of files) {
			const filePath = path.join(folderPath, file);
			const fileStat = fs.statSync(filePath);

			if (fileStat.isFile()) {
				const fileKey = path.join(baseKey, file);
				await uploadFile(filePath, fileKey);
			} else if (fileStat.isDirectory()) {
				console.log(`Entering directory ${filePath}`);
				const directoryKey = path.join(baseKey, file);
				await uploadFolder(filePath, directoryKey);
			}
		}
		console.log('All files uploaded successfully.');
	} catch (err) {
		console.error('Error reading folder: ', err);
	}
}
