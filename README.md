🌿 ResQFood
A mobile-first web app that helps users find discounted near-expiry food deals at nearby Salling Group stores — reducing food waste, one bargain at a time.
Next.js 16.2.9
React 19.2.4
Deploy: Vercel
License: MIT

📌 Project Information
Item
Details
App name
ResQFood
Team
M2A2
Programme
HackYourFuture Denmark
Project type
Final front-end project
Repository
https://github.com/hackYourFuture-CPH-ResQFood/ResQFood

📸 Screenshot

🧭 What is ResQFood?
Salling Group stores apply daily discounts to products close to their expiry date. This data is available through the Salling Group API, but consumers need a simple and location-aware way to browse these food-waste deals.
ResQFood helps users discover nearby stores with discounted near-expiry products. Users can browse stores, view available food-waste deals, check prices and discounts, and make better shopping decisions while helping reduce food waste.
✨ Core Features
📍 Browse nearby Salling Group stores
🏷️ View discounted near-expiry food products
🕐 See store opening hours
🔍 Filter stores by brand and distance
📱 Use a mobile-first responsive interface
🚀 MVP Scope
The MVP focuses on the smallest useful version of the product.
Users should be able to:
Open the app
View a list of stores
Open a store detail page
View food-waste deals at that store
Navigate through a clean and responsive interface
Optional features after MVP
Map view with store pins
GPS-based distance sorting
Favourite stores saved in localStorage
Advanced filters
Advanced loading animations
🛠️ Tech Stack
Layer
Technology
Purpose
Framework
Next.js 16.2.9 App Router
Routing, layouts, pages, deployment-ready structure
UI
React 19.2.4
Component-based interface
Language
JavaScript
App logic and data handling
Styling
CSS Modules
Scoped component-level styling
Data during development
Mock JSON
Safe development without API rate-limit issues
API layer
Salling Group API
Stores, food-waste deals, holidays
Deployment
Vercel
Hosting and automatic deployment
Version control
Git + GitHub
Team collaboration and pull requests

🎨 Styling Decision
This project uses CSS Modules instead of utility-first frameworks.
Why CSS Modules?
Each component owns its own style file
Styles are scoped locally
Class name conflicts are avoided
The structure is easier for junior developers to understand
Pull requests are easier to review
Example:
components/store/StoreCard/
├── StoreCard.jsx
└── StoreCard.module.css

🚀 Getting Started
Follow these steps to run the project locally.
Prerequisites
Make sure you have the following installed:
Node.js 18 or higher
npm 9 or higher
Git

1. Clone the repository
   git clone https://github.com/hackYourFuture-CPH-ResQFood/ResQFood.git

2. Navigate to the project folder
   cd ResQFood

3. Install dependencies
   npm install

4. Set up environment variables
   Create a local .env file from the example file:
   cp .env.example .env

Add your Salling Group API key:
SALLING_API_KEY=your_api_key_here

Important:
Do not commit .env
Only commit .env.example
Keep real API keys private
Do not expose the API key with the NEXT*PUBLIC* prefix
The SALLING*API_KEY is kept private and accessed server-side only. It does not use the NEXT_PUBLIC* prefix, so it is never exposed to the browser. 5. Start the development server
npm run dev

Open the app in your browser:
http://localhost:3000

📦 Available Scripts
Command
Description
npm run dev
Starts the local development server
npm run build
Builds the app for production
npm start
Runs the production build locally
npm run lint
Checks code quality and linting issues

🌐 APIs Used
Data is provided by the Salling Group Developer API.
API
Used for
Stores API
Store locations, brands, addresses, and opening hours
Food Waste API
Discounted near-expiry products per store
Holidays API
Danish public holidays and adjusted opening hours

