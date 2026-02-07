// @desc    Get profile data
// @route   GET /api/profile
// @access  Public
const getProfile = async (req, res) => {
    try {
        // For now, returning static data as in the original index.js
        // Later this can be fetched from MongoDB
        res.json({
            name: "AKHILA U",
            role: "UX/UI DESIGNER",
            description: "currently focused on creating clean, intuitive user interfaces & experiences that elevate digital products.",
            socials: {
                behance: "https://www.behance.net/akhilaakhi9",
                linkedin: "https://www.linkedin.com/in/akhila-u-5a091b229",
                dribbble: "https://dribbble.com/AkhilaSurejan"
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProfile
};
