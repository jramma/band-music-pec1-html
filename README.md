# Band Music PEC 1 HTML

## URL al sitio web 🌐

https://exquisite-chebakia-1584e9.netlify.app/


## Estructure 🌳

```markdown
.
├── /src
│ ├── /public
│ │ ├── /albums
│ │ │ └── .jpg de albums (Imágenes de los álbumes)
│ │ ├── /icon
│ │ │ └── .svg iconos (Iconos en formato SVG)
│ │ └── /sound
│ │ └── .mp3 (Archivos de sonido en formato MP3)
│ ├── .webp (Imágenes en formato WebP)
│ ├── /scripts (Códigos JavaScript)
│ └── /styles (Estilos CSS)
│ ├── category.css
│ ├── detail.css
│ ├── links.css
│ └── presentation.css
├── category.html
├── detail.html
├── index.html
├── presentation.html
├── style.css
└── package.json (Archivo de configuración de Node.js)
```

**No es común separar el css pero he preferido separarlo para que sea más legible, los css que afectan a toda la web están en style.css de la carpeta raiz**

## Dependencias 🔎

1. **Swiper (https://swiperjs.com/):** Swiper es una biblioteca de JavaScript moderna y móvil para presentar diapositivas. Es muy flexible y compatible con la mayoría de los frameworks modernos. Puedes usarla para crear carruseles de imágenes, presentaciones de diapositivas y otras presentaciones de contenido.

2. **Sass:** Sass (Syntactically Awesome Stylesheets) es un preprocesador de CSS. Te permite usar características que no existen en CSS, como variables, anidamiento, mixins, herencia y otros, lo que puede hacer que tu CSS sea más reutilizable, mantenible y extensible.

3. **Autoprefixer:** Autoprefixer es una herramienta que actualiza tu CSS para añadir prefijos de proveedor a las reglas CSS, para asegurarse de que funcionen en diferentes navegadores. Por ejemplo, transforma `transform: rotate(30deg);` en `-webkit-transform: rotate(30deg); transform: rotate(30deg);`, para asegurarse de que la rotación funcione tanto en navegadores que requieren el prefijo `-webkit-` como en los que no lo requieren.

## Cómo arrancar el proyecto 🛵

Para arrancar el proyecto, sigue estos pasos:

1. Asegúrate de tener instalada la última versión estable de Node.js en tu sistema.

2. Instala las dependencias del proyecto ejecutando el siguiente comando en tu terminal:

   ```
   npm install
   ```

3. Una vez instaladas las dependencias, puedes arrancar el proyecto con el siguiente comando:

   ```
   npm run dev
   ```

4. Para verificar que todo está funcionando correctamente, puedes construir el proyecto con el siguiente comando:

   ```
   npm run build
   ```

Estos comandos deben ejecutarse en la raíz del proyecto, donde se encuentra el archivo `package.json`.
