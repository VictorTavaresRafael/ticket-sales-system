// controllers/ticketController.js
const Ticket = require('../models/Ticket');
const Purchase = require('../models/Purchase');

exports.createTicket = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    const ticket = await Ticket.create({ name, price, quantity });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar ingresso', error });
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar ingressos', error });
  }
};

exports.updateTicket = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;
  const ticket = await Ticket.findByPk(id);
  if (ticket) {
    ticket.name = name;
    ticket.price = price;
    ticket.quantity = quantity;
    await ticket.save();
    res.json(ticket);
  } else {
    res.status(404).json({ message: 'Ingresso não encontrado' });
  }
};

exports.purchaseTickets = async (req, res) => {
  const { userId, tickets } = req.body;
  console.log('Requisição de compra recebida:', { userId, tickets }); // Log da requisição
  try {
    for (const item of tickets) {
      const ticket = await Ticket.findByPk(item.ticketId);
      console.log('Ingresso encontrado:', ticket); // Log do ingresso
      if (!ticket) {
        return res.status(404).json({ message: `Ingresso com ID ${item.ticketId} não encontrado` });
      }
      if (ticket.quantity < item.quantity) {
        return res.status(400).json({ message: `Estoque insuficiente para o ingresso ${ticket.name}` });
      }
      ticket.quantity -= item.quantity;
      await ticket.save();
      console.log('Estoque atualizado:', ticket); // Log do estoque atualizado
      await Purchase.create({ userId, ticketId: item.ticketId, quantity: item.quantity });
      console.log('Compra registrada:', { userId, ticketId: item.ticketId, quantity: item.quantity }); // Log da compra
    }
    res.status(200).json({ message: 'Compra realizada com sucesso' });
  } catch (error) {
    console.error('Erro ao processar a compra:', error); // Log do erro
    res.status(500).json({ message: 'Erro ao processar a compra', error: error.message });
  }
};