import { S3, ListObjectsCommand, PutObjectCommand, S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

class S3Service {
    s3: S3;
    bucketName: string;
    urlPrefix: string;

    constructor() {}

    initialize(urlPrefix, key, secret, region) {
        let config: S3ClientConfig = {
            region,
            credentials: {
                accessKeyId: key,
                secretAccessKey: secret
            }
        };
        this.urlPrefix = urlPrefix;
        this.bucketName = "mint-talent-tracker"
        // this.s3 = new S3Client(config);
        this.s3 = new S3(config);
        console.log('Initialized s3')
    }

    async getArtistPhotos(artistName: string) {
        try {
            let uploadParams = {
                Key: encodeURIComponent(artistName) + '/',
                Bucket: this.bucketName,
              }
            const data = await this.s3.listObjects(uploadParams);
            return data;
        } catch (error) {
            console.log('[S3.Service]', error)
        }
    }

    async getPhoto(key: string) {
        try {
            let uploadParams = {
                Key: key,
                Bucket: this.bucketName,
              }
            const data = await this.s3.getObject(uploadParams);
            console.log('data is...')
            console.log(data)
        } catch (error) {
            console.log('[S3.Service]', error)
        }
    }

    async uploadPhoto(file: any, artistName: string) {
        try {
            let uploadParams = {
                Bucket: this.bucketName,
                Key: encodeURIComponent(artistName) + '/' + file.originalname,
                Body: file.buffer,
                ContentType: file.mimetype
            }
            await this.s3.putObject(uploadParams);
            return this.urlPrefix + uploadParams.Key;
        } catch (error) {
            console.log('[S3.Service]', error)
        }
    }

    uploadFile(buff: Buffer) {

    }

    getFile(id: string) {

    }

}

export const s3Service = new S3Service();