//Importar la aplicacion
const app = require('./app');  

//Definir el puerto (jamas llamar en .app ya que tratara de abrirlo doble vez y no te dejara trabajar)
const PORT = process.env.PORT || 8080;  


//Iniciar el servidor
(async () => {  
    try {
        console.log('🚀 Iniciando servidor...');  

        app.listen(PORT, () => {  
            console.log(`✅ Servidor en ejecución en el puerto ${PORT}`);  
        });  
    } catch (error) {
        console.error('❌ Error al iniciar el servidor:', error);
    }
})();

