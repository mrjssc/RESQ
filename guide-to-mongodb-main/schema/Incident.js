const mongoose = require('mongoose');
const incidentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true},
  location: {type: String, required: true},
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  reportedBy: { type: String, required: true},
  assignedTo: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Incident', incidentSchema);