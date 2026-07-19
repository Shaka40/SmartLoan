const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

function getAuthToken() {
  return localStorage.getItem('access_token');
}

// ✅ RENAMED: from "request" to "apiRequest" to avoid conflict
async function apiRequest(path, { method = 'GET', body, headers = {} } = {}) {
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

// ✅ NOW THIS WORKS - No duplicate name conflict!
export const request = async (method, endpoint, data = null) => {
  return apiRequest(endpoint, { method, body: data });
};

// Existing exports
export async function loginUser(email, password) {
  return apiRequest('/api/auth/login', {
    method: 'POST',
    body: { email, password },
  });
}

export async function registerUser(email, password, role = 'student') {
  return apiRequest('/api/auth/register', {
    method: 'POST',
    body: { email, password, role },
  });
}

export async function createLoanApplication(payload) {
  return apiRequest('/api/loan-applications/', {
    method: 'POST',
    body: payload,
  });
}

// For dashboard
export async function getMyApplications() {
  return apiRequest('/api/applications/my-applications', {
    method: 'GET',
  });
}

export async function getCurrentUser() {
  return apiRequest('/api/users/me', {
    method: 'GET',
  });
}