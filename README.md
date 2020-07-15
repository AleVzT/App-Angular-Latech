# Latech

## Sobre la construcción de la App 🛠️

Trata de una App web desarrollada con Angular v7.3.9. Trata de una interfaz web que maneja 2 tipos de usuarios administrador y No administrador que tienen la siguiente autoridad: 
    1.- Usuario administrador
        - Listar usuarios: permite ver una lista completa con los datos de todos los usuarios existentes y con privilegios de otorgar y/o revocar permisos de administrador a otros usuarios.
        - Listar clases: permite ver todas las clases existentes en la base de datos. Ademas tambien crear, modificar y/o borrar clases.

    2.- Usuario No administrador
        - Listar clases: permite ver todas las clases existentes en la base de datos y subscribirse a la clase de su eleccion.
        - Listar clases subscritas: permite al usuario ver todas las clases a las que se subscribio.

Ademas de la view de register, ambos usuarios pueden hacer login y logout. 

Cabe destacar que para los datos hizo uso de la Api rest que proporciona google en firebase Realtime Database. donde se tienen 3 colecciones usuarios, clases y subscritos.


## Comenzando 🚀

Para iniciar con la instalación y ejecución de la app web. debemos clonar el proyecto en el directorio de tu preferencia y donde no requieras permisos especiales para acceder

### Pre-requisitos 📋

Una teniendo los archivos que componen la app web en tu Pc. debemos verificar que contemos con ciertos pre-requisitos. Nota: acontinuacion te dare una serie de comandos deben ser utilizados en la terminal de tu sistema operativo.

    1.- Node v10.15.3 o superior: Si no estas seguro sobre que version de node tienes instalada o si tienes instalado node en tu Pc debes ejecutar el siguiente comando 

        node -v
    
    Esto de deberia arrojar la version de node, en caso de que no sea asi te dejo un link para su instalación. 

        https://nodejs.org/es/download/

    2.- Manejador de paquetes npm v6.14: este manejador de paquete por lo general viene con instalado por defecto cuando instalamos node pero de igual forma se los coloco para que verifiquen su existencia.

        npm -v
    
    En caso de no tenerlo o querer actualizar su versión podrias probar el siguiente comando.

        npm install -g npm@latest

    3.- Angular/Cli v7.3.9 o superior: Angular cli es una herramienta que te permite crear y ejecutar proyectos de angular de una forma mas facil, rapida y sencilla, para consultar su versión debemos ejecutar en la terminal el comando

        ng --version
    
    Esto deberia arrojar la versión instalada de lo contario deberá instalar la herramienta haciendo uso del siguiente comando.

        npm install -g @angular/cli@latest

    Esto instalará la última versión estable, la cual es valida para este proyecto.

### Instalación 🔧

Una vez revisado y completada la lista de pre-requisitos podemos acceder a la instalación y ejecución de la app web en tu maquina loca.

Para esto es necesito que abrar la terminal de tu sistema operativo y navegues a la carpeta que contiene el proyecto.

Una vez dentro de la carpeta principal debemos ejecutar desde la terminal el siguiente comando.

    npm install

Esto instalará todas las dependencias o paquetes de node necesarios para ejecutar la app web. Una vez finalizada esta instalación, estamos listo para levantar la app web localmente. Haciendo uso del comando 

    npm run dev

Una vez ejecutado este comando y compilado el código se deberia cargar de forma automatica, en tu navegador predeterminado la app web en el puerto :4200

Si por alguna extraña razon esto no llegará a pasar puedes colocar en la barra de direcciones de tu navegador web preferido la url

    http://localhost:4200/

Esto debería cargar la página inicial de nuestra app web.
