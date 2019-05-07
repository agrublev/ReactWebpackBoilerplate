describe('Describe Protractor Example', function(){

  it('Should navigate to protractortest.org', function(){

    element(by.linkText('Tutorial')).click();
    element(by.xpath('//*[@id="tutorial"]')).getText().then(function(value){expect(value).toBe('Tutorial');});
    element(by.css('asd')).click();
    
  });

});
