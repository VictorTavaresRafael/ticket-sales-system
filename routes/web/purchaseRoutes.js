const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/authMiddleware');
const Purchase = require('../../models/Purchase');
const Ticket = require('../../models/Ticket');

// Rota para exibir o histórico de compras do usuário
router.get('/purchase-history', authenticate, async (req, res) => {
  const userId = req.user.userId; // ID do usuário logado

  try {
    const purchases = await Purchase.findAll({
      where: { userId },
      include: [{ model: Ticket, attributes: ['name', 'price'] }],
    });

    // Calcula o total de cada compra
    const purchasesWithTotal = purchases.map(purchase => ({
      ...purchase.toJSON(),
      total: purchase.quantity * purchase.Ticket.price,
    }));

    res.render('purchaseHistory', { purchases: purchasesWithTotal });
  } catch (error) {
    res.status(500).send('Erro ao buscar histórico de compras');
  }
});

module.exports = router;