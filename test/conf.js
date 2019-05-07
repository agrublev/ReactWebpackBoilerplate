exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://app.freedcamp.chat',
  specs: ['spec.js'],
  capabilities: {browserName: 'chrome'},
  onPrepare: function(){
    browser.driver.get('https://app.freedcamp.chat');

    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return url != 'https://app.freedcamp.chat';});
    }, 10000, 'Error');
  }
}
