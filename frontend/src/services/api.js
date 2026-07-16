const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

function getAuthToken() {
  return localStorage.getItem('access_token');
}

async function request(path, { method = 'GET', body, headers = {} } = {}) {
  const token = getAuthToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const contentType = response.headers.get('content-type') || '';
  const data = contentType.includes('application/json') ? await response.json() : await response.text();

  if (!response.ok) {
    const message = typeof data === 'string' ? data : data?.detail || 'Request failed';
    throw new Error(message);
  }

  return data;
}

export async function loginUser(email, password) {
  return request('/api/auth/login', {
    method: 'POST',
    body: { email, password },
  });
}

export async function registerUser(email, password) {
  return request('/api/auth/register', {
    method: 'POST',
    body: { email, password },
  });
}

export async function createLoanApplication(payload) {
  return request('/api/loan-applications/', {
    method: 'POST',
    body: payload,
  });
}
