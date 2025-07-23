# Copilot Instructions: Tevin Morake Portfolio

## Project Vision

A high-performance, responsive portfolio website for Tevin Morake, full-stack developer, built with Next.js. The site will be a single-page application (homepage only) at first, with a focus on modern best practices, responsiveness, and future extensibility.

## Design Files

- **Location:** `/Users/tevin.morake/git/training/portfolio/`
  - Desktop: `portfolio-desktop/`
  - Tablet: `portfolio-tablet/`
  - Mobile: `portfolio-mobile/`
- **Status:** Designs are NOT final. All development must adhere to the initial project prompt and remain flexible to design changes.

## Architectural Principles

- **Framework:** Next.js (latest, App Router preferred)
- **Directory Structure:**
  - `/app` (routing, layouts, server/client components)
  - `/components` (reusable UI)
  - `/data` (mock data, to be replaced by API/CMS)
  - `/styles` (global/component styles)
  - `/utils` (utilities, e.g., Axios instance)
  - `/tests` (unit, integration, E2E)
- **Data Strategy:**
  - Start with internal mock data
  - Structure for easy API/CMS integration (Laravel planned)
  - Use Axios for API calls
- **Performance:**
  - Use Next.js image optimization, code splitting, SSG/SSR as appropriate
  - Responsive design across all breakpoints

## Styling

- **Preferred:** Tailwind CSS (utility-first, performant, responsive)
- **Alternatives:** CSS Modules, Styled-components (if justified)

## Testing

- **E2E:** Cypress (with video recording)
- **Why:** Ensures public-facing site works as intended across devices

## Development Workflow

1. **Section-by-section:**
   - Analyze & plan (review design, outline components, discuss data/responsiveness)
   - Code structure & guidance (Next.js patterns, explain 'why')
   - Implement responsiveness
   - Suggest component tests
   - Review point for feedback
2. **Section Order:**
   1. Header (nav, logo)
   2. Hero
   3. Work/Projects (propose best-practice layout)
   4. Articles/Blogs
   5. Testimonials (with avatar design)
   6. About You (concise, impactful)
   7. Social Media Channels
   8. Contact & Booking (tabs: Contact Form, Book Appointment/Calendly)
   9. Footer
3. **Data:**
   - Mock initially, structure for API/CMS
   - Use `/data` folder or inline in components
4. **API Integration:**
   - Axios instance in `/utils`
   - Ready for Laravel CMS
5. **Performance:**
   - Use Next.js features for speed
   - Optimize images, code splitting
6. **Deployment:**
   - Discuss AWS options (S3, CloudFront, Lambda@Edge, Amplify, ECS/EC2)
   - Pros/cons for portfolio

## Notes

- Always reference this file before making architectural or design decisions.
- Designs are subject to change; flexibility is required.
- All code and workflow must align with the initial project prompt and this instructions file.
