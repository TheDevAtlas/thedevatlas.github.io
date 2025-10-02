# TheDevAtlas Website# Astro Starter Kit: Basics



A static HTML/CSS/JavaScript website for TheDevAtlas - Game Developer Hub.```sh

npm create astro@latest -- --template basics

## Overview```



This website has been converted from Astro to pure HTML, CSS, and JavaScript for maximum compatibility and simplicity. It features:> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!



- **Responsive Design**: Works on desktop, tablet, and mobile devices## 🚀 Project Structure

- **Modern CSS**: Uses CSS Grid, Flexbox, and custom properties

- **Interactive JavaScript**: Smooth animations, mobile menu, and search functionalityInside of your Astro project, you'll see the following folders and files:

- **Performance Optimized**: Fast loading with minimal dependencies

```text

## Project Structure/

├── public/

```│   └── favicon.svg

├── index.html              # Home page├── src

├── contact.html            # Contact page  │   ├── assets

├── workshop.html           # Workshop/articles search page│   │   └── astro.svg

├── collections/            # Collections directory│   ├── components

│   ├── index.html         # Collections overview│   │   └── Welcome.astro

│   ├── cloop.html         # Cloop game development collection│   ├── layouts

│   ├── cache.html         # Tools and productivity collection│   │   └── Layout.astro

│   ├── dev-tools.html     # Development tools collection│   └── pages

│   └── machine-learning.html # ML experiments collection│       └── index.astro

├── styles/└── package.json

│   └── site.css           # Main stylesheet```

├── scripts/

│   └── site.js            # Main JavaScript fileTo learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

├── public/                # Static assets

│   ├── images/            # Logo and image assets## 🧞 Commands

│   └── scripts/           # Original scripts (can be removed)

└── package.json           # Project configurationAll commands are run from the root of the project, from a terminal:

```

| Command                   | Action                                           |

## Getting Started| :------------------------ | :----------------------------------------------- |

| `npm install`             | Installs dependencies                            |

### Option 1: Direct File Opening| `npm run dev`             | Starts local dev server at `localhost:4321`      |

Simply open `index.html` in your web browser to view the site locally.| `npm run build`           | Build your production site to `./dist/`          |

| `npm run preview`         | Preview your build locally, before deploying     |

### Option 2: Local Development Server| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

For the best experience (proper relative paths, etc.), use a local server:| `npm run astro -- --help` | Get help using the Astro CLI                     |



1. Install dependencies:## 👀 Want to learn more?

   ```bash

   npm installFeel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open http://localhost:3000 in your browser

### Option 3: Using Python (if available)
```bash
# Python 3
python -m http.server 3000

# Python 2  
python -m SimpleHTTPServer 3000
```

### Option 4: Using any static file server
You can use any static file server like:
- Live Server (VS Code extension)
- `serve` npm package
- Apache/Nginx
- Netlify/Vercel/GitHub Pages

## Features

### Navigation
- Fixed header with smooth scroll navigation
- Mobile-responsive hamburger menu
- Logo hover effects

### Homepage
- Hero section with animated elements
- Project showcase cards with hover effects
- Collections preview
- Newsletter signup form

### Workshop Page
- Real-time search functionality
- Filterable articles and resources
- Responsive card layout

### Collections
- Four themed collections (Cloop, Cache, Dev Tools, ML)
- Individual collection pages with detailed content
- Consistent styling and navigation

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly interface elements

## Customization

### Colors
Main color variables are defined in `styles/site.css`:
```css
:root {
    --primary-blue: #0066ff;
    --light-blue: #4da6ff;
    --dark-blue: #0052cc;
    --black: #0a0a0a;
    --dark-gray: #1a1a1a;
    --gray: #333;
    --light-gray: #666;
    --white: #ffffff;
    --accent: #00d4ff;
}
```

### Content
- Edit HTML files directly to update content
- Update images in the `public/images/` directory
- Modify JavaScript behavior in `scripts/site.js`

## Browser Support

This website supports all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

The website is ready for deployment on any static hosting platform:

### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source as root directory

### Netlify
1. Connect your GitHub repository
2. Set build command: (leave empty)
3. Set publish directory: `.` (root)

### Vercel
1. Import your GitHub repository
2. No build configuration needed

### Traditional Hosting
Upload all files to your web server's public directory.

## Performance

The website is optimized for performance:
- Minimal JavaScript (< 5KB)
- CSS uses efficient selectors
- Images should be optimized for web
- No external dependencies for core functionality

## License

MIT License - feel free to use this as a template for your own projects.