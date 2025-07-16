# Apai
*Professional API Monitoring Service for Developers*
Apai uses AI to monitor APIs

## 🚀 Project Overview

A comprehensive API monitoring service that tracks uptime, response times, and error rates for developer APIs. Built for developers who need reliable, affordable monitoring without the complexity of enterprise solutions.

**Target Revenue**: $500/month by month 3, $2K/month by month 6  
**Pricing**: $19/month Basic, $49/month Pro  
**Market**: Individual developers, small teams, startups

## 📋 Features Specification

### Core MVP Features
- **URL Monitoring**: Monitor HTTP/HTTPS endpoints with configurable intervals
- **Real-time Dashboard**: Live status overview with visual indicators
- **Response Time Tracking**: Historical performance charts and metrics
- **Uptime Calculation**: 99.9% uptime tracking with monthly reports
- **Alert System**: Email/SMS notifications for downtime and performance issues
- **Basic Analytics**: Response time trends, error rate analysis, uptime statistics

### User Management
- **Authentication**: JWT-based auth with Google OAuth option
- **Subscription Management**: Stripe integration for recurring billing
- **User Dashboard**: Personal monitoring dashboard with all user endpoints
- **Account Settings**: Profile management, notification preferences

### Monitoring Engine
- **Health Checks**: Configurable monitoring intervals (1min, 5min, 15min, 30min, 60min)
- **Multiple Protocols**: HTTP, HTTPS endpoint monitoring
- **Response Validation**: Status code checking, response time thresholds
- **Error Detection**: Timeout handling, connection errors, HTTP error codes
- **Data Retention**: 30 days for Basic, 90 days for Pro

### Notification System
- **Email Alerts**: Immediate downtime notifications
- **SMS Alerts**: Critical alerts via Twilio (Pro plan)
- **Webhook Integration**: Custom webhook endpoints for integrations
- **Alert Policies**: Configurable alert thresholds and escalation

## 🏗️ Technical Architecture

### Tech Stack
```
Frontend: Next.js 14 + TypeScript + Tailwind CSS
Backend: Node.js + Express + TypeScript
Database: PostgreSQL with Prisma ORM
Cache: Redis for session management and caching
Queue: Bull Queue for background monitoring jobs
Authentication: NextAuth.js with JWT
Payments: Stripe for subscription management
Notifications: Nodemailer (email) + Twilio (SMS)
Monitoring: Node-cron for scheduled checks
Charts: Chart.js or Recharts for analytics
Deployment: Vercel (frontend) + Railway/Digital Ocean (backend)
```

### Database Schema
```sql
-- Users table
users (id, email, name, created_at, updated_at, subscription_tier)

-- Monitors table  
monitors (id, user_id, name, url, method, interval, timeout, created_at, status)

-- Monitor results table
monitor_results (id, monitor_id, response_time, status_code, error_message, checked_at)

-- Alerts table
alerts (id, monitor_id, alert_type, message, sent_at, resolved_at)

-- Subscriptions table
subscriptions (id, user_id, stripe_customer_id, plan, status, current_period_end)
```

### API Endpoints
```
Authentication:
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout

Monitors:
GET /api/monitors - Get user monitors
POST /api/monitors - Create new monitor
PUT /api/monitors/:id - Update monitor
DELETE /api/monitors/:id - Delete monitor
GET /api/monitors/:id/stats - Get monitor statistics

Dashboard:
GET /api/dashboard/overview - Dashboard summary
GET /api/dashboard/alerts - Recent alerts
GET /api/dashboard/performance - Performance metrics

Subscriptions:
POST /api/subscriptions/create - Create Stripe subscription
POST /api/subscriptions/cancel - Cancel subscription
GET /api/subscriptions/status - Get subscription status
```

## 📁 Project Structure

