const fetch = require('node-fetch');

async function search(type, serial) {
    let cat;
    switch (type) {
        case "ipad":
            cat = "tablet";
            break;
        case "mac":
            cat = "computer";
            break;
        default:
            throw new Error("Invalid type: " + type);
    }
    const json = await fetch("https://www.apple.com/shop/tradein-verify?bfr=false", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "body": `cat=${cat}&bid=1&sno=${serial.toUpperCase()}`,
    }).then(resp => resp.json());
    if (!json.body.parameters || !json.body.parameters.pid) {
        throw new Error("Could not find serial number")
    }
    const id = json.body.parameters.pid;
    const results = await fetch(`https://www.apple.com/shop/tradein-module?cat=${cat}&bid=1&pid=${id}&module=verify`).then(resp => resp.json());
    return results.body.moduleData.moreInfo.trim();
}

module.exports = search;
