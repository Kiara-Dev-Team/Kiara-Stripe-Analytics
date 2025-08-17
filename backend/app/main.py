from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
from typing import List, Dict, Any
from pydantic import BaseModel
import random

app = FastAPI(title="Stripe Analytics API", version="1.0.0")

# Disable CORS. Do not remove this for full-stack development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class MRRData(BaseModel):
    month: str
    mrr: float
    growth_rate: float

class CustomerMetrics(BaseModel):
    total_customers: int
    new_customers: int
    churned_customers: int
    churn_rate: float

class RevenueBreakdown(BaseModel):
    subscription_revenue: float
    one_time_revenue: float
    total_revenue: float

class DashboardData(BaseModel):
    current_mrr: float
    mrr_growth: float
    mrr_history: List[MRRData]
    customer_metrics: CustomerMetrics
    revenue_breakdown: RevenueBreakdown

def generate_dummy_data() -> DashboardData:
    mrr_history = []
    base_mrr = 45000
    current_date = datetime.now()
    
    for i in range(12, 0, -1):
        month_date = current_date - timedelta(days=30 * i)
        month_str = month_date.strftime("%Y-%m")
        
        growth_factor = 1 + (random.uniform(0.02, 0.08) * (12 - i) / 12)
        mrr = base_mrr * growth_factor + random.uniform(-2000, 3000)
        growth_rate = random.uniform(-5, 15) if i < 12 else 0
        
        mrr_history.append(MRRData(
            month=month_str,
            mrr=round(mrr, 2),
            growth_rate=round(growth_rate, 2)
        ))
    
    current_mrr = mrr_history[-1].mrr
    previous_mrr = mrr_history[-2].mrr if len(mrr_history) > 1 else current_mrr
    mrr_growth = round(((current_mrr - previous_mrr) / previous_mrr) * 100, 2)
    
    customer_metrics = CustomerMetrics(
        total_customers=1247,
        new_customers=89,
        churned_customers=23,
        churn_rate=1.8
    )
    
    revenue_breakdown = RevenueBreakdown(
        subscription_revenue=current_mrr,
        one_time_revenue=12450.00,
        total_revenue=current_mrr + 12450.00
    )
    
    return DashboardData(
        current_mrr=current_mrr,
        mrr_growth=mrr_growth,
        mrr_history=mrr_history,
        customer_metrics=customer_metrics,
        revenue_breakdown=revenue_breakdown
    )

@app.get("/healthz")
async def healthz():
    return {"status": "ok"}

@app.get("/api/dashboard", response_model=DashboardData)
async def get_dashboard_data():
    """Get complete dashboard data including MRR, customer metrics, and revenue breakdown"""
    return generate_dummy_data()

@app.get("/api/mrr", response_model=List[MRRData])
async def get_mrr_history():
    """Get Monthly Recurring Revenue history"""
    data = generate_dummy_data()
    return data.mrr_history

@app.get("/api/customers", response_model=CustomerMetrics)
async def get_customer_metrics():
    """Get customer metrics including total, new, churned customers and churn rate"""
    data = generate_dummy_data()
    return data.customer_metrics

@app.get("/api/revenue", response_model=RevenueBreakdown)
async def get_revenue_breakdown():
    """Get revenue breakdown by subscription and one-time payments"""
    data = generate_dummy_data()
    return data.revenue_breakdown
