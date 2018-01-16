const cryptoHelperExporter = require("./cryptoHelper.js");
const accountExporter = require("./account.js");

const cryptographyHelper = cryptoHelperExporter.newCryptoHelper();

let newAccount = accountExporter.newAccount({ entropy : "1349082123412353tgfdvrewfdvdfr43f34390413290413", network : "00" });
if (newAccount.privateKey == null) {
    console.log("NO PRIVATE KEY");
}

console.info(newAccount);
let signature = newAccount.sign("dataToSign");

console.log(signature);

accountExporter.runUnitTests();
cryptoHelperExporter.runUnitTests();
