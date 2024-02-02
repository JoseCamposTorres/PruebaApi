// server.js o dentro de tu archivo auth.js bajo el directorio de routes
app.get('/auth/instagram/callback', (req, res) => {
    const code = req.query.code;
    if (!code) {
        return res.send('Error: No se encontró el código de autorización.');
    }
    console.log('Código de autorización:', code);
    res.send('Código de autorización capturado, revisa la consola del servidor.');
});