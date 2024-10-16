const Centre = require('../models/Centre');
const Sport = require('../models/Sport');

// Get all centres
exports.getAllCentres = async (req, res) => {
    try {
        const centres = await Centre.find().populate('sports courts manager');
        res.json(centres);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching centres' });
    }
};

// Get centres that have a specific sport
exports.getCentresBySport = async (req, res) => {
    const { sportId } = req.params;
    try {
        const centres = await Centre.find({ sports: sportId }).populate('sports courts');
        if (!centres) return res.status(404).json({ message: 'No centres found for the sport' });
        res.json(centres);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching centres' });
    }
};