// SubuhInjection - Extreme Wake-Up System
// Developed by HazTech Digital 2026

class SubuhInjection {
    constructor() {
        this.alarmTime = { hours: 5, minutes: 0 }; // Default 5:00 AM
        this.alarmActive = false;
        this.alarmPhase = 0; // 0 = inactive, 1 = first alarm, 2 = second alarm (with challenge)
        this.alarmSound = document.getElementById('alarmSound');
        this.attempts = 0;
        this.correctAnswer = 242; // 1 + 241 = 242

        this.initializeElements();
        this.attachEventListeners();
        this.startClock();
        this.checkAlarm();
        this.updateAlarmTimeDisplay();
    }

    initializeElements() {
        // Main Interface
        this.mainInterface = document.getElementById('mainInterface');
        this.alarmInterface = document.getElementById('alarmInterface');
        this.challengeInterface = document.getElementById('challengeInterface');

        // Buttons
        this.activateBtn = document.getElementById('activateBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.submitBtn = document.getElementById('submitBtn');
        this.setTimeBtn = document.getElementById('setTimeBtn');

        // Time inputs
        this.hoursInput = document.getElementById('hoursInput');
        this.minutesInput = document.getElementById('minutesInput');

        // Display elements
        this.alarmTimeDisplay = document.getElementById('alarmTime');
        this.currentTimeDisplay = document.getElementById('currentTime');
        this.statusDot = document.getElementById('statusDot');
        this.statusText = document.getElementById('statusText');
        this.phaseIndicator = document.getElementById('phaseIndicator');
        this.alarmMessage = document.getElementById('alarmMessage');
        this.answerInput = document.getElementById('answerInput');
        this.errorMessage = document.getElementById('errorMessage');
        this.attemptCount = document.getElementById('attemptCount');
    }

    attachEventListeners() {
        this.activateBtn.addEventListener('click', () => this.activateAlarm());
        this.stopBtn.addEventListener('click', () => this.handleStopButton());
        this.submitBtn.addEventListener('click', () => this.checkAnswer());
        this.setTimeBtn.addEventListener('click', () => this.setAlarmTime());

        // Allow Enter key to submit answer
        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });

