const assert = require('assert');

describe("New Webmail Page", function() {
   it("Search bar", function() {
        browser.url("https://www.amazon.com/");
        browser.pause(3000);
        $("#twotabsearchtextbox").setValue("computer games");
        $("div.nav-search-submit.nav-sprite").click();
        browser.pause(2500);
        
        browser.call(
     async () => await percySnapshot(browser, "searched products", { widths: [1280] })
       );

    });

    it("Change currency", function() {
        browser.url("https://www.amazon.com/");
        browser.pause(3000);
        $("#icp-touch-link-cop").click();
        browser.pause(2000);
        $("#a-autoid-0-announce").click();
        browser.pause(1000);
        $("#icp-sc-dropdown_33").click();
        browser.pause(1000);
        $("#icp-btn-save").click();
        browser.pause(2000);
        $("#twotabsearchtextbox").setValue("computer games");
        $("div.nav-search-submit.nav-sprite").click();
        browser.pause(2000);
        
        browser.call(
        async () => await percySnapshot(browser, "change currency", { widths: [1280] })
        );  

    });

    it("Change location & Search bar", function() {
        browser.url("https://www.amazon.com/");
        browser.pause(2000);
        browser.call(
            async () => await percySnapshot(browser, "Change location", { widths: [1280] })
            );
        $("#nav-packard-glow-loc-icon").click();
        $("#GLUXCountryListDropdown").click();
        $("#GLUXCountryList_53").click();
        browser.pause(1000);
        
        $("span#a-autoid-3.a-button.a-button-primary").click();
        browser.pause(3000);
       
        
       });

    it("Add and Go to Cart", function() {
        browser.url("https://www.amazon.com/Amazon-Gift-Card-Print-Logo/dp/B07P76HM3B/ref=sr_1_14?keywords=amazon&qid=1579194199&sr=8-14/");
        browser.pause(3000);
        $("#gc-customization-type-button-Designs").click();
        browser.pause(1000);
        $("#gc-buy-box-atc").click();
       browser.pause(2000);
       $("#hlb-view-cart-announce").click();
       browser.pause(2000);
       browser.call(
     async () => await percySnapshot(browser, "add cart", { widths: [1280] })
   );
       });
    

    it("Back to homepage through logo, scroll to footer", function() {
        browser.url("https://www.amazon.com/Amazon-Gift-Card-Print-Logo/dp/B07P76HM3B/ref=sr_1_14?keywords=amazon&qid=1579194199&sr=8-14/");
        browser.pause(2000);       
        $("#nav-logo").click();
        $("#nav-logo").waitForDisplayed();
        $("#navFooter").scrollIntoView();
        browser.pause(2000);
        browser.call(
     async () => await percySnapshot(browser, "back to homepage and footer", { widths: [1280] })
   );
    });  

});
