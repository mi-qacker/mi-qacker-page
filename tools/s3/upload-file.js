import {PutObjectCommand} from '@aws-sdk/client-s3';
import fs from 'fs';
import {s3Client} from './s3-client.js';
import {BUCKET_NAME} from './variables.js';

/**
 * Upload file to S3 bucket
 * @param {string} filePath - the path to the uploaded file
 * @param {string} key - key for params
 */
export async function uploadFile(filePath, key) {
	const fileStream = fs.createReadStream(filePath);

	// Параметры для загрузки файла
	const params = {
		Bucket: BUCKET_NAME,
		Key: key,
		Body: fileStream,
	};

	try {
		await s3Client.send(new PutObjectCommand(params));
		console.log(`Successfully uploaded ${filePath} to ${BUCKET_NAME}/${key}`);
	} catch (err) {
		console.error(`Error uploading ${filePath}: `, err);
	}
}
