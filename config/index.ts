const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://app.zeeven.chillo.fr';
export const backend = dev ? 'http://localhost:8087' : 'https://api.zeeven.chillo.fr';
