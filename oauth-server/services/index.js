//Helper Function

function setSecureCookie(res, token) {
  res.cookie("access_token", token, {
    httpOnly: true,
    maxAge: 60 * 1000,
    secure: true,
  });

  return res;
}

module.exports = { setSecureCookie };
