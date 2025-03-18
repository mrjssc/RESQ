const express = require('express');
const router = express.Router();
const IncidentController = require('../controllers/IncidentController');


router.post('/incidents', IncidentController.createIncident);
router.get('/incidents', IncidentController.getAllIncidents);
router.get('/incidents/:id', IncidentController.getIncidentById);
router.put('/incidents/:id', IncidentController.updateIncident);
router.delete('/incidents/:id', IncidentController.deleteIncident);

module.exports = router;