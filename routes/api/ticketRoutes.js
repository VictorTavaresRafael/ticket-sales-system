const express = require('express');
const router = express.Router();
const ticketController = require('../../controllers/ticketController');

// Rota para listar ingressos
router.get('/', ticketController.getTickets);

// Rota para criar um ingresso
router.post('/', ticketController.createTicket);

// Rota para comprar ingressos
router.post('/purchase', ticketController.purchaseTickets);

module.exports = router;