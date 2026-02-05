# 🔥 SubuhInjection - Extreme Wake-Up System

**Developed by HazTech Digital © 2026**

## 🚨 Overview

SubuhInjection is a powerful, dangerous-looking alarm application designed to help you wake up for Subuh prayer (5:00 AM). This isn't your ordinary alarm - it's an **extreme wake-up protocol** that ensures you actually get out of bed!

## ⚡ Features

### 🎯 Two-Phase Alarm System

**PHASE 1: Initial Wake Call**
- Alarm triggers at exactly 5:00 AM
- Plays heavy alarm sound (`heavyalarm.mp3`)
- Can be snoozed ONCE for 1 minute
- Dangerous red warning interface

**PHASE 2: Math Challenge Lock**
- Automatically triggers 1 minute after Phase 1
- Requires solving: **1 + 241 = ?**
- Alarm continues until correct answer is entered
- Tracks number of attempts
- Critical orange warning interface

### 🎨 Modern & Dangerous UI

- **Neon color scheme**: Red, Orange, Yellow
- **Glassmorphism effects** with backdrop blur
- **Animated danger grid** background
- **Pulsing warning indicators**
- **Glowing text effects** with neon shadows
- **Shake animations** on alarm bell
- **Responsive design** for all screen sizes

### 🔊 Audio Features

- Loops heavy alarm sound continuously
- Auto-plays on alarm trigger
- Stops only when:
  - Phase 1: Snooze button pressed
  - Phase 2: Correct answer submitted

## 📋 How to Use

1. **Open the Application**
   - Double-click `index.html` to open in your browser
   - Or use a local server for best performance

2. **Activate the Alarm**
   - Click the **"🔥 ACTIVATE ALARM"** button
   - Status will change to **"ARMED"**
   - Alarm is now set for 5:00 AM

3. **When Alarm Triggers (5:00 AM)**
   - **Phase 1** will activate with loud alarm
   - Click **"STOP ALARM"** to snooze for 1 minute
   - Get ready - Phase 2 is coming!

4. **Phase 2 - Math Challenge**
   - After 1 minute, Phase 2 activates
   - Solve the math problem: **1 + 241 = ?**
   - Enter **242** to disable the alarm
   - Wrong answers will keep the alarm ringing!

## 🛠️ Technical Details

### Files Structure
```
SubuhInjection/
├── index.html          # Main HTML structure
├── style.css           # Dangerous modern styling
├── script.js           # Alarm logic & functionality
├── heavyalarm.mp3      # Alarm sound file
└── README.md           # This file
```

### Technologies Used
- **HTML5** - Structure
- **CSS3** - Animations, glassmorphism, neon effects
- **Vanilla JavaScript** - Alarm logic, no dependencies
- **Google Fonts** - Orbitron & Rajdhani fonts

### Browser Compatibility
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 🎨 Design Features

- **Orbitron Font**: Used for titles and digital displays
- **Rajdhani Font**: Used for body text and labels
- **Color Palette**:
  - Danger Red: `#ff0000` / `#ff0033`
  - Danger Orange: `#ff4500` / `#ff6600`
  - Danger Yellow: `#ffd700` / `#ffcc00`
- **Effects**:
  - Pulsing circles
  - Moving grid background
  - Glowing text shadows
  - Glassmorphism panels
  - Warning flash animations

## 🧪 Testing Mode

To test the alarm without waiting until 5:00 AM:

1. Open `script.js`
2. Find the `activateAlarm()` method
3. Uncomment this line:
   ```javascript
   // setTimeout(() => this.triggerAlarm(1), 2000);
   ```
4. Save and reload the page
5. Click "ACTIVATE ALARM" - alarm will trigger after 2 seconds

## ⚙️ Customization

### Change Alarm Time
Edit in `script.js`:
```javascript
this.alarmTime = { hours: 5, minutes: 0 }; // Change to your desired time
```

### Change Math Question
Edit in `script.js`:
```javascript
this.correctAnswer = 242; // Change the answer
```
Then update the question in `index.html`:
```html
<div class="question">1 + 241 = ?</div>
```

### Change Alarm Sound
Replace `heavyalarm.mp3` with your own audio file (keep the same filename)

## 🔒 Security Features

- **No snooze on Phase 2**: Forces you to solve the math problem
- **Continuous alarm**: Won't stop until correct answer
- **Attempt tracking**: Shows how many tries you've made
- **Auto-focus**: Input field automatically focused for quick typing

## 📱 Mobile Support

Fully responsive design works on:
- Desktop computers
- Laptops
- Tablets
- Smartphones

## 🐛 Troubleshooting

**Alarm sound not playing?**
- Check browser autoplay policies
- Click anywhere on the page first to enable audio
- Ensure `heavyalarm.mp3` is in the same folder

**Alarm not triggering at 5:00 AM?**
- Make sure you clicked "ACTIVATE ALARM"
- Keep the browser tab open
- Don't put computer to sleep

**Wrong time displayed?**
- Check your system clock
- Alarm uses local system time

## 📄 License

Created by **HazTech Digital** © 2026

Free to use for personal purposes. Please keep the credit intact.

## 🙏 Purpose

This application was created to help wake up for **Subuh prayer** (Fajr), the first of the five daily Islamic prayers. May it help you start your day with worship and devotion.

---

**Stay dangerous. Stay awake. 🔥**

*HazTech Digital - Making mornings impossible to ignore since 2026*
