const express = require('express');
const router = express.Router();
const Ticket = require('../../models/Ticket');
const authMiddleware = require('../../middleware/authMiddleware');

router.get('/tickets', async (req, res) => {
    const tickets = await Ticket.findAll();
    res.render('tickets', { tickets });
});

router.get('/purchase-history', authMiddleware, async (req, res) => {
    const purchases = await Purchase.findAll({ where: { userId: req.user.userId }, include: Ticket });
    res.render('purchaseHistory', { purchases });
});

module.exports = router;
