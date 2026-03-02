# ProductTracker

Production-ready desktop application for tracking product shelf life, reducing household/warehouse waste, and improving daily inventory control.

## Overview

ProductTracker helps users maintain an up-to-date list of products, monitor expiration risks, and quickly act on critical items.

Core value:
- early detection of products that are about to expire;
- clear expiration status across all products;
- fast product intake with structured fields and receipt/photo support;
- analytics for expiration trends and category-level distribution.

## Product Scope

Current scope includes three primary workflows:

1. **My Products**
   - list of products with search, filtering, sorting, and pagination;
   - expiration status indicators (`expired`, `expiring`, `fresh`);
   - operational view for day-to-day product control.

2. **Add Product**
   - product creation form with category/date/quantity fields;
   - support for attaching receipt images/documents;
   - input constraints and validation-ready UX.

3. **Statistics**
   - aggregate cards for status breakdown;
   - historical and categorical visualizations;
   - insights for identifying high-risk categories.

## Target Users

- Individuals managing household groceries.
- Small teams managing shared office or kitchen supplies.
- Small retail/storage operators needing a lightweight expiration tracker.

## Architecture (Current)

- **Frontend:** React + TypeScript + Vite
- **Linting:** ESLint
- **Build:** TypeScript project references + Vite bundling

> Repository currently contains the frontend shell/prototype and is structured for iterative feature delivery.

## Non-Functional Requirements

- **Reliability:** predictable status calculation and date formatting.
- **Usability:** keyboard-friendly navigation and clear visual hierarchy.
- **Accessibility:** status meaning available via text, not color alone.
- **Performance:** responsive table filtering/sorting for daily usage.
- **Maintainability:** reusable UI primitives and unified domain status model.

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
npm install
```

### Run in Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Quality Gates (for each PR)

Before merging, verify:
- loading / empty / error states are implemented where applicable;
- form validation rules are explicit and user-facing;
- keyboard navigation paths are not broken;
- date and status representation is consistent across screens;
- project passes `build` and `lint` locally.

## Delivery & Collaboration

Recommended iteration flow:
1. implement a narrow vertical slice;
2. validate UX states and status logic;
3. run quality gates;
4. submit PR with screenshots for visible UI changes.

## Roadmap (Next)

- Unified design tokens and reusable UI components (`StatusBadge`, `EmptyState`, `FilterBar`).
- Centralized date/status formatting utilities.
- Domain model hardening for expiration lifecycle logic.
- Expanded analytics and historical trend reliability.

## License

Internal/proprietary by default unless replaced with an explicit OSS license.
