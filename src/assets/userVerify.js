export const nameVerify = (name) => {
  return name.length > 0 ? true : false;
};

export const mailVerify = (mail) => {
  const mailRegExp = new RegExp(
    /([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+/gm
  );

  return mailRegExp.test(mail) ? true : false;
};

export const passVerify = (pass) => {
  const passRegExp = new RegExp(
    // more dificult variant
    // 1-big letter / 1-small letter / 1 special symbol / 1 number / length > 6 
    // /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g

    // big letter / small letter / number
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g
  );

  return passRegExp.test(pass) ? true : false;
};
