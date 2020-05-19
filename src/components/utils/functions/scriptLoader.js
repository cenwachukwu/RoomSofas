const newScript = () => {
  return new Promise(function (resolve, reject) {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function () {
      resolve();
    });
    script.addEventListener('error', function (e) {
      reject(e);
    });
    document.body.appendChild(script);
  });
};

export { newScript };
