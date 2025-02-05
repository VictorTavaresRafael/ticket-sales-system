const express = require('express');
const router = express.Router();
const purchaseController = require('../../controllers/purchaseController');

// Rotas para histórico de compras
router.get('/:userId', purchaseController.getPurchaseHistory); // Obter histórico de compras de um usuário

module.exports = router;