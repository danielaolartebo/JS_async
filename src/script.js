function mocker(data) {
    return function() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1000); // Simulating 1 second delay
      });
    };
}
  
module.exports = mocker;
  
  