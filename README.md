# Productivity Dashboard

A polished, single-page productivity dashboard designed to help you stay focused, organized, and motivated throughout the day. Built with clean HTML, modern CSS, and lightweight JavaScript, this project brings together your daily essentials in one elegant workspace.

## Overview

This dashboard combines:

- live date and time display
- weather information for a personalized daily overview
- a to-do list for tracking tasks and priorities
- a time-block planner for scheduling the day
- motivational quotes to keep momentum high
- a Pomodoro timer for focused work sessions
- theme switching for a more personalized feel

It is a simple static web app, so you can run it immediately without installing a framework or a build tool.

## Features

### 1. Daily overview
The top section displays the current date, time, and local weather conditions, giving you a quick snapshot of the day at a glance.

### 2. Smart task management
The to-do panel lets you:

- add a task title
- add details for the task
- mark it as important
- remove completed items

### 3. Hour-by-hour planner
The planner helps you map your day into time blocks so you can structure work and personal commitments more effectively.

### 4. Motivation boost
A motivational quote is loaded dynamically to keep the experience uplifting and productive.

### 5. Focus timer
The Pomodoro timer supports a default 25-minute work cycle with controls to start, pause, and reset.

### 6. Theme customization
Choose from multiple color themes to create a workspace that matches your mood or style.

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Open-Meteo API for weather data
- Motivational quote API for daily inspiration

## Project Structure

```text
productivityDashboard/
├── index.html
├── style.css
├── script.js
├── README.md
└── ...
```

## Run Locally

Since this is a static web application, there is no package installation required.

### Option 1: Open directly in a browser

- Download or clone the project
- Open `index.html` in your browser

### Option 2: Run a local web server

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

- Weather data and quotes are fetched from external APIs, so an internet connection is required for those features.
- The app is fully front-end based and easy to extend for additional productivity tools.

## Customization Ideas

This project is a great starting point for adding:

- dark/light mode persistence
- localStorage-backed tasks
- weekly goals and streak tracking
- calendar integrations
- sound notifications for Pomodoro sessions

## License

This project is open for personal and educational use.

## Author

Built as a clean productivity-focused dashboard for daily planning and focus management.
