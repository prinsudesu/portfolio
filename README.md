# Web Developer Portfolio

A modern, responsive web developer portfolio built with React and optimized for Netlify deployment.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast loading and optimized performance
- 🚀 Ready for Netlify deployment
- 📧 Contact form functionality
- 🎯 SEO optimized

## Technologies Used

- React 18
- CSS3 with modern features
- HTML5
- Netlify for hosting

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment on Netlify

### Option 1: Automatic Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the React app and deploy it

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify's deploy area

### Option 3: Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --prod --dir=build`

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.js` - Update name and title
- `src/components/About.js` - Update about section
- `src/components/Projects.js` - Add your projects
- `src/components/Contact.js` - Update contact information
- `src/components/Footer.js` - Update footer information

### Styling

- Modify CSS files in the `src/components/` directory
- Update colors in CSS custom properties
- Add your own images to the `public` folder

### Content

- Replace placeholder content with your actual projects
- Update skills and technologies
- Add your professional photo
- Customize the color scheme

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
└── public/
    ├── index.html
    ├── manifest.json
    └── _redirects
```

## Performance Optimization

- Images are optimized for web
- CSS is minified in production
- JavaScript is bundled and minified
- Lazy loading for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
