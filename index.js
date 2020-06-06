import http from 'https';

var options = (phoneNumber, otp, authKey, templateId, senderId) => ({
    "method": "GET",
    "hostname": "api.msg91.com",
    "port": null,
    // "path": `/api/sendhttp.php?mobiles=91${phoneNumber}&authkey=${authKey}&route=4&sender=${senderId}&message=${otp}&country=91`,
    "path": `/api/v5/otp?template_id=${templateId}&mobile=91${phoneNumber}&authkey=${authKey}&otp=${otp}&invisible=1"`,
    "headers": {}
});

export const sendOtp = async (otp, phoneNumber) => {
    const authKey = 'yourOwnAuthKey';
    const templateId = 'templateId';
    const senderId = 'senderId';
    const req = await http.request(options(phoneNumber, otp, authKey, templateId, senderId), function (res) {
        let chunks = [];

        res.on("data", function (chunk) {
            console.log('chunk', chunk);
            chunks.push(chunk);
        });

        res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log('body', body.toString());
        });
    });
    req.end();
};
