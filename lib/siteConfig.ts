const dev = process.env.NODE_ENV !== 'production';
const basePath = dev ? 'http://localhost:3000' : process.env.PRODUCTION_URL;

export default basePath;
