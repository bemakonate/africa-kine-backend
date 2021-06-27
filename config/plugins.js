module.exports = ({ env }) => ({
    upload: {
        provider: 'aws-s3-plus-cdn',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            endpoint: env('AWS_ENDPOINT'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: 'nyc3',
            params: {
                Bucket: 'africakine',
                ACL: 'public-read'
            },
            cdnUrl: env("AWS_CDN"),
        },
    },
});



