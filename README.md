# Meridian Youth Network (MYN) Website

## Overview

The Meridian Youth Network (MYN) website is a community-focused platform built to showcase MYN’s initiatives, events, and impact. The site highlights youth-led programs, environmental clean-up exercises, advocacy efforts, and community empowerment activities.

The project prioritizes clarity, performance, and scalability while ensuring accurate storytelling and a clean, accessible user experience.

---

## Key Features

- **Events Listing Page**
  - Responsive grid layout for all events
  - Consistent card design with optimized images
  - Navigation to individual event detail pages

- **Event Detail Pages**
  - Full-width banner images with natural image dimensions
  - Rich narrative content for each event
  - Image galleries that preserve original proportions
  - SEO-friendly static pages generated at build time

- **Responsive Design**
  - Mobile-first layout
  - Optimized for tablet and desktop screens

- **Performance Optimized**
  - Static Site Generation (SSG) using Next.js
  - Image optimization with the Next.js Image component
  - Clean, predictable routing using dynamic slugs

---

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Images:** Next.js Image Optimization
- **Routing:** Dynamic routes with `getStaticPaths` and `getStaticProps`

---

## Project Structure

/pages
/events
[slug].tsx // Event detail pages
index.tsx // Home page
events.tsx // Events listing page

/data
eventsData.ts // Centralized event data

/public
/images // Event and program images

/components
Reusable UI components


---

## Events Data Management

All event content is managed centrally in:

Each event is keyed by a **URL-safe slug**:

```ts
"cleaning-exercise-phase-2": {
  title: "Cleaning Exercise — Phase 2",
  date: "November 2024",
  bannerImage: "/images/CleaningExercise2/Cleanup8.jpg",
  content: [...],
  images: [...]
}



## Slug Rules (Important)

Slugs must be:

lowercase

hyphen-separated

URL-safe

Slugs must match exactly between:

eventsData

Events listing page (EventsPage)

Titles are for display only; slugs control routing

Image Handling Rules

To maintain visual consistency and prevent cropping issues:

Event Grid Images

Controlled aspect ratios

Uses object-cover for consistent card layouts

Event Detail Images

Images keep their original aspect ratios

No fixed heights or forced cropping

Uses w-full h-auto for natural scaling

This distinction ensures clean layouts while preserving image integrity.



