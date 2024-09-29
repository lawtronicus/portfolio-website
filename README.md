# Lawton Hogan | Portfolio

Welcome to the source code for my personal portfolio website, built using Next.js, React, and Tailwind CSS. This website showcases my professional background, projects, skills, and allows visitors to contact me directly.

## Features

- **Responsive Design**: Fully responsive across different screen sizes.
- **Dark Mode Toggle**: Allows users to switch between light and dark modes, with their preferences saved using localStorage.
- **Smooth Animations**: Utilizes Framer Motion for smooth, scroll-based animations and interactive elements.
- **Project Showcase**: Features a detailed project gallery, with links to live demos and GitHub repositories.
- **Contact Form**: A contact form that supports email submissions, complete with validation and notifications.
- **Section Navigation**: Navigation links highlight the active section as you scroll through the page.

## Technologies Used

- **Next.js** (14.2.13) for server-side rendering and framework functionality.
- **React** (18.2.0) for building the UI.
- **Tailwind CSS** (3.4.12) for styling.
- **Framer Motion** (10.16.16) for animations and smooth transitions.
- **React Email** and **Resend** for handling email communications.
- **React Icons** for iconography.
- **React Hot Toast** for notifications and feedback to users.
- **React Intersection Observer** for detecting when elements are in view.

## Installation and Setup

To run this project locally:

1. Clone the repository:

   ````bash
   git clone https://github.com/your-username/lawton-portfolio.git
   cd lawton-portfolio```
   ````

2. Install the dependencies:

   ````bash
   npm install```
   ````

3. Run the development server:

   ````bash
   npm run dev```

   ````

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

Here's a breakdown of the key files and folders in the project:

- **`layout.tsx`**: Defines the root layout of the website, including the header, footer, theme switch, and global styles.
- **`page.tsx`**: The main homepage component, which displays sections like the intro, projects, skills, experience, and contact.
- **`components/`**:

  - **`about.tsx`**: Renders the "About Me" section, describing my background and transition into full-stack development.
  - **`contact.tsx`**: Displays a contact form for visitors to reach me via email, with validation and feedback using `react-hot-toast`.
  - **`experience.tsx`**: Shows my professional experience using a vertical timeline layout with animations triggered when sections are scrolled into view.
  - **`footer.tsx`**: A simple footer displaying the copyright notice and technologies used to build the website.
  - **`header.tsx`**: A sticky navigation bar with scroll animations and active section highlighting.
  - **`intro.tsx`**: The introductory section, including a profile photo, social media links, and a brief summary of who I am.
  - **`projects.tsx` and `project.tsx`**: A section that showcases my key projects, including descriptions, technologies used, and links to live demos and repositories.
  - **`skills.tsx`**: Displays my skills using a list, each skill fading into view with smooth animations.
  - **`section-divider.tsx`**: A visual divider between sections, animated using Framer Motion.
  - **`theme-switch.tsx`**: A button that toggles between light and dark mode.
  - **`submit-btn.tsx`**: Custom submit button for the contact form, with loading indicators and disabled states.

- **`context/`**:

  - **`theme-context.tsx`**: Manages the theme state (light or dark) and persists the user's preference in `localStorage`.
  - **`react-section-context.tsx`**: Manages the active section of the page, highlighting it in the navigation and ensuring smooth navigation.

- **`lib/`**:
  - **`hooks.tsx`**: Contains hooks for section visibility detection, used to animate elements as they scroll into view.

## Usage

### Key Sections:

- **About**: An overview of my background in education, customer success, and product management, and my transition into full-stack web development.
- **Projects**: A showcase of my major projects, including live demos and repositories.
- **Skills**: A list of my technical skills, with smooth fade-in animations.
- **Experience**: My career timeline, displayed using a vertical timeline with dynamic animations.
- **Contact**: A contact form that allows visitors to send me messages directly via email.

### Navigation

The sticky header allows visitors to easily navigate between sections. The active section is highlighted as they scroll, and the website includes smooth transitions for a polished user experience.

### Dark Mode Toggle

The website supports dark mode, which can be toggled via a button in the bottom-right corner. The user's preference is saved and persists across sessions.
