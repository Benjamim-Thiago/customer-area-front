// src/authConfig.ts
const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_AZURE_CLIENT_ID, // Coloque seu Client ID aqui
        authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID}`, // Coloque seu Tenant ID aqui
        redirectUri: import.meta.env.VITE_AZURE_REDIRECT_URI, // URI de redirecionamento
    },
};

const loginRequest = {
    scopes: ["User.Read"], // Escopos necessários para a autenticação
};

export { msalConfig, loginRequest };