Important API rule:
The Food Waste API requires a store ID from the Stores API. Store IDs should come from API or mock store data and should not be hardcoded inside components.
📁 Project Structure
resqfood/
├── app/
│ ├── page.jsx
│ ├── layout.jsx
│ ├── loading.jsx
│ ├── error.jsx
│ └── stores/
│ ├── page.jsx
│ ├── loading.jsx
│ └── [id]/
│ ├── page.jsx
│ └── loading.jsx
│
├── components/
│ ├── ui/
│ │ ├── Button/
│ │ │ ├── Button.jsx
│ │ │ └── Button.module.css
│ │ ├── Card/
│ │ │ ├── Card.jsx
│ │ │ └── Card.module.css
│ │ ├── Badge/
│ │ │ ├── Badge.jsx
│ │ │ └── Badge.module.css
│ │ ├── Skeleton/
│ │ │ ├── Skeleton.jsx
│ │ │ └── Skeleton.module.css
│ │ └── EmptyState/
│ │ ├── EmptyState.jsx
│ │ └── EmptyState.module.css
│ │
│ ├── store/
│ │ ├── StoreCard/
│ │ │ ├── StoreCard.jsx
│ │ │ └── StoreCard.module.css
│ │ ├── StoreList/
│ │ │ ├── StoreList.jsx
│ │ │ └── StoreList.module.css
│ │ └── OpeningHours/
│ │ ├── OpeningHours.jsx
│ │ └── OpeningHours.module.css
│ │
│ ├── product/
│ │ ├── ProductCard/
│ │ │ ├── ProductCard.jsx
│ │ │ └── ProductCard.module.css
│ │ └── ProductList/
│ │ ├── ProductList.jsx
│ │ └── ProductList.module.css
│ │
│ ├── filter/
│ │ ├── BrandFilter/
│ │ │ ├── BrandFilter.jsx
│ │ │ └── BrandFilter.module.css
│ │ └── DistanceFilter/
│ │ ├── DistanceFilter.jsx
│ │ └── DistanceFilter.module.css
│ │
│ ├── layout/
│ │ ├── Header/
│ │ │ ├── Header.jsx
│ │ │ └── Header.module.css
│ │ ├── Nav/
│ │ │ ├── Nav.jsx
│ │ │ └── Nav.module.css
│ │ └── Footer/
│ │ ├── Footer.jsx
│ │ └── Footer.module.css
│ │
│ └── map/
│ └── MapView/
│ ├── MapView.jsx
│ └── MapView.module.css
│
├── hooks/
│ ├── useFetch.js
│ ├── useGeolocation.js
│ └── useFavourites.js
│
├── services/
│ └── salling.js
│
├── mock/
│ ├── stores.json
│ ├── foodWaste.json
│ └── holidays.json
│
├── utils/
│ ├── distance.js
│ ├── formatters.js
│ └── cache.js
│
├── styles/
│ ├── globals.css
│ └── reset.css
│
├── .env.example
├── .gitignore
├── package.json
├── next.config.js
└── README.md

🧩 Component Rule
The team follows this rule:
One component = one folder
Each component folder should contain:
ComponentName/
├── ComponentName.jsx
└── ComponentName.module.css

This makes the project easier to review, easier to maintain, and easier to scale.
🔐 Environment Variables
Variable
Required
Description
SALLING_API_KEY
Yes
Salling Group developer API key

Example .env.example:
SALLING_API_KEY=

Security rules:
Never commit .env
Never share real API keys in GitHub
Keep .env.example committed
Add .env and .env.local to .gitignore
Never use the NEXT*PUBLIC* prefix for private API keys
The SALLING*API_KEY is kept private and accessed server-side only. It does not use the NEXT_PUBLIC* prefix, so it is never exposed to the browser.
🧪 Mock Data Strategy
During the first development phase, the project uses local mock JSON files.
Why?
Prevents unnecessary API calls
Avoids rate-limit problems
Allows all team members to work in parallel
Makes UI development faster
Makes it easier to switch to the real API later
Mock data should match the real Salling API response shape as closely as possible.
Switching from mock to real API required changing only services/salling.js — no component changed at all.
🔌 API Layer Rule
Only the service layer should call fetch().
Correct:
services/salling.js

Avoid calling APIs directly inside:
Components
Pages
CSS files
Utility files
Components should receive data through props or from hooks.
🌿 Git Workflow
The team uses a shared development branch workflow.
Core rule:
No direct push to main or development. Every change must go through a Pull Request.
Branch Strategy
Branch
Purpose
main
Production-ready branch. Stable, protected, and deployed to production after release merge.
development
Shared integration branch. Team features are merged here first and tested together.
development/your-name/feature-name
Short-lived feature, bug, docs, setup, or mock-data branch for one Trello card or small task.

Recommended Workflow
Feature branch
→ Pull Request to development
→ Team testing on development
→ Release Pull Request to main
→ Vercel production deploy

This workflow keeps main stable while allowing the team to integrate and test work regularly on development.
Why this workflow is useful:
Developers can integrate work earlier without risking the production branch.
The team can test combined features on development before main is touched.
main stays clean, stable, and demo-ready.
Vercel production deployment happens only after the release PR is approved.
Branch Naming
All feature branches must follow this format:
development/your-name/feature-name

Examples:
development/reza/vercel-deployment-setup
development/mila/button-component
development/matea/mock-data-api-layer
development/ahmad/css-design-system

Avoid unclear branch names:
development/reza/fix
development/reza/task1
development/reza/my-work
development/Reza/NewFeature

When to Create a New Branch
Create a new branch for every Trello card or a small group of closely related tasks.
Good branch size:
1 component
1 setup task
1 utility function
1 page
1 bug fix
1 documentation update
Example:
development/reza/add-readme-and-env-template

Avoid large branches like:
development/reza/week1-all-tasks

Daily Git Workflow
Before starting work:
git checkout development
git pull origin development
git checkout -b development/your-name/feature-name

During work:
git status
git add .
git commit -m "chore: connect project to Vercel"

Push your branch:
git push origin development/reza/vercel-deployment-setup

Then open a Pull Request from your feature branch into development.
Commit Messages
Use clear and professional commit messages.
Recommended format:
type: short description

