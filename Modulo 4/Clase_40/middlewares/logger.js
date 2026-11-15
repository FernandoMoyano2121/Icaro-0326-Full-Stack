export const logger = (req, res, next) => {
  console.log(`Metodo de peticion: ${req.method} - URL: ${req.url}`);
  next();
};
