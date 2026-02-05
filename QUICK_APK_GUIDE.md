# Quick APK Build Guide for SubuhInjection

## Method 1: Using PWABuilder (EASIEST - NO CODING)

### Steps:
1. **Host your app first** (required):
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Upload your SubuhInjection folder
   - Deploy (takes 1 minute)
   - You'll get a URL like: `https://subuhinjection.vercel.app`

2. **Generate APK**:
   - Go to https://www.pwabuilder.com
   - Enter your Vercel URL
   - Click "Start"
   - Click "Package for Stores" → "Android"
   - Fill in:
     - Package ID: `com.haztech.subuhinjection`
     - App Name: `SubuhInjection`
     - Version: `1.0.0`
   - Click "Generate"
   - Download the `.aab` file

3. **Upload to Play Store**:
   - Go to https://play.google.com/console
   - Create new app
   - Upload the `.aab` file
   - Done!

## Method 2: Using Cordova (If PWABuilder doesn't work)

### Install Cordova:
```bash
npm install -g cordova
```

### Create Cordova Project:
```bash
cd d:\Documents
cordova create SubuhInjectionApp com.haztech.subuhinjection SubuhInjection
cd SubuhInjectionApp
```

### Copy your files:
Copy these files to `www` folder:
- index.html
- style.css
- script.js
- heavyalarm.mp3
- manifest.json

### Add Android Platform:
```bash
cordova platform add android
```

### Build APK:
```bash
cordova build android --release
```

APK will be in: `platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk`

### Sign the APK:
```bash
# Generate keystore (first time only)
keytool -genkey -v -keystore subuhinjection.keystore -alias subuhinjection -keyalg RSA -keysize 2048 -validity 10000

# Sign APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore subuhinjection.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk subuhinjection

# Align APK
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk SubuhInjection.apk
```

## Method 3: Quick Hosting + PWABuilder (RECOMMENDED)

Since you need the APK now, here's the fastest way:

### Step 1: Host on Vercel (2 minutes)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Click "Browse" and select your SubuhInjection folder
5. Click "Deploy"
6. Wait 1 minute
7. Copy your URL (e.g., `https://subuhinjection.vercel.app`)

### Step 2: Generate APK with PWABuilder (3 minutes)
1. Go to https://www.pwabuilder.com
2. Paste your Vercel URL
3. Click "Start"
4. Wait for analysis
5. Click "Package for Stores"
6. Select "Android"
7. Fill in details and download

### Step 3: Upload to Play Store
1. Go to Google Play Console
2. Create app
3. Upload the `.aab` file
4. Fill in store listing
5. Submit

**Total time: ~10 minutes to get APK ready for Play Store!**

## Need Icons?

Create simple icons online:
- https://www.canva.com (free templates)
- Use 512x512px
- Black background with red warning symbol
- Export as PNG

## Important Notes

- **You MUST host the app on HTTPS** for PWA to work
- Vercel/Netlify/GitHub Pages are all free
- PWABuilder is the easiest way to get Play Store-ready APK
- No need for Android Studio if using PWABuilder

## If You Get Stuck

Just host on Vercel first, then use PWABuilder. It's literally:
1. Upload to Vercel (1 min)
2. PWABuilder generates APK (2 min)
3. Upload to Play Store (5 min)

Done!
