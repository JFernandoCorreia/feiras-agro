import axios from 'axios';
import { toast } from 'react-toastify';

// Configuração base da API
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Função para renovar o token automaticamente
const renovarToken = async () => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {
      token: localStorage.getItem('token')
    });

    const newToken = response.data.token;
    localStorage.setItem('token', newToken);
    return newToken;
  } catch (error) {
    console.error("Erro ao renovar token:", error);
    return null;
  }
};

// Interceptor para adicionar token JWT em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para lidar com respostas de erro
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401: {
          console.warn("Token expirado. Tentando renovar...");

          const newToken = await renovarToken();
          if (newToken) {
            error.config.headers["Authorization"] = `Bearer ${newToken}`;
            return api.request(error.config); // Refaz a requisição original com o novo token
          } else {
            localStorage.removeItem("token");
            toast.warning("Sessão expirada. Faça login novamente.");
            window.location.href = "/login";
          }
          break;
        }

        case 400:
          console.error("Erro 400 (Bad Request):", error.response.data);
          toast.error("Erro na requisição. Verifique os dados informados.");
          break;

        default:
          console.error("Erro na requisição:", error.response.data);
          toast.error("Erro ao fazer a requisição. Tente novamente mais tarde.");
          break;
      }
    } else if (error.request) {
      console.error("Sem resposta do servidor.");
      toast.error("Sem resposta do servidor. Tente novamente mais tarde.");
    } else {
      console.error("Erro na configuração da requisição:", error.message);
      toast.error("Erro na configuração da requisição.");
    }

    return Promise.reject(error);
  }
);

export default api;
