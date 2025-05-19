const BASE_URL = 'http://localhost:5000/api/auth';

export const login = async (email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });

    if(!res.ok) throw new Error
}