import wepy from 'wepy';
var CryptoJS = require('./aes.js');
var key = CryptoJS.enc.Utf8.parse("szyzkjpangyuming");
var iv = CryptoJS.enc.Utf8.parse("abcde920318abcde");
function Encrypt(word) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString();
}
function Decrypt(word) {
    // var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    // var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(word, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
const apptype = 'weixin'
const nametype = 'lianaihuashuai'
const wxRequestPost = async (params = {}, url) => {
    let data = params || {};
    data.apptype = apptype;
    data.nametype = nametype;
    data.version = '3.6.9';
    var newdata = JSON.stringify(data);
    newdata = Encrypt(newdata);
    let res = await wepy.request({
        url: url,
        method: 'POST',
        data: newdata,
        header: { 'Content-Type': 'application/json' },
    });
    res = JSON.parse(Decrypt(res.data));
    return res;
};

module.exports = {
    wxRequestPost,
}
