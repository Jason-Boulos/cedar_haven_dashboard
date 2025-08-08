🏨 The Cedar Haven — Luxury Hotel Dashboard & Branding Suite
Live Demo: the-cedar-haven.vercel.app

The Cedar Haven is a full-featured hotel management dashboard built with React and Supabase, designed for a luxury resort nestled among the Cedars of Lebanon. It combines robust analytics, dynamic UI architecture, and elegant design systems to support both operational efficiency and brand storytelling.

This project showcases advanced frontend engineering, scalable component architecture, and thoughtful UX — ideal for teams seeking a developer who builds maintainable systems and delivers polished user experiences.

✨ Key Features

📊 Comprehensive Analytics Suite Visualize revenue trends, booking volume, and occupancy rates across custom date ranges.

💰 Sales & Revenue Dashboards Interactive charts displaying total revenue, average booking value, and performance by room type.

🏆 Top Customers & Most Booked Rooms Automatically highlights VIP guests and high-demand cabins using dynamic data queries.

🎨 Dark Mode / Light Mode Support Theme switching powered by CSS variables and styled-components for consistent visual identity.

⚙️ User Settings & Admin Controls Add users, manage preferences, and control access via Supabase Auth.

🧱 Reusable Component System Built with compound components, context providers, and a themeable design system for scalability.

🛠️ Tech Stack
Frontend	Backend	Styling	Data & Auth
React	Supabase	styled-components	Supabase Auth
React Router	Supabase SQL	CSS Variables	Supabase Tables
Chart.js / Recharts		Responsive Grid Layout	
📁 Project Structure
├── public/ # Static assets (favicon, manifest, SEO images) ├── src/ │ ├── analytics/ # Revenue charts, booking trends, top customers logic │ ├── assets/ # Logos, icons, room images, and branding visuals │ ├── components/ # Reusable UI blocks (buttons, modals, cards, inputs) │ ├── context/ # Global state (theme, user, filters) │ ├── hooks/ # Custom React hooks (bookings, theme toggle, auth) │ ├── modules/ # Feature-specific logic (bookings, guests, rooms) │ ├── services/ # Supabase queries, mutations, and API calls │ ├── shared/ │ │ └── ui/ # Core UI primitives (Table, Grid, Input, Card) │ └── styles/ # Global styles, CSS variables, dark/light theme

🔁 Reusability Highlights 🧠 Smart Table Component Located in shared/ui/Table, this dynamic table is a core reusable building block across the dashboard.

Key Capabilities: 🔍 Sorting, Filtering, Pagination Configurable via props for flexible data presentation.

🎯 Custom Row Rendering & Interactivity Supports custom cell formatting, row highlighting, and click actions.

📦 Used Across Multiple Modules
