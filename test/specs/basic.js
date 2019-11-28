const assert = require('assert');

describe('New webmail page', function(){
    it("New webmail page", function() {
        browser.url("https://webmail.ffos.hr/");
        browser.pause(5000);
        $("#rcmloginuser").setValue("bungar");
        $("#rcmloginpwd").setValue("3jPsXdat");
        $("#rcmloginsubmit").click();
        browser.pause(5000);
        browser.getTitle();
    });   
});
