# webdriver-workshop upute za instalaciju i pokretanje testova
Primjer QA testiranja (vlastite vježbe s kolegija)
(GitHub projekt ne sadržava node_modules direktorij)


1. preduvjeti su Chrome preglednik, Node.js+npm, uređivač teksta
2. napraviti datoteku i smjestiti se u CMD-u unutar datoteke
3. inicirati Node.js projekt:
  npm init -y
  npm i webdriverio --save-dev
  npm i selenium-standalone --save-dev
  npm i @wdio/cli --save-dev

4. kreirati konfiguraciju
  (u CMD) node_modules\.bin\wdio config (ostaviti sve po defaultu)
  
5. dodati test datoteku basic.js u ./test/specs direktorija
6. u pacakge.json dodati:
  "scripts": {
   "test": "wdio wdio.conf.js"
  },

7. u basics.js dodati primjer testa:
  const assert = require('assert');

  describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
    });
  });
  
8. u CMD pokrenuti test s "npm run test"

  
