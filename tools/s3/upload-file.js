import {PutObjectCommand} from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';
import {s3Client} from './s3-client.js';
import {BUCKET_NAME} from './variables.js';

/**
 * Upload file to S3 bucket
 * @param {string} filePath - the path to the uploaded file
 * @param {string} key - key for params
 */
export async function uploadFile(filePath, key) {
	const fileStream = fs.createReadStream(filePath);

	// File Upload params
	const params = {
		Bucket: BUCKET_NAME,
		Key: key,
		Body: fileStream,
		ContentType: getContentType(filePath),
	};

	try {
		await s3Client.send(new PutObjectCommand(params));
		console.log(`Successfully uploaded ${filePath} to ${BUCKET_NAME}/${key}`);
	} catch (err) {
		console.error(`Error uploading ${filePath}: `, err);
	}
}

/**
 * Get `content-type` by file ext
 * @param {string} fileName
 * @returns {string | undefined}
 */
function getContentType(fileName) {
	const ext = path.extname(fileName).toLowerCase();

	const mimeTypes = {
		'.html': 'text/html',
		'.css': 'text/css',
		'.js': 'application/javascript',
		'.json': 'application/json',
		'.png': 'image/png',
		'.jpg': 'image/jpeg',
		'.gif': 'image/gif',
		'.svg': 'image/svg+xml',
		'.ico': 'image/x-icon',
		'.txt': 'text/plain',
		'.pdf': 'application/pdf',
	};

	return mimeTypes[ext] || undefined;
}
