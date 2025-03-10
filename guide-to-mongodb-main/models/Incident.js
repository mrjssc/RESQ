const incidentSchema = require("../schema/Incident");
const mongoose = require('mongoose');

const Incident = mongoose.model('Incident', incidentSchema);
module.exports = Incident;