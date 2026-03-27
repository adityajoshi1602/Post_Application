const imagekit = require('@imagekit/nodejs')
const ik = new imagekit({
    privateKey: "private_EMPPERPoIjxsE4S8R/l6AJpRc08="
})

async function uploadfile(buffer) {
    const res = await ik.client.upload({
        file: buffer,
        filename: "image.jpg"
    })

    return res;
}

module.exports = uploadfile