# Novus - Learning Course Mobile App

A modern, feature-rich mobile learning platform built with React Native and Expo. Browse courses, track your learning progress, and access premium educational content with an intuitive and beautiful user interface.

## 📱 Screenshots

<!-- Add screenshots here -->

## ✨ Features

- 📚 **Course Browsing** - Explore a wide variety of courses with beautiful card layouts
- 🔍 **Smart Search** - Real-time course search with debouncing for optimal performance
- 📖 **Chapter Management** - Organized chapter-based learning structure with duration tracking
- 💎 **Premium Subscriptions** - Unlock premium courses with subscription system
- 🎨 **Modern UI/UX** - Clean, responsive design with NativeWind (Tailwind CSS)
- 🔐 **Secure Authentication** - User authentication powered by Clerk
- ✉️ **Email Verification** - Secure signup with email verification modal
- 🎯 **Course Categories** - Free and premium course differentiation
- ⚡ **Fast Performance** - Optimized with React Native and Expo

## 🛠️ Tech Stack

- **Framework:** React Native 0.81.5 with Expo SDK 54
- **Navigation:** Expo Router 6.0
- **Styling:** NativeWind (Tailwind CSS for React Native)
- **UI Components:** Gluestack UI
- **Authentication:** Clerk
- **Animations:** React Native Reanimated & Legendapp Motion
- **Icons:** Expo Vector Icons (Ionicons)
- **Language:** JavaScript/JSX

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Emulator
- Clerk account for authentication

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/novus-learning-app.git
cd novus-learning-app/Novus
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
```

4. **Add your Clerk publishable key to `.env`:**
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

> Get your Clerk key from: [Clerk Dashboard](https://dashboard.clerk.com/last-active?path=api-keys)

5. **Start the development server:**
```bash
npm start
```

## 📱 Running the App

**Start development server:**
```bash
npm start
```

**Run on specific platform:**
```bash
npm run android  # Run on Android
npm run ios      # Run on iOS (Mac only)
npm run web      # Run on Web
```

**Clear cache and restart:**
```bash
npm start -- --clear
```

## 📁 Project Structure

```
Novus/
├── app/                          # App screens and navigation
│   ├── (auth)/                   # Authentication screens
│   │   ├── login.jsx            # Login screen
│   │   ├── signup.jsx           # Signup with email verification
│   │   └── welcome.jsx          # Welcome/onboarding screen
│   ├── (main)/                   # Main app screens
│   │   ├── home.jsx             # Home screen with course list & search
│   │   ├── courses.jsx          # All courses screen
│   │   └── course-details.jsx   # Course details with chapters
│   ├── _layout.jsx              # Root layout with providers
│   └── index.jsx                # Entry point
├── components/                   # Reusable components
│   ├── ui/                      # UI components (Gluestack)
│   ├── course-list.jsx          # Course list with cards
│   ├── chapter-list.jsx         # Chapter list with icons
│   ├── email-verification-modal.jsx  # Email verification modal
│   ├── header.jsx               # Header component
│   └── setting-menu.jsx         # Settings menu
├── constants/                    # App constants
│   ├── data.js                  # Dummy course data
│   └── theme.ts                 # Theme configuration
├── assets/                       # Images and static files
│   └── images/                  # App images
├── .env                         # Environment variables (not in git)
├── .env.example                 # Environment variables template
└── README.md                    # Project documentation
```

## 🎯 Features Overview

### 🏠 Home Screen
- Welcome header with user avatar
- Search bar with real-time filtering
- Course list with free/premium badges
- Navigation to course details

### 📚 Course Details
- Course thumbnail and description
- Chapter list with duration
- Premium subscription prompt for paid courses
- Back navigation

### 🔐 Authentication
- Signup with email verification
- Email verification modal with 6-digit code
- Secure authentication with Clerk
- Toast notifications for validation

### 💎 Premium System
- Premium course identification
- "Go Premium" call-to-action
- Subscribe button with custom styling
- Chapter preview for all courses

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk authentication publishable key | Yes |

### Color Scheme

Primary brand color: `#488cdf` (Blue)
Secondary color: `#2E5E99` (Dark Blue)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

**Mihsan Alam**

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) - React Native framework
- [Gluestack UI](https://gluestack.io/) - UI component library
- [Clerk](https://clerk.com/) - Authentication solution
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native

## 📞 Support

For support, open an issue in the repository or contact the maintainer.

---

**Made with ❤️ using React Native & Expo**
