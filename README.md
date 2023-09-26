## Inicio Rápido

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone [https://github.com/tu-usuario/mi-proyecto-de-eventos.git](https://github.com/ArturoDiaz02/EventLogs)
   ```

2. Cambia al directorio raíz del proyecto:

   ```bash
   cd EventLogs
   ```

3. Ejecuta la aplicación utilizando Docker Compose:

   ```bash
   docker-compose up -d
   ```

   Este comando iniciará los contenedores necesarios y ejecutará la aplicación en segundo plano. Puedes acceder a la aplicación en tu navegador en la dirección `http://localhost:5173`.

## Detener la Aplicación

Para detener la aplicación y apagar los contenedores Docker, ejecuta:

```bash
docker-compose down
```

Esto apagará la aplicación y eliminará los contenedores Docker.
