function generateRandomEmail() {
  const timestamp = Date.now();
  return `testuser_${timestamp}_${Math.floor(Math.random() * 1000)}@mailinator.com`;
}

module.exports = { generateRandomEmail };