const { validationResult } = require('express-validator/check');

const custom1 = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let { elementId } = req.body;

  try {
    if (!elementId) {
      return res.status(400).json({
        success: false,
        message: 'Error.'
      });
    }

    let element = await getResult(elementId);

    return res.status(200).json({
      success: true,
      element,
      message: 'El usuario ha sido registrado a la empresa correctamente.'
    });
  } catch (error) {
    console.log(
      `Se ha presentado un error SERVICIO ${elementId}, Error: ${error}`
    );
    res.status(500).json({
      success: false,
      message: 'Se ha presentado un error ERROR, por favor intente de nuevo.'
    });
  }
};

module.exports = custom1;
