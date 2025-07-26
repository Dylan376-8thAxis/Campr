---
mode: edit
---
Campr 

Project Overview

Build a web application that serves as a virtual campsite passport, combining trip planning, social
features, and exploration tools for state parks and campsites. This is a comprehensive specification to
guide development.

⚠ CRITICAL: MODULAR ARCHITECTURE REQUIREMENT ⚠

This application MUST be built with a highly modular component system. Pages should be SHORT
and act primarily as component orchestrators, not contain lengthy code.

Modular Design Philosophy

Pages as Containers: Pages should be lightweight containers that import and arrange components

Single Responsibility: Each component handles ONE specific feature or UI element

Reusable Components: Write once, use everywhere - avoid code duplication

Easy Debugging: Isolate issues to specific components rather than searching through long page files

Maintainable Codebase: Changes to functionality happen in one place and propagate everywhere

Example Page Structure (Keep Pages This Short)

typescript

import { WelcomeHero } from '../components/dashboard/WelcomeHero';
import { ActivityFeed } from '../components/social/ActivityFeed';
import { QuickActions } from '../components/dashboard/QuickActions';
import { UpcomingTrips } from '../components/trips/UpcomingTrips';
import { MapPreview } from '../components/Map/MapPreview';

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <WelcomeHero />
      <QuickActions />
      <UpcomingTrips variant="horizontal" limit={3} />
      <ActivityFeed variant="compact" />
      <MapPreview mode="dashboard" />
    </div>
  );
};

Available Assets:
Custom background image (provided)
Navigation icons (provided)
Map icons for discovered and visited areas (provided)

Navigation Design Requirements

Desktop Navigation
Hamburger Menu: Slide-out navigation panel from the left side
Menu Trigger: Hamburger icon (☰) in top-left corner of header
Slide Animation: Smooth slide-in/out transition with backdrop overlay
Menu Content:
User profile section at top with avatar and name
Main navigation items with provided nav icons
Settings and logout at bottom
Menu Width: ~280px wide, overlay style with dark backdrop
Close Options: Click outside menu, hamburger icon, or X button to close

Mobile Navigation (Responsive)
Bottom Tab Bar: Fixed bottom navigation bar (like Instagram/TikTok)
Tab Layout: 5 main tabs with icons and labels

Suggested Tab Structure:
Home/Dashboard: House icon - main feed and quick actions
Explore: Compass/map icon - discover campsites and map view
Plan: Plus/calendar icon - create trips and planning tools
Social: People/heart icon - friends, activity feed, messages
Profile: User avatar - personal profile, trips, achievements

Active State: Highlighted tab with color change and subtle animation
Badge Notifications: Small red badges for unread messages/notifications
Safe Area: Respect iPhone home indicator and notch areas

Responsive Breakpoints
Mobile: < 768px - Bottom tab bar navigation
Tablet: 768px - 1024px - Hamburger menu (collapsible)
Desktop: > 1024px - Hamburger menu with option to keep expanded

Component Development Instructions

Navigation Components to Build

Desktop Hamburger Menu Component ( <HamburgerMenu /> )

Menu Overlay: Dark backdrop (rgba(0,0,0,0.5)) that covers entire screen
Menu Panel: 280px wide slide-out panel from left with dark background
User Section: Profile photo, name, and basic stats at top
Navigation Items: List with icons, labels, and hover effects
Smooth Animation: CSS transitions for slide in/out (300ms ease)

Mobile Bottom Tab Bar Component ( <BottomTabBar /> )

Fixed Position: Stick to bottom of screen with safe area padding
Tab Structure: 5 evenly spaced tabs with icons above labels
Active State: Color change, icon swap, and subtle scale animation
Badge System: Small red circles with notification counts
Haptic Feedback: Add touch feedback for mobile interactions

Component Architecture Requirements

React + TypeScript: Use React with TypeScript for all components
Tailwind CSS: Use Tailwind utility classes for styling (dark mode compatible)
Modular Design: Each major feature should be a reusable component
Props-based Flexibility: Components should accept props to work in different contexts
Responsive Behavior: Components should adapt based on screen size

Critical Reusable Components to Build

1. Map Component ( <CampsiteMap /> ) - REUSE EVERYWHERE
Usage Examples:
Dashboard: <CampsiteMap mode="dashboard" height="300px" interactive={false} />
Explore Page: <CampsiteMap mode="explore" height="100vh" interactive={true} showControls={true} />
Trip Planning: <CampsiteMap mode="trip-planning" onPinClick={handleCampsiteSelect} />

