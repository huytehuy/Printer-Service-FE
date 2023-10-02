export default function randomId() {
  const byte = new Uint8Array(16);
  return crypto.getRandomValues(byte);
}
