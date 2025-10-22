# Previous updates

Going forward information about all updates will be available at: https://github.com/KSJaay/Lunalytics/releases

## 0.10.0

### Overhaul of UI with new features

### 📚 Summary

This might now be the biggest update with the most new features and quality of life updates. About two months ago the repo had a large amount of users who started using the applications. I got a lot of love from users and also a lot of feedback, while fixing issues from feedback and implementing new things I noticed a lot of small issues that started to annoy me when using the application.

I opened up Figma and got to working on some redesigns to hopefully improve the user experience throughout the application. After a few days I started working on `v0.10.0`, this introduces a full overhaul of the UI to make it feel like you're using one application instead of four different applications depending on the page you're on.

And then I got carried away for the last two months and introduced a ton of new features, and probably some bugs. Those will hopefully be fixed overtime as well, but hope you all enjoy this update.

### ✨ New Features

- Overhaul of the design to unify the UX so it feels like one application instead of multiple applications when moving across different pages
- Sneak peaks, an easier way to navigate between pages
- Context menu for monitors (Right click monitor)
- Editing incidents/notifications now uses action bars instead of modals/new pages
- Ability to close incidents
- Ability to delete incident messages
- Menu available on monitor page to show full information about monitor
- Adds ability to create invite to settings page
- Users can now register using invitation codes
- Adds retry limit before sending notifications
  - Reworked notification system to respect retry limit
- Moved permission from incremental numbers to bit flags
- Added `isOwner` column to the user table
- User permissions can now be changed from settings using bit flag switches
- Navigation now renders depending on user permission flags
- Starting to add support for translations using `i18next`
  - Setup `en.json` file and will be moving to a system like `Weblate`, `Crowdin`, or `Tolgee` so the community can help with translations
- Adds support for multiple OAuth platforms
  - Discord
  - Github
  - Google
  - Slack
  - Twitch
- Redesigned the sign in/register journey to combine them into one journey and overall improve user login experience
  - If user email exists it will prompt the user to login using their password
  - If user doesn't exist it will register using that email
- Adds `sso` column to the user table
- Adds a new table for oauth connections
- Updated to React 19
  - Slowly removing PropTypes from React components
  - Slowly moving to TypeScript as React has dropped PropTypes support and it's a lot nicer than PropTypes
- New Modal design
- New design to create monitors
- Ability to add icons for monitors to make them a little bit more identifiable
- Ability to archive incidents
- Adds support for Pushover notifications
- Monitors are alphabetically sorted while I work on a better sorting system
- Monitoring for Docker containers
- Adds support for PUSH monitors

### 🐛 Bug Fixes

- Endpoints how respect user/api token permission bit flags
- Fixes issue with owner transfer not working as expected
- Issues with status page showing incorrect information
- Users weren't able to edit incidents and messages as expected

## 0.9.10

### Bug fixes with monitors, cache and status pages

### Summary

Fixed various bugs that were pointed out by different users in issues and discord server.

### Updates

