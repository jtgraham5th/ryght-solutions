export const parseSignUpData = (data) => {
  return [
    {
      UserID: 0,
      FullName: data.FirstName + " " + data.LastName,
      UserName: "",
      Password: data.Password,
      PasswordHold: data.Password,
      AccessLevel: 10,
      Title: "",
      Credentials: '',
      FirstName: data.FirstName,
      Initial: '',
      LastName: data.LastName,
      Phone1: "",
      Phone2: "",
      Phone3: "",
      Street1: "",
      Street2: "",
      City: "",
      State: "",
      Zip: "",
      Active: 1,
      LastLogin: null,
      Signature: null,
      BioSignature: "",
      PinValue: "",
      Email: data.Email,
      CompanyID: 26,
      isWitness: 1,
      WitnessDate: "2022-03-25T11:31:50",
      WitnessID: 687,
      date: "1900-01-01",
      HireDate: "1900-01-01",
      EndDate: "1900-01-01",
    },
  ];
};
export const getUserFields = (obj) => {
  const fields = Object.keys(obj);
  const index = fields.indexOf("UseriD");
  if (index !== -1) {
    fields.splice(index, 1);
  }
  return fields.join(",");
};