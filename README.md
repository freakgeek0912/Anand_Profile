# Personal Profile Site

A lightweight, responsive, and accessible single-page profile site built with Vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works flawlessly on mobile, tablet, and desktop.
- **Dark/Light Mode**: User preference is stored in `localStorage` and respects OS-level preferences by default.
- **Accessibility**: Built with semantic HTML, keyboard navigable elements, and high color contrast.
- **SEO Ready**: Includes standard meta tags, Open Graph tags, and JSON-LD structured data.
- **Performant**: No heavy styling frameworks or JS libraries; lightning fast load times.
- **CI/CD Ready**: Configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup & Local Development

This project uses plain HTML, CSS, and JS. There is no build step required.

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd profile-site
   ```

2. **Run a local server**:
   You can use any local web server to view the site. For example, using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000` in your web browser.

## Editing Content

- **General Information**: Open `index.html` and edit the text inside tags (e.g., `<h1>`, `<p class="bio">`).
- **Projects**: Scroll to the `<section id="projects">` in `index.html` to add, remove, or modify project cards.
- **Skills**: Scroll to the `<section id="skills">` to update your frontend, backend, and tools proficiencies.
- **Assets**: Place your profile picture and project thumbnails in the `assets/` directory and update the `src` attributes in `index.html`.
- **Styling**: Open `css/style.css` to change the theme colors (in `:root` and `.dark` variables) or tweak layouts.

## Deployment (GitHub Pages)

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically deploy the site whenever you push to the `main` or `master` branch.

### Prerequisites

1. Ensure your repository is pushed to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

Whenever you push a commit, GitHub Actions will build and deploy your site automatically. Your live URL will typically be `https://<your-username>.github.io/<repository-name>/`.

## Maintenance Checklist

- [ ] Add real profile photo (`avatar-placeholder`)
- [ ] Update background/hero SVG graphics
- [ ] Add proper links to real projects and source code
- [ ] Change the resume download link to point to a valid PDF
- [ ] Update `mailto:you@example.com` to your actual email

## Acceptance Checklist

- [x] Responsive layout (tested on mobile, tablet, desktop)
- [x] Theme toggle changes colors and persists in `localStorage`
- [x] Contact section provides a mailto fallback
- [x] Semantic HTML and basic accessibility standards implemented
- [x] GitHub Actions workflow provided for automated GitHub Pages deployment
