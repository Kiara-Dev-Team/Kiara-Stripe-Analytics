# Stripe Payment Analytics Dashboard

A comprehensive analytics dashboard for monitoring Stripe payment metrics, featuring Monthly Recurring Revenue (MRR) tracking and key business insights.

## 📊 Features

- **Monthly Recurring Revenue (MRR)** tracking with trend visualization
- **Customer Metrics**: Total customers, new customers, churn rate
- **Revenue Breakdown**: Subscription vs one-time revenue analysis
- **Interactive Charts**: Hover tooltips and responsive design
- **Real-time Data**: API-driven dashboard with automatic updates

## 🛠️ Tech Stack

### Frontend
- **TypeScript** + **React** for type-safe component development
- **Tailwind CSS** for responsive styling
- **shadcn/ui** for consistent UI components
- **Recharts** for interactive data visualization
- **Lucide React** for modern icons
- **Vite** for fast development and building

### Backend
- **FastAPI** for high-performance API development
- **Python** with type hints and Pydantic models
- **PostgreSQL** support with psycopg driver
- **uv** for fast Python dependency management
- **CORS** enabled for cross-origin requests
- **Automatic API documentation** with OpenAPI/Swagger

## 🏗️ Architecture

The application follows a clean separation between frontend and backend:

```
Kiara-Stripe-Analytics/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── __init__.py
│   │   └── main.py         # API endpoints and data models
│   ├── tests/              # Backend tests
│   ├── pyproject.toml      # Python dependencies (uv)
│   ├── uv.lock            # Dependency lock file
│   └── README.md
└── frontend/               # React frontend
    ├── src/
    │   ├── components/     # Reusable UI components
    │   │   ├── ui/        # shadcn/ui components
    │   │   ├── MetricCard.tsx
    │   │   └── MRRChart.tsx
    │   ├── services/       # API service layer
    │   ├── types/          # TypeScript type definitions
    │   ├── hooks/          # Custom React hooks
    │   ├── lib/            # Utility functions
    │   └── App.tsx         # Main dashboard component
    ├── package.json        # Node.js dependencies
    ├── components.json     # shadcn/ui configuration
    └── .env               # Environment configuration
```

## 🚀 Getting Started

### Prerequisites
- Python 3.12+
- Node.js 18+
- uv (for Python dependency management)
- npm/yarn/pnpm (for Node.js dependencies)

### Backend Setup

```bash
cd backend
uv sync
uv run fastapi dev app/main.py
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📡 API Endpoints

- `GET /api/dashboard` - Complete dashboard data
- `GET /api/mrr` - Monthly Recurring Revenue history
- `GET /api/customers` - Customer metrics
- `GET /api/revenue` - Revenue breakdown
- `GET /healthz` - Health check endpoint

## 🔧 Configuration

### Environment Variables

**Frontend (.env)**:
```
VITE_API_URL=http://localhost:8000
```

**Backend**:
No additional environment variables required for dummy data mode.

## 📈 Data Integration

Currently uses dummy data for demonstration. To integrate with real Stripe data:

1. Replace the `generate_dummy_data()` function in `backend/app/main.py`
2. Add Stripe API client and authentication
3. Implement actual data fetching from Stripe API
4. Update data models if needed for real Stripe response format

## 🎨 UI Components

### Custom Components
- **MetricCard**: Displays key metrics with trend indicators
- **MRRChart**: Interactive line chart for MRR trends
- **Responsive Grid**: Adapts to different screen sizes
- **Loading States**: Smooth user experience during data fetching

### shadcn/ui Component Library
The project includes a comprehensive set of pre-built UI components:
- **Layout**: Cards, Separators, Aspect Ratio, Resizable panels
- **Navigation**: Breadcrumbs, Command palette, Menubar, Navigation menu, Pagination, Sidebar
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider, Input OTP
- **Feedback**: Alert, Toast, Progress, Skeleton, Hover Card, Tooltip
- **Overlay**: Dialog, Alert Dialog, Drawer, Sheet, Popover, Context Menu, Dropdown Menu
- **Data Display**: Table, Badge, Avatar, Accordion, Collapsible, Tabs, Carousel
- **Utility**: Button, Toggle, Toggle Group, Scroll Area, Form validation

## 🚀 Deployment

The application is deployed using:
- **Backend**: Fly.io with automatic FastAPI deployment
- **Frontend**: Static hosting with environment-based API configuration

## 📝 Development Notes

- **TypeScript**: Full type safety across the entire frontend stack
- **React Best Practices**: Functional components, custom hooks, and modern patterns
- **Component Architecture**: Modular design with shadcn/ui for consistency
- **API Layer**: Clean service abstraction for backend communication
- **Styling**: Tailwind CSS with custom design system integration
- **Development Tools**: ESLint, PostCSS, and Vite for optimal DX
- **Dependency Management**: uv for Python, npm for Node.js
- **Database Ready**: PostgreSQL integration prepared for production use

## 🔮 Future Enhancements

- **Stripe Integration**: Replace dummy data with real Stripe API connections
- **Authentication**: User login and multi-tenant organization support
- **Database Integration**: Full PostgreSQL implementation for data persistence
- **Advanced Analytics**: Custom date ranges, filtering, and drill-down capabilities
- **Export Features**: PDF reports, CSV downloads, and scheduled reports
- **Real-time Updates**: WebSocket connections for live dashboard updates
- **Enhanced Visualizations**: Additional chart types and interactive analytics
- **Mobile Optimization**: Progressive Web App (PWA) capabilities
- **Testing Suite**: Comprehensive unit and integration test coverage