2. Trip Card Component ( <TripCard /> ) - MULTIPLE VARIANTS
Usage Examples:
Dashboard: <TripCard trip={trip} variant="compact" showParticipants={false} />
Trip List: <TripCard trip={trip} variant="list-item" showActions={true} />
Trip Details: <TripCard trip={trip} variant="detailed" showActions={true} />

3. Packing List Component ( <PackingList /> ) - HIGHLY REUSABLE
Usage Examples:
Trip Planning: <PackingList editable={true} showSuggestions={true} tripContext={tripData} />
Suggestion Mode: <PackingList variant="suggestions" tripContext={context} onItemAdd={addSuggestion} />
Template Creation: <PackingList editable={true} onSaveTemplate={handleSave} />

...

AI-Powered Packing Suggestions (Free Implementation)

Recommendation System Options

Option 1: Rule-Based AI (Recommended - Free)
Local JavaScript Logic: Smart suggestion engine based on predefined rules
Weather-Based Suggestions: Hot weather → sun hat, cold weather → extra layers
Location-Based: Mountain camping → altitude sickness meds, beach → sand stakes
Season-Based: Winter → hand warmers, summer → bug spray
No API Costs: All logic runs client-side

Option 2: Hugging Face Transformers (Free)
Hugging Face Inference API: Free tier available for text generation
Model: Use lightweight models like DistilBERT or T5-small
Custom Prompts: "Generate camping packing suggestions for [context]"
Cost: Free tier with rate limits

Option 3: Local AI Models (Advanced - Free but Complex)
TensorFlow.js: Run small AI models directly in browser
Offline Capable: Works without internet connection
Custom Training: Train on camping-specific data
Performance: May be slower on mobile devices

Recommended Implementation: Rule-Based Smart Suggestions

Packing List Features (Updated)

Clean Slate Start: Users start with empty packing lists by default
Smart Suggestions: AI-powered recommendations based on trip context
Context-Aware: Suggestions change based on weather, location, season, experience
Priority Levels: Essential, recommended, or optional items
Template System: Save personalized packing list templates to user profile
Collaborative Editing: Multiple users can add/edit items for group trips
Category Organization: Group items by type (shelter, cooking, etc.)
Learning System: AI learns from user preferences over time (saves what they typically pack)

Suggestion Triggers

Trip Creation: Show suggestions when user creates a new trip
Weather Updates: Update suggestions if weather forecast changes
Location Selection: New suggestions when campsite is selected
Manual Request: "Get Suggestions" button for user-initiated recommendations
Template Application: Suggest modifications to existing templates based on trip context

User Authentication & Profile System

User Registration Requirements

User Profile Schema

