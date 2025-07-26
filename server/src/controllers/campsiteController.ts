module.exports = {
  getAllCampsites: async (req, res) => {
    try {
      const campsites = await Campsite.find();
      res.status(200).json(campsites);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving campsites', error });
    }
  },

  getCampsiteById: async (req, res) => {
    const { id } = req.params;
    try {
      const campsite = await Campsite.findById(id);
      if (!campsite) {
        return res.status(404).json({ message: 'Campsite not found' });
      }
      res.status(200).json(campsite);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving campsite', error });
    }
  },

  createCampsite: async (req, res) => {
    const newCampsite = new Campsite(req.body);
    try {
      const savedCampsite = await newCampsite.save();
      res.status(201).json(savedCampsite);
    } catch (error) {
      res.status(400).json({ message: 'Error creating campsite', error });
    }
  },

  updateCampsite: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedCampsite = await Campsite.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedCampsite) {
        return res.status(404).json({ message: 'Campsite not found' });
      }
      res.status(200).json(updatedCampsite);
    } catch (error) {
      res.status(400).json({ message: 'Error updating campsite', error });
    }
  },

  deleteCampsite: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCampsite = await Campsite.findByIdAndDelete(id);
      if (!deletedCampsite) {
        return res.status(404).json({ message: 'Campsite not found' });
      }
      res.status(200).json({ message: 'Campsite deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting campsite', error });
    }
  }
};