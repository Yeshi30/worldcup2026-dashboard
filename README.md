# World Cup 2026 Dashboard

An interactive dashboard analyzing all 104 matches of the 2026 FIFA World Cup — standings, filterable match results, and live charts, built with vanilla JavaScript.

**[Live Demo](https://yeshi30.github.io/worldcup2026-dashboard/)**

<img src="demo.gif">

## Features
- **Scrolling results ticker** — knockout-stage results auto-scrolling across the top, with a frosted-glass background effect
- **Stat overview** — matches played, total goals, goals per match, and penalty shootouts at a glance
- **Sortable standings table** — click any column header to re-sort; includes real team flags for all 48 nations
- **Filterable match list** — filter by round (Group Stage through Final) or search by team name, live as you type
- **Goals-by-round chart** — visualizes how scoring changed across the tournament (built with Chart.js)
- **Win/loss score styling** — winning scores are visually distinct from losing scores in every match tile

## Tech stack
HTML, CSS, JavaScript, Chart.js

## Data
Real match results for the full 2026 FIFA World Cup tournament, including the final (Spain 1-0 Argentina, after extra time).

## Built to practice

- Vanilla JavaScript: DOM manipulation, event delegation, array methods (`.filter()`, `.sort()`, `.reduce()`)
- CSS: flexbox layout, `backdrop-filter` (glassmorphism), CSS animations, `@keyframes`
- Working with real-world data and handling edge cases (e.g. penalty shootout results, incomplete/draw outcomes)
- Separating concerns across `index.html`, `style.css`, and `script.js`

## Project structure
index.html — page structure
style.css — all styling
script.js — data, rendering logic, interactivity
assets/ — images

## Running it
Just open `index.html` in a browser — no build step, no server, no dependencies to install.
