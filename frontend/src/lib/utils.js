export function getApiBaseUrl() {
  return import.meta.env.DEV
    ? 'http://localhost:3000/api'
    : 'https://mapnosis.co/api';
}
