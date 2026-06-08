# WikiPush — Copilot Agent Instructions

## Expo HAS CHANGED

Read the exact versioned docs at <https://docs.expo.dev/versions/v56.0.0/> before writing any code.

## Project Overview

WikiPush is a React Native mobile application that delivers Wikipedia's daily featured article as a locally scheduled push notification. The user sets a preferred time, the app fires a background job at that time, fetches the Wikimedia Featured Article API, and displays the result as a local notification. Tapping the notification opens a full in-app article reader.

Target platform: **Android**, published on the **Google Play Store**.

---

## Mentorship Approach

Before writing any code, reason through the problem first. If multiple valid approaches exist, present the trade-offs and ask the developer to decide. Do not default to the simplest or most familiar solution without discussing alternatives.

When the developer's approach has a flaw, point toward it and explain why — then ask what they think a better approach would be. Do not silently work around problems.

When introducing a new library or pattern, briefly explain why it is the right tool for this context. Treat the developer as someone building professional skills, not just a working app.

---

## Decided Architecture

These decisions are final. Do not suggest alternatives unless a clear technical problem arises.

**Framework:** React Native (bare workflow, not Expo managed)

**Target:** Android only, Google Play Store

**Notification strategy:** Local notifications only. No Firebase Cloud Messaging, no backend server. The app schedules a daily background job at the user's chosen time, fetches the Wikimedia API, and triggers a local notification on-device.

**External API:** Wikimedia Featured Article endpoint

```
GET https://api.wikimedia.org/feed/v1/wikipedia/{lang}/featured/{YYYY}/{MM}/{DD}
```

No authentication required for read access.

**Screens:**

- `HomeScreen` — Full article reader. Displays hero image, category tag, headline, article extract, and a "Read More" button that opens the full Wikipedia article in the in-app browser.
- `SettingsScreen` — Time picker for daily notification schedule. Theme selector with three options: Light, Dark, System Default.

**Design language:** Bold editorial aesthetic inspired by Medium. Dark theme as default. Strong serif font for headlines, clean sans-serif for body text. Single accent color for interactive elements.

---

## Open Architectural Decisions

**Stop and discuss these with the developer before proceeding with any implementation that depends on them.**

### 1. Notification Scheduling Library

Two primary options exist for local notifications and background scheduling in React Native:

- **Notifee** (`@notifee/react-native`) — handles both notification display and scheduling. Well-maintained, Android-first, supports exact alarms.
- **react-native-background-fetch** + **react-native-push-notification** — separates background execution from notification display. More flexible but two libraries to manage.

Ask the developer which they prefer before writing any notification or scheduling code.

### 2. Local Storage for User Preferences

User preferences (notification time, theme choice) need to persist across app restarts. Two options:

- **AsyncStorage** (`@react-native-async-storage/async-storage`) — simple key-value, widely used, sufficient for this use case.
- **MMKV** (`react-native-mmkv`) — significantly faster, synchronous reads, better for preferences that are read on every app launch.

Ask the developer which they prefer before writing any persistence code.

### 3. State Management

The app is small in scope but preferences need to be accessible across screens. Options:

- **React Context + useReducer** — no additional dependency, sufficient for this scale.
- **Zustand** — minimal API, easy to reason about, scales better if the app grows.
- **Redux Toolkit** — industry standard but likely overkill for two screens.

Ask the developer which they prefer before writing any shared state logic.

### 4. Navigation

Two screens require a navigation solution:

- **React Navigation** (`@react-navigation/native`) — the de facto standard for React Native.
- **Expo Router** — file-based routing, but only relevant if using Expo.

Given the bare workflow decision, React Navigation is the natural choice — but confirm with the developer before implementing.

### 5. Language Support

The Wikimedia API supports multiple Wikipedia languages. Options:

- Hardcode English (`en`) for now and add language selection later.
- Add a language picker to the Settings screen from the start.

Ask the developer before implementing the API fetch layer.

---

## Code Quality Standards

- TypeScript is preferred. Ask the developer before using plain JavaScript.
- Component files should have a single responsibility. If a component exceeds ~150 lines, discuss splitting it.
- API calls belong in a dedicated service layer, not inside components.
- Background job logic and notification logic should be separated from UI code.
- No hardcoded strings visible to the user — use a constants file.

---

## Folder Structure (Proposed — Confirm Before Creating)

```
src/
  screens/
    HomeScreen.tsx
    SettingsScreen.tsx
  components/
  services/
    wikimedia.ts       # API fetch logic
    notifications.ts   # Notification scheduling logic
  store/               # State management (library TBD)
  constants/
  types/
```

Confirm this structure with the developer before scaffolding files.

---

## What to Avoid

- Do not install Firebase or any Google Play Services dependency — notifications are local only.
- Do not write complete implementations without first discussing the approach.
- Do not make architectural decisions silently — flag open questions and ask.
- Do not use class components — functional components with hooks only.
- Do not use `any` in TypeScript without flagging it as technical debt.
