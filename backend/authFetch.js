const fetch = require('node-fetch'); // npm install node-fetch

const getUserInfo = async (accessToken) => {
    const userInfoResponse = await fetch('https://dev-tl3wfzeq6g2er77l.us.auth0.com/ldxp4PbQTFPfizPoiRHlPJYBNO22oFKO/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!userInfoResponse.ok) {
      throw new Error('Failed to fetch user info');
    }
  
    const userInfo = await userInfoResponse.json();
    return userInfo;
  };

  module.exports = {
    getUserInfo,
  };