```
api-monitor-pro/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── MonitorCard.tsx
│   │   │   ├── MetricsChart.tsx
│   │   │   ├── AlertsList.tsx
│   │   │   └── StatusIndicator.tsx
│   │   ├── monitors/
│   │   │   ├── MonitorForm.tsx
│   │   │   ├── MonitorList.tsx
│   │   │   └── MonitorStats.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Chart.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       └── Layout.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── monitors/
│   │   │   ├── dashboard/
│   │   │   └── subscriptions/
│   │   ├── dashboard/
│   │   │   ├── index.tsx
│   │   │   ├── monitors.tsx
│   │   │   ├── analytics.tsx
│   │   │   └── settings.tsx
│   │   ├── pricing.tsx
│   │   ├── login.tsx
│   │   └── index.tsx
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── database.ts
│   │   ├── monitoring.ts
│   │   ├── notifications.ts
│   │   ├── payments.ts
│   │   └── utils.ts
│   ├── services/
│   │   ├── MonitoringService.ts
│   │   ├── AlertService.ts
│   │   ├── EmailService.ts
│   │   └── PaymentService.ts
│   ├── types/
│   │   ├── monitor.ts
│   │   ├── user.ts
│   │   └── api.ts
│   └── styles/
│       └── globals.css
├── workers/
│   ├── monitoring-worker.ts
│   └── alert-worker.ts
├── scripts/
│   ├── setup-db.ts
│   └── seed-data.ts
└── docs/
    ├── API.md
    ├── DEPLOYMENT.md
    └── MONITORING.md
```

## 🔧 Implementation Phases

### Phase 1: Foundation (Week 1)
**Goal**: Basic authentication and project setup

**Tasks**:
- [ ] Initialize Next.js project with TypeScript
- [ ] Set up Prisma with PostgreSQL
- [ ] Implement NextAuth.js authentication
- [ ] Create basic UI components with Tailwind
- [ ] Set up project structure and routing

**Deliverables**:
- Working authentication system
- Basic dashboard layout
- Database schema implemented
- User registration/login flow

### Phase 2: Core Monitoring (Week 2)
**Goal**: Implement basic monitoring functionality

**Tasks**:
- [ ] Create monitor CRUD operations
- [ ] Implement HTTP endpoint checking logic
- [ ] Set up monitoring worker with node-cron
- [ ] Create monitor results storage
- [ ] Build basic dashboard with monitor status

**Deliverables**:
- Ability to add/edit/delete monitors
- Background monitoring system
- Real-time status updates
- Basic dashboard showing monitor health

### Phase 3: Analytics & Alerts (Week 3)
**Goal**: Add analytics and notification system

**Tasks**:
- [ ] Implement email notification system
- [ ] Create analytics charts and metrics
- [ ] Add alert configuration and management
- [ ] Build comprehensive dashboard
- [ ] Implement response time tracking

**Deliverables**:
- Email alerts for downtime
- Performance charts and analytics
- Alert history and management
- Complete dashboard experience

### Phase 4: Payments & Polish (Week 4)
**Goal**: Add subscription system and final polish

**Tasks**:
- [ ] Integrate Stripe for subscriptions
- [ ] Implement plan limits and restrictions
- [ ] Add SMS notifications via Twilio
- [ ] Polish UI/UX and responsive design
- [ ] Add comprehensive error handling

**Deliverables**:
- Working subscription system
- SMS alerts for Pro users
- Production-ready application
- Deployment and monitoring setup

## 💳 Subscription Plans

### Basic Plan ($19/month)
- Up to 10 monitors
- 5-minute check intervals
- Email notifications
- 30-day data retention
- Basic analytics

### Pro Plan ($49/month)
- Up to 50 monitors
- 1-minute check intervals
- Email + SMS notifications
- 90-day data retention
- Advanced analytics
- Webhook integrations
- Priority support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Redis instance
- Stripe account
- Email service (Gmail/SendGrid)
- Twilio account (for SMS)

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/apai"
REDIS_URL="redis://localhost:6379"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Payments
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Notifications
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
TWILIO_SID="your-twilio-sid"
TWILIO_AUTH_TOKEN="your-twilio-token"
TWILIO_PHONE="your-twilio-phone"
```

### Installation & Setup
```bash
# Clone and install dependencies
git clone <repository-url>
cd api-monitor-pro
npm install

