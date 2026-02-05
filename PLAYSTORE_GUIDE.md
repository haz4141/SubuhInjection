# SubuhInjection - Play Store Publishing Guide

## 📱 Publishing Your PWA to Google Play Store

This guide will help you publish SubuhInjection as a mobile app on the Google Play Store using Trusted Web Activity (TWA).

## Prerequisites

1. **Google Play Developer Account** ($25 one-time fee)
2. **Hosting** - Your app must be hosted on HTTPS
3. **App Icons** - 192x192px and 512x512px PNG files
4. **Domain** (optional but recommended)

## Step 1: Host Your PWA

### Option A: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files (index.html, style.css, script.js, etc.)
3. Go to Settings → Pages
4. Enable GitHub Pages
5. Your app will be at: `https://yourusername.github.io/SubuhInjection`

### Option B: Vercel (Free)
1. Sign up at vercel.com
2. Import your GitHub repository
3. Deploy automatically
4. Get custom domain: `https://subuhinjection.vercel.app`

### Option C: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your folder
3. Get instant deployment
4. Custom domain available

## Step 2: Create App Icons

You need to create two icon sizes:
- **192x192 pixels** - For smaller displays
- **512x512 pixels** - For high-res displays

### Icon Design Recommendations:
- Black background (#0a0a0a)
- Red/orange warning triangle (⚠️)
- Alarm bell icon below
- Neon glow effects
- High contrast
- No text (icon should be recognizable at small sizes)

### Tools to Create Icons:
- **Canva** - Easy online tool
- **Figma** - Professional design tool
- **Photoshop/GIMP** - Advanced editing
- **Online Icon Generators** - Quick and simple

Save as:
- `icon-192.png`
- `icon-512.png`

Place them in your project folder.

## Step 3: Use PWABuilder (Easiest Method)

1. **Go to PWABuilder**
   - Visit: https://www.pwabuilder.com/

2. **Enter Your URL**
   - Input your hosted PWA URL
   - Example: `https://yourusername.github.io/SubuhInjection`
   - Click "Start"

3. **Review Your PWA**
   - PWABuilder will analyze your app
   - Check the manifest and service worker
   - Fix any issues if needed

4. **Generate Android Package**
   - Click "Package for Stores"
   - Select "Android"
   - Choose "Trusted Web Activity"
   - Fill in details:
     - Package ID: `com.haztech.subuhinjection`
     - App Name: `SubuhInjection`
     - Version: `1.0.0`
   - Download the package

5. **Sign Your App**
   - PWABuilder provides signing options
   - Or use Android Studio to sign manually
   - You'll get an `.aab` file (Android App Bundle)

## Step 4: Prepare for Play Store

### Required Assets:

1. **App Icon** (512x512px) - Already created
2. **Feature Graphic** (1024x500px)
   - Horizontal banner for Play Store
   - Use your app's branding
   - Include app name and tagline

3. **Screenshots** (At least 2)
   - Phone screenshots: 1080x1920px or similar
   - Show main interface, alarm active, and challenge screen
   - Can use browser dev tools to capture mobile view

4. **Privacy Policy** (Required)
   - Create a simple privacy policy
   - Host it on GitHub Pages or Google Docs
   - Example: "SubuhInjection does not collect any personal data"

### App Description:

**Short Description (80 characters max):**
```
Extreme wake-up alarm for Subuh prayer with math challenge lock
```

**Full Description:**
```
🔥 SUBUHINJECTION - EXTREME WAKE-UP SYSTEM 🔥

Never miss Subuh prayer again! SubuhInjection is a powerful alarm app designed specifically to help you wake up for Subuh (Fajr) prayer with an extreme two-phase wake-up protocol.

⚡ KEY FEATURES:

⏰ CUSTOMIZABLE ALARM TIME
• Set your own Subuh prayer time
• Adjustable for different locations worldwide
• Easy hour and minute input

🎯 TWO-PHASE ALARM SYSTEM
• Phase 1: Initial wake call with heavy alarm sound
• 1-minute snooze option
• Phase 2: Math challenge lock - solve to disable!

🔒 MATH CHALLENGE LOCK
• Can't turn off alarm without solving a math problem
• Ensures you're fully awake
• Tracks your attempts

🎨 MODERN DANGEROUS UI
• Neon red/orange/yellow theme
• Glassmorphism effects
• Animated danger indicators
• Premium design

📱 WORKS OFFLINE
• No internet required after installation
• Reliable alarm system
• Fast and lightweight

Perfect for those who struggle to wake up for Fajr prayer. The two-phase system ensures you won't fall back asleep!

Developed by HazTech Digital © 2026
```

## Step 5: Upload to Play Console

1. **Create App in Play Console**
   - Go to: https://play.google.com/console
   - Click "Create App"
   - Fill in basic details

2. **Upload Your AAB File**
   - Go to "Production" → "Create new release"
   - Upload the `.aab` file from PWABuilder
   - Add release notes

3. **Complete Store Listing**
   - Add app description
   - Upload screenshots
   - Upload feature graphic
   - Add app icon
   - Select category: "Lifestyle" or "Tools"
   - Set content rating

4. **Privacy Policy**
   - Add your privacy policy URL
   - Complete data safety section
   - Declare: "No data collected"

5. **Pricing & Distribution**
   - Select "Free"
   - Choose countries (select all or specific regions)
   - Accept terms

6. **Submit for Review**
   - Review all sections
   - Click "Send for Review"
   - Wait 1-7 days for approval

## Step 6: Post-Publishing

### Update Your App:
1. Make changes to your hosted PWA
2. Update version in manifest.json
3. Generate new AAB with PWABuilder
4. Upload to Play Console as new release

### Monitor Performance:
- Check Play Console for downloads
- Read user reviews
- Fix any reported issues
- Update regularly

## Important Notes

⚠️ **Alarm Reliability:**
- TWA apps may have battery optimization issues
- Inform users to disable battery optimization for your app
- Add instructions in app description

⚠️ **Permissions:**
- You may need to request "SCHEDULE_EXACT_ALARM" permission
- PWABuilder handles this automatically

⚠️ **Testing:**
- Test thoroughly on real Android devices
- Check alarm functionality when app is in background
- Test on different Android versions

## Alternative: Capacitor (For More Control)

If you want more native features:

1. Install Capacitor: `npm install @capacitor/core @capacitor/cli`
2. Initialize: `npx cap init`
3. Add Android: `npx cap add android`
4. Build: `npx cap sync`
5. Open in Android Studio: `npx cap open android`
6. Build APK/AAB from Android Studio

## Support

For issues or questions:
- Email: support@haztech.digital
- GitHub: Create an issue in your repository

---

**Good luck with your Play Store launch! 🚀**

*HazTech Digital © 2026*
