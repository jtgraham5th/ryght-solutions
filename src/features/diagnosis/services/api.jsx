const apiUrl = process.env.REACT_APP_API_URL;
// const rptUrl = process.env.REACT_APP_RPT_URL;

export const getAllDXCodes = async () => {
    return await fetch(
      `${apiUrl}generic_api/list/30?fields=*&where=statusid=1&orderby=recid&allrecs=true`
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
      })
      .catch((e) => {
        console.log(e);
      });
  };