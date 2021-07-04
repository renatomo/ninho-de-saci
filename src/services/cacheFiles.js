const cacheFiles = async (srcArray, callback, callbackParams) => {
  const promises = await srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const extension = src.split('.').slice(-1)[0]
      const file = extension === 'mp3' ? new Audio() : new Image();
      file.onload = resolve();
      file.onerror = reject();
    });
  });

  await Promise.all(promises);
  callback(callbackParams);
};

export default cacheFiles;
