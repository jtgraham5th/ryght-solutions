export const getAllDXCodes = async () => {
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/list/30?listing=recid&orderby=recid`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  };