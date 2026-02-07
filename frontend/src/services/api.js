const API_URL = 'http://localhost:5001/api';

export const fetchProfile = async () => {
    try {
        const response = await fetch(`${API_URL}/profile`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching profile:', error);
        return null;
    }
};
