// instruccion a ejcutar para evitar error de acceso:
// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
// https://stackoverflow.com/questions/41117421/ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system

// Tutorial (menos pasos "build"):
// https://blog.postman.com/serverless-functions-the-fast-way/

// Pasos "build" fake para que funcione todo:
// https://luetkemj.github.io/180505/netlify-lambdas-as-simple-as-possible


// Borra carpetas, crea y copia de nuevo, crea nueva carpeta dist
//  "build": "rd /s /q dist && rd /s /q functions && md dist && Xcopy src\\functions functions\\"


exports.handler = async () => {
  return {
    statusCode: 200,
    body: 'nuevo world!',
  };
};