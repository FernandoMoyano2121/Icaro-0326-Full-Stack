export const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).send("API KEY no proporcionada");
  }

  next();
};

/*
 const headers={
    x-api-key:"932423623642634267"
}  
*/
