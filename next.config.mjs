/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev-images-carry1st-products.s3.eu-west-2.amazonaws.com'
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/products',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
