export const parseSignUpData = (data) => {
  return [
    {
      UserID: data.userid,
      FullName: data.firstname + " " + data.lastname,
      UserName: data.email,
      Password: data.password,
      PasswordHold: data.password,
      AccessLevel: data.accesslevel,
      Title: data.title,
      Credentials: data.credentials,
      FirstName: data.firstname,
      Initial: data.initial,
      LastName: data.lastname,
      Phone1: data.phone1,
      Phone2: data.phone2,
      Phone3: data.phone3,
      Street1: data.street1,
      Street2: data.street2,
      City: data.city,
      State: data.state,
      Zip: data.zip,
      Active: data.active,
      LastLogin: data.lastlogin,
      Signature: data.signature,
      BioSignature: data.biosignature,
      PinValue: data.pinvalue,
      Email: data.email,
      CompanyID: data.companyid,
      isWitness: data.iswitness,
      WitnessDate: data.witnessdate,
      date: data.date,
      HireDate: data.hiredate,
      EndDate: data.enddate,
    },
  ];
};
export const parseDefaultSignUpData = (edit, data) => {
  return {
      userid: edit ? data.userid : "",
      fullname: edit ? data.fullname : "",
      username: edit ? data.username : "",
      password: edit ? data.password : "",
      passwordhold: edit ? data.passwordhold : "",
      accesslevel: edit ? data.accesslevel : 10,
      title: edit ? data.title : "",
      credentials: edit ? data.credentials : '',
      firstname: edit ? data.firstname : "",
      initial: edit ? data.initial : '',
      lastname: edit ? data.lastname : "",
      phone1: edit ? data.phone1 : "",
      phone2: edit ? data.phone2 : "",
      phone3: edit ? data.phone3 : "",
      street1: edit ? data.street1 : "",
      street2: edit ? data.street2 : "",
      city: edit ? data.city : "",
      state: edit ? data.state : "",
      zip: edit ? data.zip : "",
      active: edit ? data.active : 1,
      lastlogin: edit ? data.lastlogin : null,
      signature: edit ? data.signature : null,
      biosignature: edit ? data.biosignature : "",
      pinvalue: edit ? data.pinvalue : "",
      email: edit ? data.email : "",
      companyid: edit ? data.companyid : '26',
      iswitness: edit ? data.iswitness : 1,
      witnessdate: edit ? data.witnessdate : Date.now(),
      witnessid: edit ? data.witnessid : 687,
      date: edit ?  data.date : Date.now(),
      hiredate: edit ? data.hiredate : Date.now(),
      enddate: edit ? data.enddate :Date.now(),
    }
      
};

export const getUserFields = (obj) => {
  const fields = Object.keys(obj);
  const index = fields.indexOf("UseriD");
  if (index !== -1) {
    fields.splice(index, 1);
  }
  return fields.join(",");
};