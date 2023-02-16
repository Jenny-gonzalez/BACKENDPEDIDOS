import ProductsDb from '../models/ProductSchema';
//import PedidosDb from '../models/PedidoSchema'

export const deleteProduct = async (req, res) => {
  const params = req.params;
  const { id } = params;

  try {
    const deleted = await ProductsDb.findOneAndDelete({ id });

    res.json({
      message: 'Producto eliminado',
      deletedProduct: deleted,
    });
  } catch (err) {
    res.status(500).json({
      message: 'ERROR: ' + err,
    });
  }
};

