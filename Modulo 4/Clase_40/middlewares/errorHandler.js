export const errorHandler = (error, req, res, next) => {
  console.log("Error detectado: ", error.message);

  res.status(error.statusCode || 500).json({
    error: error.message || "Error interno",
  });
};
