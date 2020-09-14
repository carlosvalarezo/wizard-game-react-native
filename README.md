# wizard

- Se ejecuta en iOS & android
![ios and android](/images/ios-android.png)
Format: ![Alt Text](ios-android)

## Ejecución en android
El siguiente comando ejecutará:

[x] instalación de dependencias
[x] ejecución de pruebas
[x] inicio de metro server
[x] inicio en un android emulator

```sh inicio.sh
```

## Ejecución en iOS
1. Abrir la carpeta iOS del proyecto
2. Ejecutar: ```pod install```
3. Abrir Xcode
4. Abrir el proyecto en la carpeta iOS
5. Escoger un emulador
6. Ejecutar

Posibles errores
1. Si aparece ```no metro bundle```, por favor asegurarse de haber ejecutado ya sea ```sh inicio.sh``` o ```npm start``` y que una ventana de la terminal esté ejecutando un servidor.
![error metro bundle](/images/no-bundle.png)
Format: ![Alt Text](no metro bundle)
