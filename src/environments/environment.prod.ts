export const environment = {
    production: true,
    geminiApiKey: process.env["GEMINI_API_KEY"] || '',
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
}