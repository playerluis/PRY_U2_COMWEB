const API_URL = 'http://localhost:5000/api';

export const getMensaje = async (): Promise<any> => {
    const response: Response = await fetch(`${API_URL}/mensaje`);
    return await response.json();
};