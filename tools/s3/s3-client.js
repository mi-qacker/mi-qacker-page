import {S3Client} from '@aws-sdk/client-s3';
import {ENDPOINT, REGION} from './variables.js';

const s3Client = new S3Client({region: REGION, endpoint: ENDPOINT});

export {s3Client};
