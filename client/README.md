# 🚀 Next.js Hackathon Template

A comprehensive, production-ready Next.js template designed specifically for hackathons and rapid prototyping. This template includes everything you need to build a modern web application with authentication, responsive design, and a scalable architecture.

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based Authentication** - Secure token-based authentication
- **OTP Email Verification** - 6-digit OTP verification for email addresses
- **Password Hashing** - Bcrypt password encryption
- **Protected Routes** - Middleware for route protection
- **Session Management** - Automatic token validation and refresh

### 🎨 Modern UI/UX
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Theme** - System preference detection with manual toggle
- **Material-UI Integration** - Professional component library
- **Smooth Animations** - Framer Motion for delightful interactions
- **Modern Icons** - Lucide React icons throughout

### 🛠️ Tech Stack
- **Next.js 14** - Latest React framework with App Router
- **JavaScript** - Modern ES6+ features
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI (MUI)** - React component library
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **Nodemailer** - Email sending functionality
- **Framer Motion** - Animation library

### 📱 Responsive & Accessible
- **Mobile-First Design** - Optimized for all screen sizes
- **Accessibility** - WCAG compliant components
- **Cross-Browser Support** - Works on all modern browsers
- **Performance Optimized** - Fast loading and smooth interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud)
- Email service (Gmail recommended for development)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/nextjs-hackathon-template.git
cd nextjs-hackathon-template
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup
Copy the example environment file and configure your variables:

```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/hackathon-template
# For production: mongodb+srv://username:password@cluster.mongodb.net/database

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
# Note: For Gmail, use App Password instead of regular password

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-change-this-in-production

# OTP Configuration
OTP_EXPIRY=300000
# 5 minutes in milliseconds

# Application Configuration
NEXT_PUBLIC_APP_NAME=Hackathon Template
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Database Setup
Make sure MongoDB is running locally or use a cloud service like MongoDB Atlas.

### 5. Email Setup (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use this app password in your `EMAIL_PASS` environment variable

### 6. Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   │   └── auth/          # Authentication endpoints
│   ├── dashboard/         # Protected dashboard page
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Homepage
├── components/           # React components
│   ├── auth/            # Authentication components
│   ├── home/            # Homepage components
│   ├── layout/          # Layout components
│   └── theme/           # Theme components
├── lib/                 # Utility libraries
│   ├── auth.js          # Authentication middleware
│   ├── db.js            # Database connection
│   ├── email.js         # Email utilities
│   └── jwt.js           # JWT utilities
├── models/              # Mongoose models
│   ├── User.js          # User model
│   └── OTP.js           # OTP model
├── public/              # Static assets
└── README.md           # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Authentication Flow
1. **Registration**: User fills form → OTP sent to email → Email verification → Account created
2. **Login**: Email/password → JWT token generated → User authenticated
3. **Protected Routes**: JWT validation → User access granted/denied

### Theme System
- **System Preference**: Automatically detects user's OS theme preference
- **Manual Toggle**: Users can manually switch between light/dark themes
- **Persistent**: Theme choice is saved in localStorage
- **Smooth Transitions**: CSS transitions for theme switching

### Responsive Design
- **Mobile-First**: Designed for mobile devices first
- **Breakpoints**: Tailwind's responsive breakpoints
- **Flexible Layout**: Components adapt to screen size
- **Touch-Friendly**: Optimized for touch interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The template works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security Considerations

- **Environment Variables**: Never commit sensitive data
- **JWT Secret**: Use a strong, unique secret in production
- **Database**: Use connection strings with authentication
- **Email**: Use app passwords, not regular passwords
- **HTTPS**: Always use HTTPS in production

## 🎨 Customization

### Colors & Branding
Edit `tailwind.config.js` to customize your color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      }
    }
  }
}
```

### Components
All components are modular and can be easily customized:
- Update `components/layout/Navbar.js` for navigation
- Modify `components/home/Hero.js` for landing page
- Customize `components/theme/ThemeToggle.js` for theme switching

### Styling
- Use Tailwind CSS classes for styling
- Add custom CSS in `app/globals.css`
- Override MUI theme in theme provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Material-UI](https://mui.com/) - React component library
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Check the documentation
- Join our community

---

**Happy Hacking! 🚀**

Built with ❤️ for the hackathon community. 