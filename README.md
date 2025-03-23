Install choco run Power Shell admin

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Перевіряємо версію Nodejs і ставимо openjdk17

```
node -v
java --version
choco install -y nodejs-lts microsoft-openjdk17
node -v
java --version
```

Install Android Studio Download and install Android Studio

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager". 
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. 
Look for and expand the Android 15 (VanillaIceCream) entry, then make sure the following items are checked:

```
Android SDK Platform 35
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
```

Configure the ANDROID_HOME environment variable

```
Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
My path C:\Users\hp\AppData\Local\Android\Sdk
```

The default location for this folder is:

```
C:\Users\hp\AppData\Local\Android\Sdk\platform-tools
```

create a new AVD and Install HAXM

Create new app react native expo

```
npx create-expo-app@latest
npx create-expo-stack@latest --nativewind
```

Command run app

```
1. cd my-expo-app
2. npm run ios
3. npm run android
```

Run App Hotkey

```
› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your edito
```

Command list. Потрібно запускати в одні мережі вайфа. Тоді усе буде працювати супер.
Можна роздати інтернет з телефону і відразу конектитися на телефон також працює.
Налаштовуємо native wind
```
npm install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
npx tailwindcss init
```

Очистка кешу
```
npx expo start --clear
```

Налаштування навігації
```
npx expo install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm i expo-router



```