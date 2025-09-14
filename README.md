
# creacion del proyecto

* https://reactnative.dev/docs/getting-started-without-a-framework
* npx @react-native-community/cli@latest init AwesomeProject

# ejecucion
* npm i
* npx pod-install
* npm run ios
* npm run android

# Conexion Android red wifi sin cable usb
* adb kill-server
* adb start-server
* y ejecutar :
* adb pair ip:puerto
* adb connect ip:puerto

* adb devices
* adb tcpip 5555

