# Invitación Baby Shower - GitHub Pages

Archivos:
- index.html
- styles.css
- script.js

## Cómo publicar gratis en GitHub Pages

1. Entra a GitHub.
2. Crea un repositorio nuevo, por ejemplo: `baby-shower-emma`.
3. Sube los tres archivos a la raíz del repositorio.
4. Ve a Settings > Pages.
5. En "Build and deployment", selecciona:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
6. Guarda.
7. GitHub te dará una URL similar a:
   https://TUUSUARIO.github.io/baby-shower-emma/

## Importante sobre los regalos

Esta primera versión usa `localStorage`, así que las reservas se guardan únicamente en el dispositivo de cada invitado.

Para que una reserva hecha por una persona aparezca para TODOS, hay que conectar la invitación a una fuente compartida, por ejemplo:
- Google Sheets + Apps Script
- Firebase
- Supabase

La opción más sencilla para este caso es Google Sheets + Apps Script.

## Personalización rápida

Edita en `index.html`:
- Nombre del bebé.
- Fecha.
- Hora.
- Lugar.
- Número de WhatsApp.
- Link de Google Maps.

Edita la lista de regalos en `script.js`, dentro del arreglo `gifts`.