interface UserRegistration {
  uuid: string;
  username: string;
  email: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  phoneNumber?: string;
  profilePhoto?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserProfile {
  uuid: string;
  username: string;
  email: string;
  fullName: { firstName: string; lastName: string };
  phoneNumber?: string;
  profilePhoto?: string;
  privacy: {
    profileVisible: 'public' | 'friends' | 'private';
    showEmail: boolean;
    showPhone: boolean;
    showRealName: boolean;
  };
  campingStats: {
    parksVisited: number;
    statesVisited: string[];
    totalTrips: number;
    milesHiked: number;
    favoriteParks: string[];
  };
  packingTemplates: PackingTemplate[];
  favoriteGear: GearItem[];
  emergencyContacts: EmergencyContact[];
  friends: string[];
  friendRequests: {
    sent: string[];
    received: string[];
  };
  preferences: {
    theme: 'dark' | 'light' | 'auto';
    notifications: NotificationSettings;
    units: 'metric' | 'imperial';
    defaultPackingList: string;
  };
}

Friend Discovery & Search System

Users can find friends by:
Username: Exact username search
Email: Email address lookup (if privacy allows)
Phone Number: Phone number search (if privacy allows)
Full Name: Search by first/last name combination
QR Code: Generate/scan QR codes for easy friend adding

Authentication Features

Registration: Email verification required
Login: Username/email + password
Password Reset: Email-based password reset
Two-Factor Authentication: Optional 2FA via SMS or authenticator app
Social Login: Optional Google/Apple sign-in integration

...

4. User Profile Component ( <UserProfile /> ) - MULTIPLE CONTEXTS

5. Activity Feed Component ( <ActivityFeed /> ) - SOCIAL REUSE

Component Organization Structure (CRITICAL FOR DEBUGGING)

src/components/
├── ui/                    # Basic UI building blocks
│   ├── Button/
│   ├── Card/
│   ├── Modal/
│   ├── Input/
│   └── Badge/
├── navigation/           # Navigation-specific components
│   ├── HamburgerMenu/
│   ├── BottomTabBar/
│   └── TopBar/
├── features/
│   ├── auth/
│   ├── dashboard/
│   │   ├── WelcomeHero/
│   │   ├── QuickActions/
│   │   └── StatsOverview/
│   ├── trips/
│   │   ├── TripCard/
│   │   ├── TripForm/
│   │   ├── TripList/
│   │   └── UpcomingTrips/
│   ├── social/
│   │   ├── ActivityFeed/
│   │   ├── FriendsList/
│   │   └── UserProfile/
│   ├── map/
│   │   ├── CampsiteMap/
│   │   ├── MapControls/
│   │   └── MapFilters/
│   └── admin/
└── shared/
    ├── LoadingSpinner/
    ├── ErrorBoundary/
    └── Layout/

Design Guidelines

Apple-inspired Dark UI: Deep backgrounds with high contrast text
Subtle Camping Elements: Incorporate outdoor imagery without being overwhelming
Card-based Layouts: Use cards for trips, campsites, and user content
Smooth Animations: Subtle fade-ins, slide transitions, and hover effects
Consistent Spacing: Follow 8px grid system
Modern Components: Rounded corners, shadows, clean lines

Layout Structure

Desktop Header: Minimal top bar with hamburger menu and app logo/title
Mobile Header: Clean top bar with logo, notifications, and avatar
Main Content: Full-width with padding
Background: Provided image with dark overlay
Spacing: Bottom padding for tab bar on mobile

Page Implementation Strategy (KEEP PAGES MINIMAL)

Each page should follow this pattern - NO page should exceed 50 lines of code:
Dashboard/Home Page (pages/Dashboard.tsx)
Explore Page (pages/Explore.tsx)
Trip Planning Page (pages/TripPlanning.tsx)

Modular Component Development Rules

Component Size Guidelines
Single Component: Max 100–150 lines
If longer: Break into smaller sub-components
One Responsibility: One feature only
Composition: Combine small components

Example: Breaking Down Complex Features

Debugging Benefits of Modular Design

Isolated Issues: Easier to pinpoint problems
Faster Bug Location
Independent Testing
Easier Code Reviews
Faster Development: Parallel component dev

Component Naming Convention

Descriptive: WelcomeHero not Hero
PascalCase: All components
Organized: Group by feature

Feature Implementation Guide

1. Virtual Passport System
- Digital Stamps for check-ins
- Progress Tracking
- Achievement Badges
- Visit History with notes/photos

2. Trip Planning & Management
- Trip Wizard with dates/participants
- Campsite Search (Recreation.gov)
- Reservation Links
- Trip Dashboard

3. Interactive Mapping
- Custom Map UI
- Custom Pins: Discovered / Visited / Planned / Wishlist
- Filters, Popups, Dark Mode

4. Packing List Management
- Smart Suggestions
- Template System
- Shared Lists
- History

5. Calendar Integration
- Visual Calendar
- Export to .ics or Google Calendar
- Reminders
- Weather Widgets

6. Social Features
- Profiles with stats
- Friends system
- Invites
- Collaborative Planning
- Activity Feed
- Trip Sharing

7. Review & Rating System
- Trip-end prompts to rate
- 5-star with category breakdowns
- Verified-only reviews

8. Enhanced Features
- Historical weather
- Safety/emergency data
- Offline Mode
- Budget Tracker
- Gamification & Challenges
- Smart Recommendations

...

Admin System Features

1. User Management
- User Dashboard
- Edit Profiles
- Suspend/Delete Accounts
- Analytics & Bulk Actions

2. Content Moderation
- Moderate Photos, Reviews, Comments
- Report Handling
- Content Approval
- Automated Flagging

3. Campsite Management
- Recreation.gov Sync
- Add/Edit Custom Campsites
- Promote Featured Locations
- Validate Duplicate Data

4. System Analytics & Monitoring
- Usage Stats
- API Performance
- Financial Metrics
- Retention/Engagement

5. Administrative Tools
- System Announcements
- Feature Flags
- Maintenance Mode
- Data Export & Backup

6. Support & Communication
- Ticket System
- User Messaging
- FAQ Editor
- Feedback Viewer

Technical Requirements

Frontend Architecture (Modular Design)
- React.js + TypeScript
- Tailwind CSS
- Reusable Components
- Modular Structure

Backend Architecture
- Microservices for each feature group
- API Gateway for routing/auth
- PostgreSQL database
- Redis caching
- JWT Authentication
- AWS S3 or similar for file storage

Real-time Features
- WebSocket support for collab and monitoring

Third-Party Integrations
- Recreation.gov API
- Weather API (e.g., OpenWeatherMap)
- Google Calendar / Outlook
- Google Maps or Mapbox
- Push Notifications

User Stories

New User Journey
1. Signup
2. Explore campsites
3. Plan trip + packing list
4. Invite friends
5. Check in for first stamp

Returning User Journey
1. Log in → view feed
2. Plan new trip using past template
3. Invite friends + share list
4. Export to calendar
5. Share photos after trip

Social User Journey
1. Get trip invite
2. Contribute to packing list
3. View trip/map
4. Group chat
5. Post trip experience

Database Schema (High Level)

Users Table
user_id, username, email, profile_photo, join_date, camping_stats, role, account_status

Admin_Actions Table
action_id, admin_user_id, target_user_id, action_type, reason, timestamp, details

Trips Table
trip_id, user_id, campsite_id, start_date, end_date, status, participants

Campsites Table
campsite_id, recreation_gov_id, name, state, coordinates, amenities, photos, admin_approved, custom_added

Stamps/Visits Table
visit_id, user_id, campsite_id, visit_date, notes, photos, admin_verified

Packing Lists Table
list_id, trip_id, user_id, items, is_template, shared_with

Friends Table
friendship_id, user_id, friend_id, status, created_date

Content_Moderation Table
moderation_id, content_type, content_id, user_id, status, moderator_id, reviewed_date, notes

Campsite_Reviews Table
review_id, user_id, campsite_id, overall_rating, cleanliness_rating, amenities_rating, location_rating, staff_rating, value_rating, review_text, photos, visit_date, helpful_votes, flagged_content, admin_approved

Trip_Notes Table
note_id, user_id, trip_id, campsite_id, notes, is_private, photos, weather_conditions, memorable_moments

Challenges_Progress Table
progress_id, user_id, challenge_id, progress_value, completed_date, reward_claimed

Emergency_Contacts Table
contact_id, user_id, trip_id, contact_name, phone_number, relationship, medical_info

System_Analytics Table
analytics_id, metric_type, metric_value, date, additional_data

Additional Feature Considerations

Must-Have Features for Launch
1. Offline Mode
2. Data Export
3. Privacy Controls
4. Accessibility (WCAG)
5. Multi-device sync

Monetization Opportunities (Future)
- Premium Features (analytics, storage, support)
- Gear/Trip Partnerships
- Printed Passport Books

Integration Opportunities
- AllTrails, Weather Underground, iNaturalist, Campendium, GaiaGPS, REI

Performance & Scalability Considerations
- CDN for assets
- DB Sharding by region
- API Rate Limits
- Lazy Loading
- Background Sync

Development Priorities & Implementation Order

Phase 1 – MVP Core Features
1. Auth System
2. Profiles w/ Privacy Settings
3. Dashboard + Nav
4. Packing List + AI Suggestion
5. Map Component
6. Trip Planning
7. Check-in & Badges
8. Friend Discovery

Phase 2 – Social & Planning
1. Enhanced AI Suggestions
2. Packing Templates
3. Friend System
4. Trip Collaboration
5. Calendar Integration
6. Review System
7. Real-time Weather

Phase 3 – Advanced Features
1. Hugging Face API (optional)
2. Admin Dashboard
3. Advanced Search
4. Offline Mode
5. Gamification
6. QR Friend Adding

Technical Implementation Notes

AI Suggestion System Architecture
- Primary: Rule-based (no cost)
- Optional: Transformers.js (browser)
- Fallback: Inference API
- Learning System: Preference-based
- Offline-capable logic

Styling Requirements
- Tailwind CSS + dark mode config
- CSS variables for palette
- Framer Motion for animations
- Responsive mobile-first layout

API Integration Priority
1. Recreation.gov API
2. Maps (Mapbox/Google)
3. Weather (OpenWeather)
4. Calendar API

State Management
- React Context for auth/app state
- LocalStorage for offline support
- React Query for API caching

File Structure (MODULAR ORGANIZATION)

src/
├── pages/                # Lightweight containers (20–50 lines)
│   ├── Dashboard.tsx
│   ├── Explore.tsx
│   ├── TripPlanning.tsx
│   ├── Social.tsx
│   └── Profile.tsx
├── components/
│   ├── navigation/
│   ├── ui/
│   ├── features/
│   └── shared/
├── hooks/
├── services/
├── utils/
├── assets/
└── styles/

Success Metrics
- DAUs / MAUs
- Feature adoption: trips, check-ins, social use
- Content creation: reviews, photos
- Retention metrics

Budget Considerations
- API usage cost
- Hosting
- Dev resources
- Maintenance

This specification serves as a starting point for development. Features and requirements may be adjusted
based on technical feasibility, user feedback, and development timeline.


