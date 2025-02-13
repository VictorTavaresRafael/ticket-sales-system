const Purchase = require('../models/Purchase');
const Ticket = require('../models/Ticket');

exports.getPurchaseHistory = async (req, res) => {
    try {
      const userId = req.user.userId;
      const purchases = await Purchase.findAll({
        where: { userId },
        include: [{ model: Ticket, attributes: ['name', 'price'] }], // Inclui detalhes do ingresso
      });
  
      res.render('purchaseHistory', { purchases }); // Renderiza a view com o histórico
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao carregar o histórico de compras.');
    }
  };

  exports.getPurchaseDetails = async (req, res) => {
    try {
      const purchaseId = req.params.id;
      const userId = req.user.userId;
  
      const purchase = await Purchase.findOne({
        where: { id: purchaseId, userId },
        include: [{ model: Ticket, attributes: ['name', 'price', 'description'] }],
      });
  
      if (purchase) {
        res.render('purchaseDetails', { purchase });
      } else {
        res.status(404).send('Compra não encontrada.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao carregar os detalhes da compra.');
    }
  };