# Spy

Social deduction party game for iOS & android where players uncover hidden roles and outsmart each other to win

---

## Demos
<details>
  <summary>Click to view all demos</summary>

  ### Gameplay GIF
  ![demo](https://user-images.githubusercontent.com/33248075/236648792-3a5e2f3c-1f4d-4e7c-8f0e-1a5f3e2e6f3b.gif)

  ### Video Demo
  [Watch Demo Video](https://github.com/user-attachments/assets/33248075-c040-43f1-8be8-3578a567a6c6)

  ### Screenshots
  <details>
    <summary>iPad Screenshots</summary>
    <img src="assets/demos/ipad/demo1.png" width="300" />
    <img src="assets/demos/ipad/demo2.png" width="300" />
    <img src="assets/demos/ipad/demo3.png" width="300" />
    <img src="assets/demos/ipad/demo4.png" width="300" />
    <img src="assets/demos/ipad/demo5.png" width="300" />
    <img src="assets/demos/ipad/demo6.png" width="300" />
    <img src="assets/demos/ipad/demo7.png" width="300" />
    <img src="assets/demos/ipad/demo8.png" width="300" />
    <img src="assets/demos/ipad/demo9.png" width="300" />
    <img src="assets/demos/ipad/demo10.png" width="300" />
  </details>

  <details>
    <summary>Other Screenshots</summary>
    <img src="assets/demos/demo1.png" width="300" />
    <img src="assets/demos/demo2.png" width="300" />
    <img src="assets/demos/demo3.png" width="300" />
    <img src="assets/demos/demo4.png" width="300" />
    <img src="assets/demos/demo5.png" width="300" />
    <img src="assets/demos/demo6.png" width="300" />
    <img src="assets/demos/demo7.png" width="300" />
    <img src="assets/demos/demo8.png" width="300" />
    <img src="assets/demos/demo9.png" width="300" />
    <img src="assets/demos/demo10.png" width="300" />
  </details>
</details>
---
### Setup

#### 1. install dependencies
```bash
npm install 
```

#### 3. Run locally 
```bash
npx expo start
```

#### 4. Build for iOS/Android

You can build the app using EAS . Make sure you have EAS CLI installed and configured.

- iOS:
  ```bash
  eas build -p ios --profile production
  ```
- Android:
```bash
  eas build -p android --profile production
  ```
Or, you can just run a prebuild to setup the ios and android folders, then build using Xcode or Android Studio:

```bash
npx expo prebuild --clean
```

#### 5. Distribute to App Store
```bash
  eas build -p android --profile production
  ```
Or, you can just run a prebuild to setup the ios and android folders, then build using Xcode or Android Studio:

```bash
npx expo prebuild --clean
```
```bash
npx expo prebuild --clean
```

#### 5. Distribute to App Store

- Open Xcode → Window → Organizer
- Select "Distribute App" → App Store Connect
- Or use Transporter to upload the generated .ipa file

