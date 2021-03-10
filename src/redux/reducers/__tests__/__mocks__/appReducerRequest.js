export default function appReducerRequest(networkError) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      networkError
        ? reject({ error: 404 })
        : resolve({ error: null, totalPages: 3500 });
    });
  });
}
