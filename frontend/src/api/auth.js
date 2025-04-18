// Handles all login/logout operations
export const login = async (email, password) => {
    const response = await fetch('http://localhost:8000/api/auth/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include' // Required for cookies
    });
    const data = await response.json();
    
    if (response.ok) {
      // Set cookie (works with Django backend)
      document.cookie = `token=${data.access}; Secure; HttpOnly; Path=/; SameSite=Strict`;
      return data;
    }
    throw new Error(data.detail || 'Login failed');
  };
  
  export const logout = () => {
    document.cookie = 'token=; Max-Age=0; Path=/;';
  };