# Set up database
npx prisma migrate dev
npx prisma generate

# Start development server
npm run dev

# Start background workers
npm run worker:dev
```

## 🔄 Background Jobs

### Monitoring Worker
```javascript
// Runs every minute, checks all active monitors
// Updates monitor_results table
// Triggers alerts for failures
// Calculates uptime statistics
```

### Alert Worker
```javascript
// Processes alert queue
// Sends email/SMS notifications
// Handles alert escalation
// Updates alert status
```

## 📊 Success Metrics

### Technical KPIs
- **Monitor Accuracy**: 99.9% uptime detection accuracy
- **Response Time**: <3 seconds for dashboard load
- **Alert Latency**: Notifications sent within 2 minutes of detection
- **System Uptime**: 99.9% service availability

### Business KPIs
- **Monthly Recurring Revenue**: $500 by month 3, $2K by month 6
- **Customer Acquisition Cost**: <$50 per customer
- **Churn Rate**: <5% monthly
- **Customer Support**: <2 hour response time

## 🚀 Deployment Strategy

### Production Stack
- **Frontend**: Vercel for automatic deployments
- **Backend**: Railway or Digital Ocean for API and workers
- **Database**: PostgreSQL on Railway/DO
- **Cache**: Redis on Railway/DO
- **Monitoring**: Built-in system monitoring
- **CDN**: Vercel Edge Network

### Launch Checklist
- [ ] Domain and SSL setup
- [ ] Production environment variables
- [ ] Database backups configured
- [ ] Monitoring and alerts setup
- [ ] Payment processing tested
- [ ] Email deliverability configured
- [ ] Performance optimization
- [ ] Security audit completed

## 📈 Growth Strategy

### Initial Launch
- **Product Hunt**: Launch day strategy
- **Developer Communities**: Reddit, HackerNews, Discord
- **Content Marketing**: Blog about API monitoring best practices
- **SEO**: Target "API monitoring" and related keywords

### Scaling
- **Feature Expansion**: Add more monitoring types (GraphQL, WebSocket)
- **Integrations**: Slack, Discord, PagerDuty integrations
- **Enterprise Features**: Team management, advanced analytics
- **API Access**: Public API for programmatic monitor management

## 🎯 Cursor Implementation Prompts

### Initial Setup Prompt
```
Create a Next.js 14 project with TypeScript for an API monitoring service. Set up:
1. Prisma with PostgreSQL for database
2. NextAuth.js for authentication
3. Tailwind CSS for styling
4. Basic project structure with components, pages, and lib folders
5. Environment variables setup
6. Database schema for users, monitors, monitor_results, and alerts tables
```

### Monitoring System Prompt
```
Implement the core monitoring functionality:
1. HTTP endpoint checking service with configurable intervals
2. Background worker using node-cron for scheduled checks
3. Monitor CRUD operations with API endpoints
4. Real-time dashboard showing monitor status
5. Response time tracking and storage
6. Error handling and logging
```

### Dashboard & Analytics Prompt
```
Build a comprehensive dashboard with:
1. Monitor status cards with real-time updates
2. Performance charts using Chart.js or Recharts
3. Uptime statistics and calculations
4. Alert history and management
5. Responsive design with Tailwind CSS
6. User-friendly monitor management interface
```

### Payment Integration Prompt
```
Integrate Stripe for subscription management:
1. Subscription plans (Basic $19, Pro $49)
2. Customer portal for plan management
3. Usage limits based on subscription tier
4. Webhook handling for subscription events
5. Billing page and payment flow
6. Free trial implementation
```

This comprehensive guide provides everything needed to build a successful API monitoring service using Cursor. The detailed specifications, technical architecture, and implementation phases will help Cursor understand exactly what needs to be built and how to structure the application for success.