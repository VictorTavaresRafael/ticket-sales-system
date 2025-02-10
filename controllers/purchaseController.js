const Purchase = require('../models/Purchase');
const Ticket = require('../models/Ticket');

exports.getPurchaseHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    const purchases = await Purchase.findAll({
      where: { userId },
      include: [{ model: Ticket, attributes: ['name', 'price'] }],
    });
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar histórico de compras', error });
  }
};