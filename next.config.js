const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
        prependData: `@import "./variables/index.scss";`,
    },
};

module.exports = nextConfig;
