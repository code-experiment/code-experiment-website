const fs = require("fs");

// get the project folder path (replace '\' with '/' in case using Windows)
const projRootPath = __dirname.split("\\clean-config")[0].replace(/\\/g, "/");

if (fs.existsSync(`${projRootPath}/mail-server/config.js`)) {
    // If config.js exists
    const {
        THE_EMAIL,
        THE_PASSWORD,
        CLIENT_ID,
        CLIENT_SECRET,
        REFRESH_TOKEN,
        ACCESS_TOKEN,
    } = require(`${projRootPath}/mail-server/config`);

    if (
        THE_EMAIL === "codeexperimentcontact@gmail.com" &&
        THE_PASSWORD === "PasswordHere" &&
        CLIENT_ID === "ClientIDHere" &&
        CLIENT_SECRET === "ClientSecretHere" &&
        REFRESH_TOKEN === "RefreshTokenHere" &&
        ACCESS_TOKEN === "AccessTokenHere"
    ) {
        console.log("config is clean");
    } else {
        // If config.js has been edited
        console.log("config is not clean");
        // Delete config.js file
        fs.unlinkSync(`${projRootPath}/mail-server/config.js`);
    }
}

if (!fs.existsSync(`${projRootPath}/mail-server/config.js`)) {
    // If config.js does not exist
    fs.writeFileSync(
        // Create config.js and add structure with filler data
        `${projRootPath}/mail-server/config.js`,
        `module.exports = {
	THE_EMAIL: "codeexperimentcontact@gmail.com",
	THE_PASSWORD: "PasswordHere",
	CLIENT_ID: "ClientIDHere",
	CLIENT_SECRET: "ClientSecretHere",
	REFRESH_TOKEN: "RefreshTokenHere",
	ACCESS_TOKEN: "AccessTokenHere",
};
`
    );
    console.log("config.js has been rewritten without secrets");
}
