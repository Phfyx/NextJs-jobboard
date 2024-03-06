/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "jwsrpnyiujmgdnul.public.blob.vercel-storage.com",
            }
        ]
    }
};

export default nextConfig;