        // Update display when time inputs change
        this.hoursInput.addEventListener('input', () => this.validateTimeInput());
        this.minutesInput.addEventListener('input', () => this.validateTimeInput());
    }

    validateTimeInput() {
        // Validate hours (0-23)
        let hours = parseInt(this.hoursInput.value);
        if (isNaN(hours) || hours < 0) {
            this.hoursInput.value = 0;
        } else if (hours > 23) {
            this.hoursInput.value = 23;
        }

        // Validate minutes (0-59)
        let minutes = parseInt(this.minutesInput.value);
        if (isNaN(minutes) || minutes < 0) {
            this.minutesInput.value = 0;
        } else if (minutes > 59) {
            this.minutesInput.value = 59;
        }
    }

    setAlarmTime() {
        const hours = parseInt(this.hoursInput.value);
        const minutes = parseInt(this.minutesInput.value);

        // Validate inputs
        if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            this.showNotification('❌ Invalid time! Please enter valid hours (0-23) and minutes (0-59)');
            return;
        }

        // Update alarm time
        this.alarmTime.hours = hours;
        this.alarmTime.minutes = minutes;

        // Update display
        this.updateAlarmTimeDisplay();

        // Show confirmation
        const timeString = this.formatTime(hours, minutes);
        this.showNotification(`⏰ Alarm time set to ${timeString}`);

        // If alarm is already active, inform user
        if (this.alarmActive) {
            this.showNotification('⚠️ Alarm is active! New time will apply to next activation.');
        }
    }

    updateAlarmTimeDisplay() {
        const timeString = this.formatTime(this.alarmTime.hours, this.alarmTime.minutes);
        this.alarmTimeDisplay.textContent = timeString;
    }

    formatTime(hours, minutes) {
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours === 0 ? 12 : (hours > 12 ? hours - 12 : hours);
        const displayMinutes = minutes.toString().padStart(2, '0');
        return `${displayHours}:${displayMinutes} ${period}`;
    }


    startClock() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
        this.currentTimeDisplay.textContent = formattedTime;
    }

    padZero(num) {
        return num.toString().padStart(2, '0');
    }

    checkAlarm() {
        setInterval(() => {
            if (!this.alarmActive) return;

            const now = new Date();
            const currentHours = now.getHours();
            const currentMinutes = now.getMinutes();
            const currentSeconds = now.getSeconds();

            // Check if it's time for the alarm
            if (currentHours === this.alarmTime.hours &&
                currentMinutes === this.alarmTime.minutes &&
                currentSeconds === 0 &&
                this.alarmPhase === 0) {
                this.triggerAlarm(1);
            }
        }, 1000);
    }

    activateAlarm() {
        this.alarmActive = true;
        this.statusDot.classList.add('active');
        this.statusText.textContent = 'ARMED';
        this.activateBtn.textContent = '🔥 ALARM ARMED';
        this.activateBtn.style.background = 'linear-gradient(135deg, #00ff00, #00cc00)';
        this.activateBtn.style.boxShadow = '0 8px 32px rgba(0, 255, 0, 0.4)';

        // Show notification
        this.showNotification('Alarm activated! Set for 5:00 AM');

        // For testing purposes, you can trigger the alarm immediately
        // Uncomment the line below to test:
        // setTimeout(() => this.triggerAlarm(1), 2000);
    }

    triggerAlarm(phase) {
        this.alarmPhase = phase;

        if (phase === 1) {
            // First alarm - can be snoozed
            this.showAlarmInterface();
            this.playAlarm();
            this.phaseIndicator.textContent = 'PHASE 1';
            this.alarmMessage.textContent = 'First alarm! Tap to snooze for 1 minute.';
        } else if (phase === 2) {
            // Second alarm - requires math challenge
            this.showChallengeInterface();
            this.playAlarm();
            this.attempts = 0;
            this.attemptCount.textContent = this.attempts;
            this.answerInput.value = '';
            this.errorMessage.textContent = '';
        }
    }

    handleStopButton() {
        if (this.alarmPhase === 1) {
            // First alarm - snooze for 1 minute
            this.stopAlarm();
            this.alarmPhase = 0;
            this.showMainInterface();
            this.showNotification('Snoozed for 1 minute...');

            // Schedule second alarm after 1 minute
            setTimeout(() => {
                if (this.alarmActive) {
                    this.triggerAlarm(2);
                }
            }, 60000); // 60000ms = 1 minute
        }
    }

    checkAnswer() {
        const userAnswer = parseInt(this.answerInput.value);
        this.attempts++;
        this.attemptCount.textContent = this.attempts;

        if (userAnswer === this.correctAnswer) {
            // Correct answer!
            this.stopAlarm();
            this.alarmActive = false;
            this.alarmPhase = 0;
            this.showMainInterface();
            this.resetAlarmButton();
            this.showNotification('✅ Correct! Alarm disabled. Good morning!');
            this.errorMessage.textContent = '';
        } else {
            // Wrong answer
            this.errorMessage.textContent = `❌ Wrong! Try again. (Attempt ${this.attempts})`;
            this.answerInput.value = '';
            this.answerInput.focus();

            // Shake effect
            this.challengeInterface.style.animation = 'none';
            setTimeout(() => {
                this.challengeInterface.style.animation = 'fadeIn 0.5s ease';
            }, 10);
        }
    }

    playAlarm() {
        this.alarmSound.currentTime = 0;
        this.alarmSound.play().catch(error => {
            console.error('Error playing alarm:', error);
            // Fallback: try to play again after user interaction
            document.addEventListener('click', () => {
                this.alarmSound.play().catch(e => console.error('Retry failed:', e));
            }, { once: true });
        });
    }

    stopAlarm() {
        this.alarmSound.pause();
        this.alarmSound.currentTime = 0;
    }

    showMainInterface() {
        this.mainInterface.classList.add('active');
        this.alarmInterface.classList.remove('active');
        this.challengeInterface.classList.remove('active');
    }

    showAlarmInterface() {
        this.mainInterface.classList.remove('active');
        this.alarmInterface.classList.add('active');
        this.challengeInterface.classList.remove('active');
    }

    showChallengeInterface() {
        this.mainInterface.classList.remove('active');
        this.alarmInterface.classList.remove('active');
        this.challengeInterface.classList.add('active');

        // Focus on input after a short delay
        setTimeout(() => {
            this.answerInput.focus();
        }, 500);
    }

    resetAlarmButton() {
        this.statusDot.classList.remove('active');
        this.statusText.textContent = 'STANDBY';
        this.activateBtn.innerHTML = '<span class="btn-icon">🔥</span>ACTIVATE ALARM';
        this.activateBtn.style.background = 'linear-gradient(135deg, var(--neon-red), var(--neon-orange))';
        this.activateBtn.style.boxShadow = '0 8px 32px rgba(255, 0, 51, 0.4), 0 0 20px var(--neon-red)';
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            border: 2px solid var(--neon-orange);
            box-shadow: 0 8px 32px rgba(255, 102, 0, 0.6);
            font-family: 'Rajdhani', sans-serif;
            font-size: 16px;
            font-weight: 700;
            z-index: 1000;
            animation: slideIn 0.5s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SubuhInjection();
});
