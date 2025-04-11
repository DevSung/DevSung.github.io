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

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        unoptimized: true, // 이미지 정상적으로 불러올 수 있도록함
    },
    compiler: {
        styledComponents: true, // styled-components 사용 시 컴파일러에 추가
    },
}

module.exports = {
    assetPrefix: ".",
};

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
