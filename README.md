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
- **CORS** enabled for cross-origin requests
- **Automatic API documentation** with OpenAPI/Swagger

## 🏗️ Architecture

The application follows a clean separation between frontend and backend:

```
stripe-dashboard-v2/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   └── main.py         # API endpoints and data models
│   ├── pyproject.toml      # Python dependencies
│   └── README.md
└── frontend/               # React frontend
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── services/       # API service layer
    │   ├── types/          # TypeScript type definitions
    │   └── App.tsx         # Main dashboard component
    ├── package.json        # Node.js dependencies
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

- **MetricCard**: Displays key metrics with trend indicators
- **MRRChart**: Interactive line chart for MRR trends
- **Responsive Grid**: Adapts to different screen sizes
- **Loading States**: Smooth user experience during data fetching

## 🚀 Deployment

The application is deployed using:
- **Backend**: Fly.io with automatic FastAPI deployment
- **Frontend**: Static hosting with environment-based API configuration

## 📝 Development Notes

- Uses TypeScript for type safety across the entire frontend
- Follows React best practices with hooks and functional components
- API service layer abstracts backend communication
- Modular component design for easy maintenance and testing
- Tailwind CSS for consistent and responsive styling

## 🔮 Future Enhancements

- Real Stripe API integration
- User authentication and multi-tenant support
- Advanced filtering and date range selection
- Export functionality for reports
- Real-time updates with WebSocket connections
- Additional payment analytics and insights
