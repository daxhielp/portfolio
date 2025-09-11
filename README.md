# Developer Portfolio

A modern, full-stack developer portfolio built with React, TypeScript, Node.js, and Tailwind CSS. Features a responsive design, dark/light mode toggle, contact form with email functionality, and showcases projects with detailed information.

## Features

- **Responsive Design**: Mobile-first approach with beautiful layouts across all devices
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Contact Form**: Backend-powered contact form with email notifications using Nodemailer
- **Project Showcase**: Detailed project displays with technologies, links, and descriptions
- **Smooth Scrolling**: Seamless navigation between sections
- **Modern UI**: Clean, professional design with subtle animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading times and efficient code organization

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling and development server

### Backend
- **Node.js** with Express.js
- **Nodemailer** for email functionality
- **CORS** for cross-origin requests
- **Body-parser** for request parsing

### Development Tools
- **ESLint** for code linting
- **TypeScript** for type safety
- **Concurrently** for running frontend and backend simultaneously
- **Nodemon** for backend development

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/daxhielp/daxhielp.github.io.git
   cd daxhielp.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Update the email configuration:
   ```env
   USER_EMAIL=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=your-email@gmail.com
   PORT=3001
   NODE_ENV=development
   ```

4. **Gmail App Password Setup** (for email functionality)
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Use the generated password in the `EMAIL_PASS` environment variable

## Running the Application

### Development Mode
```bash
npm run dev
```
This starts both the frontend (Vite dev server) and backend (Express server) concurrently.

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Individual Services
```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend
```

### Production Build
```bash
npm run build
npm start
```

## Project Structure

```
developer-portfolio/
├── backend/
│   └── server.js              # Express server with email functionality
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation header with dark mode toggle
│   │   ├── Hero.tsx           # Landing section with introduction
│   │   ├── About.tsx          # About section with skills
│   │   ├── Projects.tsx       # Project showcase grid
│   │   ├── Contact.tsx        # Contact form with validation
│   │   └── Footer.tsx         # Footer with social links
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # React app entry point
│   └── index.css              # Global styles and Tailwind imports
├── .env.example               # Environment variables template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, bio, and profile image
- `src/components/About.tsx` - Skills, experience, and journey
- `src/components/Projects.tsx` - Your projects and details
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Social media and other resource links

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Typography**: Update font families in `tailwind.config.js`
- **Components**: Each component is modular and can be customized independently

### Email Configuration
The contact form uses Nodemailer with Gmail. For other email providers:
1. Update the transporter configuration in `backend/server.js`
2. Refer to [Nodemailer documentation](https://nodemailer.com/) for different providers

## Deployment

### Frontend Deployment (Netlify, Vercel, etc.)
```bash
npm run build
```
Deploy the `dist` folder to your preferred static hosting service.

### Full-Stack Deployment (Heroku, Railway, etc.)
1. Set environment variables on your hosting platform
2. The app automatically serves static files in production mode
3. Use `npm start` as the start command

### Environment Variables for Production
```env
USER_EMAIL=your-production-email@gmail.com
EMAIL_PASS=your-production-app-password
PORT=3001
NODE_ENV=production
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio:
- Open an issue on GitHub
- Contact: daxperugorria@gmailcom

---

**Happy coding!** 🎉