Examples:
feat: add store card component
feat: create product list component
fix: correct header spacing on mobile
style: improve button module styles
docs: update README setup instructions
refactor: move API logic to service layer
mock: add sample store data
chore: update project configuration

Type
Use for
feat
New user-visible feature
fix
Bug fix
docs
Documentation changes
style
CSS or visual changes only
refactor
Code restructuring without behaviour change
mock
Mock data changes
chore
Setup, config, dependencies, maintenance
test
Tests

Commit message rules:
Keep it clear and short.
Use present tense.
Focus on one change.
Keep it around 72 characters when possible.
✅ Pull Request Rules
Every Pull Request must be clear enough that another teammate can test it without guessing.
Feature Branch → Development
A feature branch can be merged into development only when:
The feature works locally.
The branch is up to date with development.
The Pull Request has at least 1 reviewer approval.
The code does not break the app.
No sensitive files are committed.
The related Trello card is moved to In Review.
Recommended merge method:
Squash and merge

This keeps the integration history clean and creates one meaningful commit per task.
Development → Main
The development branch can be merged into main only when the team is ready for a stable release.
A release PR from development to main requires:
The team agrees the version is stable.
All important features are tested locally.
No broken pages or console errors remain.
Vercel preview is checked.
At least 2 reviewers approve the PR.
The Scrum Master or Deployment Manager confirms the release.
Recommended merge method:
Merge commit

This gives main a clear release history.
Review Requirements
PR type
Minimum review requirement
Feature branch → development
At least 1 reviewer approval
development → main
At least 2 reviewer approvals
Hotfix → main
2 reviewers if possible, keep it very small

A PR cannot be merged until:
Required reviewer approvals are completed.
All comments are resolved.
The app still works locally.
No sensitive data is committed.
The Trello card shows who reviewed it.
Pull Request Description Template

## What does this PR do?

Briefly explain what was added, changed, or fixed.

## Related Trello Card

Card ID:

## Target Branch

- [ ] development
- [ ] main release

## Type of Change

- [ ] setup
- [ ] feature
- [ ] bug fix
- [ ] refactor
- [ ] style
- [ ] test
- [ ] docs
- [ ] mock data

## How to Test

1. Pull this branch.
2. Run npm install if needed.
3. Run npm run dev.
4. Open the app in the browser.
5. Check that the feature works as expected.

## Screenshots

Add screenshots if this PR changes the UI.

✅ Definition of Done Done
A task is only Done Done when:
The feature works locally.
The code is pushed to a feature branch.
A Pull Request into development is opened.
The PR has a clear title and description.
The feature PR has at least 1 approval.
The Trello card shows reviewer names.
All review comments are resolved.
The code is merged into development.
For release work, development is merged into main with 2 approvals.
Vercel deployment works.
The feature works on a real mobile device.
The Trello card is moved to Done Done.
🚨 Hotfix Rules
A hotfix is an urgent fix for something broken on main.
Hotfix branches use this format:
development/your-name/hotfix-issue-name

Example:
development/reza/hotfix-vercel-deployment

Hotfix rules:
Keep it very small.
Fix only the urgent issue.
Still use a Pull Request.
Get 2 reviewers if possible.
Notify the team on Slack immediately.
🔐 Git Security Rules
Never commit private environment files or API keys.
.gitignore must include:
.env
.env.local
.next
node_modules
.DS_Store

Only .env.example should be committed.
If an API key is accidentally committed:
Stop immediately.
Tell the team and mentors.
Remove the key from the repository.
Rotate the API key.
Check Git history.
Do not continue until fixed.
🗓️ Project Timeline
Date
Milestone
June 14, 2026
Project kickoff, team roles, repo setup, Trello setup
June 16, 2026
Online standup 1
June 21, 2026
Week 2 begins: core features
June 23, 2026
Online standup 2
June 28, 2026
Week 3 begins: quality and polish
June 30, 2026
Online standup 3
July 5, 2026
Code freeze: bug fixes only
July 7, 2026
Online standup 4
July 12, 2026
Project hand-in and graduation demo

👥 Team M2A2
Name
Role
Mila
Scrum Master · QA
Reza
Deployment Specialist · Dependency Manager · Git Support · QA
Matea
Git Specialist · QA Lead
Ahmad
Design Leader

All team members contribute to coding, testing, reviewing, and improving the final product.
📜 Data Partner Credit
Store, food-waste, and holiday data is provided by Salling Group through their developer API.
Salling Group operates major Danish retail brands including Bilka, Føtex, Netto, and Salling.
Developer portal:
https://developer.sallinggroup.com

🤝 Contributing
This project was built as a student capstone project for HackYourFuture Denmark. It is not currently open for external contributions, but feel free to fork it, learn from it, or reach out to the team.
📄 License
This project is open source under the MIT License.

Built with 💚 by Team M2A2 — HackYourFuture Denmark, June–July 2026.
