// src/App.tsx
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';

const App: React.FC = () => {
    const { instance } = useMsal();

    const handleLogin = async () => {
        try {
            await instance.loginPopup(loginRequest);
            console.log("Login bem-sucedido");
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    const handleLogout = () => {
      instance.logoutPopup().catch(e => {
        console.error(e);
      });
    };

    return (
        <div>
            <h1>Bem-vindo ao App React</h1>
            <button onClick={handleLogin}>Login com Azure AD</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default App;
