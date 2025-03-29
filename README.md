# ImadLab

A modern portfolio and blog website for showcasing data engineering and AI projects. Built with Next.js, TailwindCSS, and Framer Motion.

![ImadLab Preview](public/screenshot.png)

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark Mode Support**: Toggle between light and dark themes
- **Modern UI**: Clean, professional interface with animations
- **Portfolio Showcase**: Highlight your projects with filtering capabilities
- **Blog/Lab Notes**: Share insights and technical content
- **Performance Optimized**: Fast loading and rendering

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Animations**: Framer Motion
- **Styling**: TailwindCSS with custom theme configuration
- **Deployment**: Vercel/Netlify (recommended)
- **Dark Mode**: next-themes

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imaddde867/imad-lab.git
   cd imad-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
imadlab/
├── components/         # React components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles and Tailwind config
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Customization

### Theme Configuration

You can customize the color scheme, fonts, and other design elements in the `tailwind.config.js` file:

```js
colors: {
  primary: {
    dark: '#0A0A0A',      // Primary dark background
    light: '#EAEAEA'      // Primary light text
  },
  accent: {
    blue: '#00AFFF',      // Electric blue accent
    teal: '#17C3B2',      // Teal/Cyan for data flow visuals
    gold: '#FFA726'       // Subtle gold for highlights/CTAs
  }
}
```

### Adding Projects

Add new projects by updating the projects array in `pages/portfolio.js`.

### Adding Blog Posts

Add new blog posts by updating the blogPosts array in `pages/blog.js`.

## Deployment

The site can be easily deployed to Vercel, Netlify, or any static site host.

### Deploying to Vercel

```bash
npm install -g vercel
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern portfolio trends in data science and engineering
- Font pairings: Inter, Sora, and Fira Code for a clean technical appearance 