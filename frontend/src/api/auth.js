const BASE_URL = 'http://localhost:8000'; // Django default port

export const login = async (email, password) => {
  try {
    const response = await fetch('/api/auth/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Login failed');
    }

    const data = await response.json();
    document.cookie = `token=${data.access}; Path=/; Secure; HttpOnly`;
    return data;
    
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
};