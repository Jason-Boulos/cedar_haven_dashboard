🏨 The Cedar Haven — Luxury Hotel Dashboard & Branding Suite
[Live Demo](https://the-cedar-haven.vercel.app)

The Cedar Haven is a feature-rich hotel management dashboard built with React and Supabase, tailored for a luxury resort nestled among the ancient Cedars of Lebanon. It seamlessly blends operational efficiency with immersive brand storytelling, combining powerful analytics, dynamic UI architecture, and elegant design systems.

This project demonstrates advanced frontend engineering, scalable component architecture, and thoughtful UX design — making it ideal for teams seeking a developer who can deliver maintainable systems and polished user experiences.

✨ Key Features
📅 Booking & Guest Management
Real-time tracking of reservations, guest profiles, and cabin availability.

Advanced filtering and sorting to streamline operations.

📊 Analytics Suite
Visualize revenue trends, booking volumes, and occupancy rates.

Flexible custom date range selection for tailored insights.

💰 Sales & Revenue Dashboards
Interactive charts for total revenue, average booking value, and performance by room type.

🏆 VIP & High-Demand Insights
Automatically identifies top customers and most-booked cabins using dynamic queries.

🎨 Dark & Light Mode
Theme switching powered by CSS variables and styled-components for a consistent brand experience.

⚙️ User Settings & Admin Controls
Role-based access management via Supabase Auth.

Manage user accounts, preferences, and permissions in one place.

🧱 Scalable Component System
Built with compound components, context providers, and a themeable design system for long-term scalability.

🛠️ Tech Stack

| Frontend            | Backend      | Styling                | Data & Auth     |
| ------------------- | ------------ | ---------------------- | --------------- |
| React               | Supabase     | styled-components      | Supabase Auth   |
| React Router        | Supabase SQL | CSS Variables          | Supabase Tables |
| Chart.js / Recharts |              | Responsive Grid Layout |                 |


 📁 Project Structure
 
public/           # Static assets (favicon, manifest, SEO images)
src/
  analytics/      # Revenue charts, booking trends, top customer logic
  assets/         # Logos, icons, room images, branding visuals
  components/     # Reusable UI blocks (buttons, modals, cards, inputs)
  context/        # Global state (theme, user, filters)
  hooks/          # Custom hooks (bookings, theme toggle, auth)
  modules/        # Feature-specific logic (bookings, guests, rooms)
  services/       # Supabase queries, mutations, and API calls
  shared/ui/      # Core UI primitives (Table, Grid, Input, Card)
  styles/         # Global styles, CSS variables, dark/light theme


🔁 Reusability Highlight: Smart Table Component
Location: shared/ui/Table

A dynamic and reusable table component used throughout the dashboard.

Key Capabilities:

🔍 Sorting, filtering, and pagination via simple props.

🎯 Custom row rendering with click actions.

📦 Cross-module usage in bookings, guests, and analytics views.