- Updates setup process to no longer throw an error when database name exists (https://github.com/KSJaay/Lunalytics/issues/95, https://github.com/KSJaay/Lunalytics/issues/121, )
- Heartbeat checks are now done after monitor has been created. This issues issue with UI hanging (https://github.com/KSJaay/Lunalytics/issues/92, https://github.com/KSJaay/Lunalytics/issues/124)
- Removes monitor from status page cache when monitor is deleted (https://github.com/KSJaay/Lunalytics/issues/128)
- Removes monitor from status page when monitor is paused

## 0.9.8

### Adds new useFetch hook to utilise Loading screen

### Summary

Adds new useFetch hook to utilise Loading screen component, along with removing some unused components.

### New Features

- Adds new useFetch hook to utilise Loading screen

### Updates

- Removes unused components

## 0.9.7

### Adds support for JSON Query monitoring type

### Summary

This update adds support for JSON Queries using jsonata to check response match the expected user value, along with adding support for versioned docker tags.

### New Features

- Adds support for JSON Query monitoring type
- Adds support for versioned docker tags (Issue: https://github.com/KSJaay/Lunalytics/issues/115)
- Adds support for unimported so we can delete files that are no longer needed
- Adds jsonata support for JSON Queries

### Updates

- Separates all monitoring types into their own file so it's easier to create new ones
- Fixed issue with monitor page showing the incorrect `TCP` for all monitors that aren't `HTTPS`
- Fixes bug which threw errors when a heartbeat wasn't provided for monitor

## 0.9.6

### Adds support for ping monitor type

### Summary

Adds support for ping monitor type

## 0.9.5

### Adds support to ignore tls certificates

### Summary

Adds support to ignore tls certificates

## 0.9.4

### Updates status pages not working as expected

### Summary

Pretty small update to fix the database tables and issues with metrics not working as expected

### Updates

- Updates metrics not working on status page
- Drops `email` from incident page as it's no longer required

## 0.9.3

### Adds support for users to create API Tokens

### New Features

- Adds support for users to create API Tokens
- You get nice names with tokens if you don't fill one in :D

### Updates

- Fixes issue with autofill not working on the signin page
- Removes `jwtSecret` from setup form as it's no longer required

## 0.9.2

### Adds support for Home Assistant notifications

### Summary

Added Home Assistant notifications

### New Features

- Home Assistant notification type

### Updates

- Added Home Assistant notification type
- Added Home Assistant validator
- Added Home Assistant Modal
- Added Home Assistant Notification Server Logic
- Updated docs

## 0.9.1

### Moves to current components to LunaUI

### Summary

Excited to introduce LunaUI to the project, I've been working on the library for a little while now. While the library isn't complete it cleans up a lot of the UI, improves accessibility (still need to expand), introduces way more variants/designs to mess around with, and unifies design throughout the application.

Slowly going to move all components from Lunalytics to LunaUI, and will also make it publicly available once I've cleaned it up a little bit.

### Updates

- Updates the following components to LunaUI:
  - Input
  - Textarea
  - Tooltip
  - Switch
  - Progress Bar
  - Label
  - Avatar
  - Alert
  - Button
- Fixes various failing end to end tests
- Bugs with status showing "down" when user is checking for any status over 400
- Issues with status page not showing the correct switch states
- Removed validation for monitor names

## 0.9.0

### Adds incident management and updates status pages

### Summary

I put myself through pain with these big PRs 😄. This PR adds ability for users to create incidents that can be displayed on the status page, along with fixing various bugs

### New Features

- Allows users to create incidents for status pages
- Status page now update depending on the latest incident
  - May change to display multiple incidents at once in the future

### Updates

- Adds support for `discordapp.com` for webhooks
- Fixes issues with status page not showing incidents/history properly
- Reworked some various things on the status page and how things are displayed
- Reworked Docker build to further optimize the build
- Mobx now uses `observable.map()` instead of `new Map()`
- Cleaned up table creation on startup
- Updates to uuid v7 for less collision between ids

## 0.8.6

### Fixes notifications and cookies not being set on local

### Summary

This PR fixes some bugs that were pointed out in the following issues. Also updates how docker images are created to support arm64.

Fixes the following issues:

- https://github.com/KSJaay/Lunalytics/issues/74
- https://github.com/KSJaay/Lunalytics/issues/75

### Updates

- User's not being able to log into application on localhost when running in production
- Recovery messages not being sent properly

## 0.8.4

### Updates monitor page layout

### Summary

Fixes some failing tests from previous PR, along with reworking the design for the monitor page. Currently working on an overhaul for the monitor page and how we monitor applications right now. Hopefully should have better analytics soon.

### New features

- Changed the design for the monitor page
  - Monitor page now has the url/ip
  - Status list now shows the latency (May change design)
- Side navigation now has tooltips
- Reworked tooltips to be a lot cleaner and not as buggy
- Updates failing tests from https://github.com/KSJaay/Lunalytics/pull/71

## 0.8.3

### Updates monitor page and new docker script

### Summary

Updates monitor page and new docker script. Bigger updates coming soon to the monitor page

### New features

- Adds average, minimum and maximum latency to monitor page
- Fixes issues with the previous docker script

## 0.8.2

### Updates to a session based login and new permissions system

### Summary

I've updated the login system to use sessions instead of storing JWT within the cookies. I've also updated the permissions system to be more flexible, this will allow us to create a much more dynamic and complex permissions system in the future. In the future, we'll be able to create custom permissions for each user, and also allow users to have different permissions based on the monitors they have access to.

### New features

- Adds session based login system
- Adds new permissions system
- Adds new `Role` and `User` classes
- Adds new `PermissionsBits`, with new permissions
- Server side checks now use `Role` to check if the user has the required permission
- All React components now use `Role` to check if the user has the required permission

## 0.8.1

### Updates to React 19 and other packges

### Summary

I've updated a few packages and React to 19.

## 0.8.0

### Adds support for status pages

### Summary

This has taken way too much time, but status pages are almost ready for release!!! Next update will include incidents and that should complete status pages.

### New features

- Adds support for status pages
- Changes the default url to `/home` instead of `/`
  - You will be redirected to `/home` if you try to access `/`
- Adds support for 8 different status page components, along with various different styles for some components
- Adds incidents table to the database

## 0.7.3

### Cleans up codebase, adds support for headers and body for http monitors

### Summary

I thought I had added support for headers and body for http monitors already, but I totally forgot to add it to the UI. This was bought up in https://github.com/KSJaay/Lunalytics/issues/62. This update adds support for headers and body for http monitors, along with some other small changes.

### Updates

- Adds support for headers and body for http monitors
- Cleans up monitor codebase to make things easier to read
- Adds gif showing UI on the README

## 0.7.2

### Cleans up codebase, adds support for cloning and pausing monitors

### Summary

This update cleans up a few endpoints and moves their code to their own middleware. This way router files are a lot cleaner, and it's easier to look through code for specific endpoints. Along with that, this update adds some features requested in issues https://github.com/KSJaay/Lunalytics/issues/61 and https://github.com/KSJaay/Lunalytics/issues/62.

### Updates

- Fixes issues with chart showing "Invalid Date" instead of time/date format
- Made some changes to make sure timezone is being used for charts
- Added a showFilters option to the monitors to show "1 week" and "1 month" in the menu
- Adds a script to run at midnight to clear out heartbeats older than the given retention period
- Renames the migration scripts from descriptive to version names, this makes my life a little bit easier
- Adds support for cloning monitors
- Adds support for pausing monitors

## 0.7.1

### Fixes issues with migration scripts not working for 0.6.5 and 0.7.0

### Summary

While migrating from 0.6.0 to 0.7.0, I noticed that the migration scripts weren't working for both of 0.6.5 and 0.7.0. This update fixes the scripts so they work for both versions. Will be running more tests on migration scripts in the future to make sure this doesn't happen again.

## 0.7.0

### Adds support for PostgreSQL and new setup system

### Summary

I've been wanting to support multiple databases for a while now, with this update I've added support for PostgreSQL. Along with that, I've removed the CLI system for setting up the application and added a new UI system that is a lot easier to use for most users. Going forward, I'll be adding support for more databases, along with cleaning up the setup system.

### Updates

- Adds support for PostgreSQL
- Removes CLI system for setting up the application
- Adds new UI system for setting up the application
- Fixed issues with certificates not being fetched properly
- Fixed issues with certificates not being able to store all validOn urls and issuers

## 0.6.5

### Removes caching system

### Summary

Removes caching system, and adds column to certificate table for the next check time. I was testing the caching system, and realised it was pretty useless, so for now it's been removed. The difference between response time for caching and non-caching was barely noticeable. There are some calls that have a higher latency, so they may be cached in the future at somepoint.

## 0.6.4

### Moves from chart.js to recharts

## 0.6.3

### Adds new compact mode

### Summary

Adds a new compact mode that shows both the list of monitors and information about the selected monitor on the same page. This is to make it easier to filter/look through larger list of monitors. This is only available for PC/laptops and for mobile/tablet it'll still be the previous view, where the user is taken to another page.

### Updates

- Adds new compact mode
- Updates setting page to remove transfer ownership if you don't have the permission
- Moved scss for pages to /styles/pages directory

## 0.6.2

### New config and filtering system

### Summary

It's a pretty small update, wanted to rework the config system because the old one was a pain to use. Also, wanted to make some more adjustments for mobile users as filtering on the monitor list page was pretty annoying.

### New Features

- Adds new config system
- Changes to `npm run setup` to no longer require user input (Making setup a bit easier)
- Adds `npm run setup:advance` that uses the old config setup system
- Adds a new filtering system for mobile devices, old one was uhh.. rough...
- Adds some guides for notifications

## 0.6.1

### Updates package-lock.json and adds roadmap to readme

### Summary

Updates package-lock.json and adds roadmap to readme

## 0.6.0

### Adds ability to create different notifications

### Summary

This PR introduces notifications for when services are down/recovered. This is the first of two parts for PRs, the second PR will be out later this month. And needs to be merged at the same time!

### New Features

- Allows users to create notifications
- New page to show currently available notifications
- Adds notification support for Discord, Slack, Telegram, and Webhooks
- Adds Collection which extends Map with a few extra functions
- Adds schemas for notifications (To be used in the future)

### Updates

- Reworks folder structure to better share code
- Reworks context store to add computed methods

## v0.5.4

### Cleaning up and moving to canvasjs

### Summary

Originally I was planning on customising some of the icon components depending on user preferences, but for now I've decided to move away from that and just use react-icons library. The idea of custom icons may comeback in the future, but right now I want to focus on the core functionality of Lunalytics. Along with that I've also moved away from using `chart.js` and instead using `canvasjs` for the graphs. This allows a lot more customisation and features for the graphs.

### New Features

- Removed icons
- Added `react-icons`
- Graphs now use `canvasjs` instead of `chart.js`
- You can now zoom in/out on the graphs
- Reduced bundle size from 1.5MB to 410KB

## v0.5.3

### Moving away from moment and compressing images

### Summary

Realised that moment wasn't the best library for date/time manipulation and that it was bloating the bundle size. I've decided to move away from moment and use dayjs instead. Along with that I've also compressed and resized all the default avatars. Each avatar was taking up around 1.5MB, they are now taking all nearly under 100KB. Along with that I've also changed the size from 1024x1024 to 512x512. Planning on compressing/resizing further possibly in the future.

### Updates

- Moved from moment to dayjs
- Compressed images

## v0.5.2

### Moves to router and finally adds error page

### Summary

This one is a pretty small update, as I found some issues while working on some future updates. This update fixes issues with auth and user endpoints not handling errors properly, this was mainly because endpoints weren't using try catch statement. Also, not sure why I was checking paths using if statements but that's now been moved to react router and we're going to be using that going forward.

### Updates

- Adds show password button to the login page
- Adds try catch statements to auth and user endpoints
- Delete `access_token` cookie when authorization middleware throws error
- Removes routes file for monitor
- Adds a cool error page that I thought I had added 3 months ago :)

## v0.5.1

### Fixes issue with certificates and moves utils to shared folder

### Summary

There was a lot of duplicate code for utils in the server and app folders. I've decided to create a shared folder which now has all of the code. While moving the files, some of the validators also needed to be reworked so that they can now be used in both the front and backend code. Also, had to fix some issues with certificates not being updated properly.

### Updates

- Moves all utils from app and server to shared folder
- Changes file paths from utils to shared folder
- Fixes issues with certificates not being updated properly
- Updates handlers to support updated validator responses

### Summary

There was an issue where certificates were not being saved to the database due to the value not being parsed as a string. This has been fixed now.

## v0.5.05

### Replaces Sonner with React-Toastify

### Summary

I've decided to replace Sonner with React-Toastify. Sonner looks really nice but the CSS has been causing issues, for some reason it doesn't get loadded into dist and when I build the application it doesn't get loaded properly.

### Updates

- Replaces Sonner with React-Toastify
- Fixes issue with TCP monitor add/edit not working properly

## v0.5.0

### Overhaul for settings page

### Summary

This has been a pretty big update, and took a lot longer than I thought it was going to. I decided to overhaul the whole settings page as it was pretty bad UX, and the mobile experience was pretty much unusable. The new UI now renders a different journey for PC and mobile. Both journeys now being a lot more user friendly and easier to use (at least in my opinion). While working on the settings page, I also decided to add a few new customisation features and fixed a few bugs I found.

### New Features

- Settings page overhaul
- Account management and personalisation moved to their own pages
- Users can now upload URls for avatars (Still able to select from preset avatars)
- Ability to change user password
- Ability to transfer ownership
- Ability to delete your account (Won't delete monitors you've setup)
- Added three new endpoints:
  - `/api/user/update/password`
  - `/api/user/transfer/ownership`
  - `/api/user/delete/account`
- Adds tooltip component
- `useGoBack` hook to go back a page

### Updates

- Added search bar to status code input
- Fixes issues with certs not being fetched on initial load
- Fixes issues with fetching certs crashes server
- Adds buttons with outlines only
- Adds icons to text input (left and right side)
- Reworks timezones files
- Adds new icons
- Setup test servers
- Fixes issues CSS with UX components
- Fixes issues with random issues on server side

## v0.4.7

### Fixes issues with sonner css not loading

### Summary

While testing production builds, I came across an issue where CSS for Sonner wasn't loading properly. I've decided to import the CSS from their Github repo as a temporary fix until repo owners fix the problem.

## v0.4.4

### Adds middleware for demo mode and kanban endpoint

I wanted to create a demo mode on the website that allows the user to log on without needing to create an account and be verified. Demo mode account has `viewer` permissions and is not able to edit any of the current information on the page. Along with that, I've also added a kanban endpoint for the docs, this isn't a fully customisable kanban endpoint but will still allow me to make it dynamic.

## v0.4.3

### Moving server to EcmaScript Modules (ESM)

### Summary

Moved all the server files from CommonJs to EcmaScript Modules. For anyone who doesn't know the difference between CommonJs and EcmaScript Modules (ESM), CommonJs is the legacy module system and esm is an update that uses new syntax for importing and exporting. The following are the main changes that `I` find the most important:

### Variable exports/imports:

- `module.exports.abc = 'abc';` >> `export const abc = 'abc'`
- `const { abc } = require('./abc')` >> `import { abc } from './.js'`

### Default exports/imports:

- `module.exports = 'xyz'` >> `export default 'xyz'`
- `const xyz = require('./xyz')` >> `import xyz from './xyz.js'`

### Multiple variables exports/imports:

- `module.export = { abc, xyz }` >> `export { abc, xyz }`
- `const mod = require('./vars')` >> `import * as mod = require('./vars.js')`

### Why esm instead of CommonJS

I could have stayed with CommonJs for this project, but for the sake of consistency and the ability to share files between the server and the app I wanted to move the server to esm. Now I will be able to create a shared folder that will store all the duplicate files between the server and app.

## v0.4.2

### Adds alert box and start of docs

Preparing for some future updates, this PR adds an alert box, some icons, and url support for avatars. Along with that, I've also started working on the documentation for Lunalytics, this will help users setup the application and also keep track of features.

### Update

- Adds some new icons
- Adds url support for urls for avatars
- Adds new alert messages
- Adds Vitepress for documentation
- Adds documentation for API endpoints (user and monitor)
- Adds documentation containing all previous updates

## v0.4.1

### Fixes sign/register errors/adds reset password script

Pretty quick update, adds a new script to reset a user's password based on email. Currently, it's a command but may look into sending emails to the user instead in the future.

### Update

- Register page now shows errors when email, username, or password formats are incorrect
- Register page now shows an error if the email is already registered
- Signin page now shows errors when email, or password formats are incorrect
- Signin page now shows errors when email doesn't exist
- Signin page now shows errors when email exists but password is incorrect

### Features

- A user's password can now be reset using `npm run reset:password`

## v0.4.0

### Adds TCP monitoring and new UI for adding/editing monitors

### New features

- Monitor TCP connections
- New UX for adding/editing monitors
- Moved to multiple pages for adding/editing monitor instead of one single page
- Added lastCheck and nextCheck for monitor which will be used in the future
- Added cleanPartialMonitor, cleanMonitor, cleanCertificate, and cleanHeartbeat functions to reduce size of monitors, certificates, and heartbeats
- Added port and type to schema
- Adds migration script for this update

### Updates

- Moved check tcp and http functions into the tools folder for better organisation
- Updated css to better support mobile/tablet devices
- Updates how migration scripts work (no longer set to automatic by default)
- CSS classNames clean ups

## v0.3.12

### Removes .env, adds setup script and load env script

PR to clean up some stuff, along with adding a setup script and load env. This also means this application is no longer in unstable, I've tested everything and it seems to be looking good.

### New features:

- Adds setup script using `inquirer`
- Adds loadEnv script

### Updates

- Updates `README` to include features, how to setup application, requirements and other information.
- Fixes issue with `New` button showing on homepage for all users
- Adds element types for `Dropdown.Item`
- Updates password regex
- Fixes issue with `uptimePercentage` and `averageHeartbeatLatency` updating for monitors

## v0.3.11

### Adds new system for heartbeats and better graph system

### Summary

We're close to being ready for release, everything seems to be working nicely. Hopefully, within the next few updates we should be ready to release 🤞🏽

### New Features

- Cronjobs to check average latency every 5 minutes and 1 hour
- Menu with options to change ping graph to show latest, 1 day, 1 week, or 1 month heartbeats

### Updates

- Adds `PRAGMA foreign_keys` to delete records in heartbeats, and certs when a monitor gets deleted.
- Removes needing `.env` for users to use the application
- Moves cors to development only
- Removed monitorId from heartbeats

## v0.3.10

### Cleans up css and adds some support for mobile

Cleans up css and adds some support for mobile. Mobile support still needs a lot of work but this update cleans up a few of the issues.

## v0.3.9

A### dds context providers and new designs for homepage

### Features

- A MUCH nicer menu on the homepage
- Ability to search/filter monitors
- New layouts available for the homepage
- You can now edit monitor information
- Added context provider for localStorage
- Added new designs button
- New icons

### Updates

- Moved modals into their own folder in components
- Cleaned up propTypes
- Updated some endpoints to return status code instead of redirects
- Updated system to redirect owner to the dashboard instead of the verify page

## v0.3.8

### Updates global store and better heartbeat tracking

Updates the global store to use `Map` instead of objects and arrays. Along with adding `nextCheck` to all the monitors so calls to the server are a little bit more in sync with the heartbeat check. Still needs some improvements but it's working pretty well right now.

## v0.3.7

### Adds new dropdown menu design/logic

While the old dropdown menu worked, there were a few issues with it as clicking outside it wouldn't close the menu, and some random UX issues that occurred. This PR updates the menu to a nicer design, along with some extra features. It also closes down when the user now clicks outside of the dropdown menu.

## v0.3.6

### Adds propTypes and displayName for all components

propTypes now throw errors when they have not been provided, also removed `react-refresh/only-export-components` as components are exported using `mobx observer` and this was showing warnings for those components. Added some custom propType shapes for `userPropType`, `monitorPropType`, `fullMonitorPropType`, `heartbeatPropType`, `certPropType`, and `colorPropType`.

Added `displayName` for better debugging issues.

## v0.3.5

### Adds useContextStore and useTeamStore

Created a new function for `useContextStore` that returns `useContext(ContextStore)` which should clean up the codebase a little bit, along with a new team store that stores the `team` on the manage team page in settings. This means the team is being updated correctly when an admin updates a user's permissions or denies/approves them instead of needing to refresh.

## v0.3.4

### Moves to /auth endpoints and adds hooks/handlers

Cleaning up the code base and moved to /auth endpoints for register and login as we no longer use a form and have CORS issues. Also, added handlers and hooks for register/login to clean up the code base and make it a lot easier to read the code.

## v0.3.3

### Updates register/signin pages

The project is getting to a point where the production build is almost ready. While there are still a few more changes that need to be made, this update changes the register/login page to a new style. Along with updating some config files to prepare for production builds.

### Updates:

- Changes registration from one page to three pages
- Updates the UX for loginpage
- Removed username from register/login journey/database
- Removed redirects from serverside as it was causing issues
- Adds error message to the TextInput
- Removes auth form component
- Adds markdown for information about endpoints

## v0.3.2

### Adds manifest and logos

Adds manifest and logos

## v0.3.1

### Adds basic verify page

Adds basic verify page

## v0.3.0

### Adds support for team members

This update has been a headache and in the works for a few days, there may be still a few bugs that I need to fix. But, this update is a big one for the future of this project. While monitoring is a great feature, there are a lot of monitoring projects that I could have used instead. The main aim of this project is to create a system that allows me to easily share my monitors/status with other people. And allow the ability for them to add/remove their monitors. This update adds the ability to add other users to the project who can manage the project or just as a viewer.

### New features

- Support multiple members
- Ability to change the permission for members
- Adds support for avatars (A little bit of customisation is always nice :D)
- Adds manage team page in settings showing current team members
- New members need to be verified before they can access monitors
- Adds the ability to approve members on the manage team page
- Fetches user on page load from api and stores in `ContextStore`

### New Endpoints

- `/api/user`
- `/api/user/update/username`
- `/api/user/update/avatar`
- `/api/user/team`
- `/api/user/access/decline`
- `/api/user/access/approve`
- `/api/user/access/remove`
- `/api/user/permission/update`

### Updates

- Moves from `userToken` to `access_token`
- Removes `user` cookie
- Users how have columns for `isVerified` and `permissions`
- Moves from inline route functions to middleware route functions
- Adds support for glassmorph for modal
- Renames AlertBox to Modal

## v0.2.4

### Adds user endpoints validation/changes graph height

The username wasn't being validated on the server side, so this PR adds that. Along with reworking how the graph heights work depending on different screen sizes.

## v0.2.3

### Moves endpoints to /api route for future updates

Pretty quick update, moves all the current endpoints to /api route to prepare for some future updates and make life a little easier instead of needing to update in the future.

### Changes:

- `/monitor/add` > `/api/monitor/add`
- `/monitor/delete` > `/api/monitor/delete`
- `/monitor/id` > `/api/monitor/id`
- `/user/monitors` > `/api/user/monitors`
- `/user/update` > `/api/user/update`

## v0.2.2

### Database/Cache overhaul

This update focuses on a total overhaul of the database./caching system. This was mainly to reduce the number of calls being made to the database along with cleaning up how heartbeats are being made/stored. It also updates the system used to

### Changes

- Moves from nanoid to uuid as the id is a little bit cleaner (even though it's longer)
- Logo color changes according to how many monitors are down
- 0 monitors down changes color to primary
- 1 or more monitors down changes color to yellow
- All monitors down will change color to red
- Graph color changes according to the theme
- Overhaul of all database queries and caching

### Bug fixes

- Issue where heartbeat requests were being sent out multiple times (within the same second)
- Settings page wasn't loading as theme was being sent as an object instead of a string
- Issue when adding a new monitor to the database and homepage shows nothing due to errors
- Issue with requesting monitor using ID and it throwing error 501 instead of 404
- Issue with monitors not returning an empty array when no monitors exists

## v0.2.1

### Fixes issues and cleans up codebase

Pretty small update, mainly fixing issues with css and variable names. Along with moving queries into their own files as the `queries.js` file was becoming too big. Lastly, reworked/optimised cache a little bit to make less calls to the database/endpoints.

The next update will mainly focus on an overhaul for cache and optimising the calls to services/database.

### New Logo :D

## v0.2.0

### Adds cert checks, confirmation message, notifications, themes, and time/data formats

### PRs:

This update is mainly a QOL (Quality of Life) update and a few new features. I've decided to move towards a `glassmorphism` style for some of the components. In the future, we'll make this an optional styling system, where users will be able to choose between solid, glassmorphism, and other options. I've also introduced sonner for toast notifications for confirmation and error messages, along with an alert box. Other features/updates are listed below.

### New features

Adds new cooler `dropdown` menu (Still needs work)
Adds `sonner` dependency for toast notifications
Adds `classnames` dependency for conditional classes
Adds `prop-types` dependency to keep track of component props
Adds `husky` dependency to check linting issues before committing
Adds a confirmation `alertbox` when deleting a monitor
Adds `moment` dependency to format time and assign timezones
Adds `hooks` for `themes/colors` and `date/time` formats (Not actually hooks, will make them nicer hooks in the future)
Adds new functions to check `cert status/information`
Adds cert checking to cached monitoring (on startup and then every 24 hours)

### Updates

Changes `scss variables` to `css variables` so they can be used without importing scss globals file
Fixes issue with not `tracking errors` for heartbeats
Moves all the dropdowns from settings to the new dropdown
Moves all the dropdowns from the add monitor to the new dropdown
Changes name for logger from `Logger` to `logger`
Updates `createURL` to append current query parameters

## v0.1.0

### Setups the initial application, login, and registration

This update adds the initial setup for this repository, along with the registration and login page.

### Framework/tools:

React
Vite
Express
SQLite
Knex
JWT

### Routes:

**Endpoint:** /register
**Method:** POST
**Body:** \{ email, username, password \}

**Endpoint:** /signin
**Method:** POST
**Body:** \{ username, password \}
