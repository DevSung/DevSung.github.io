let userConfig = undefined
try {
    // try to import ESM first
    userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
    try {
        // fallback to CJS import
        userConfig = await import("./v0-user-next.config");
    } catch (innerError) {
        // ignore error
    }
}

const debug = process.env.NODE_ENV !== "production";
const repository = "https://DevSung.github.io";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
    trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
}

if (userConfig) {
    // ESM imports will have a "default" property
    const config = userConfig.default || userConfig

    for (const key in config) {
        if (
            typeof nextConfig[key] === 'object' &&
            !Array.isArray(nextConfig[key])
        ) {
            nextConfig[key] = {
                ...nextConfig[key],
                ...config[key],
            }
        } else {
            nextConfig[key] = config[key]
        }
    }
}

export default nextConfig
