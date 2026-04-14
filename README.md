# Astro Starlight Docker Environment

This project provides a **Docker-based environment** for running an **Astro Starlight documentation site** with an optional **development or production preview mode**.

The setup includes:

- **Astro (Node.js container)** – builds and runs the documentation site.
- **Nginx container** – acts as a reverse proxy to expose the site on port `80`.
- **Docker volumes** – persist dependencies and enable hot reload during development.

This setup allows you to run your documentation site with a single command while supporting both **development** and **production preview** workflows.

---

# Architecture

```
Browser
   │
   ▼
Nginx (Port 80)
   │
   ▼
Astro Container (Port 4321)
   │
   ▼
Astro Starlight Application
```

### Components

| Component       | Purpose                                             |
| --------------- | --------------------------------------------------- |
| Astro Container | Runs the Astro Starlight application                |
| Nginx           | Reverse proxy exposing the site on port 80          |
| start.sh        | Initializes the project and starts the correct mode |
| Docker Volume   | Stores `node_modules` separately                    |

---

# Project Structure

```
project
│
├─ docker-compose.yml
├─ nginx.conf
├─ Dockerfile
│
├─ docker
│   └─ start.sh
│
└─ app
    └─ Astro Starlight project
```

---

# How the System Works

## 1. Container Startup

When you run:

```
docker compose up
```

Docker starts two services:

### Astro container

- Runs Node.js
- Executes `start.sh`
- Builds or runs the site depending on the mode.
  mode is changed in `.env` by changing the value of MODE to either `preview` or `dev`

### Nginx container

- Exposes the site on **port 80**
- Proxies requests to the Astro server.

---

# Astro Runtime Modes

The container supports two runtime modes.

| Mode                 | Command Used                        | Purpose                   |
| -------------------- | ----------------------------------- | ------------------------- |
| Development          | `npm run dev`                       | Live reload while editing |
| Preview (Production) | `npm run build` + `npm run preview` | Production-like preview   |

Astro commands:

| Command           | Description                             |               |
| ----------------- | --------------------------------------- | ------------- |
| `npm run dev`     | Starts the development server           |               |
| `npm run build`   | Builds a production version of the site |               |
| `npm run preview` | Serves the built site locally           | ([GitHub][1]) |

The preview server allows testing the **final built output before deployment**.

---

# Environment Variable Control

The runtime mode is controlled by the `MODE` environment variable. the mode is changed in `.env` file

### docker-compose.yml

```yaml
environment:
  - MODE=${MODE}
```

### Behavior

| MODE      | Result                                      |
| --------- | ------------------------------------------- |
| `dev`     | Runs `npm run dev`                          |
| `preview` | Runs `npm run build` then `npm run preview` |

---

# Running the Project

## Production Preview (Default)

Runs a production-style build.

```
docker compose up
```

Site available at:

```
http://localhost
```

---

## Development Mode

Run the development server with hot reload:

Linux / macOS / Windows

```
MODE=dev
docker compose up
```

---

# Docker Volumes

```
volumes:
  astro_node_modules:
```

Purpose:

- Stores `node_modules`
- Prevents dependency reinstall on every container restart
- Improves startup performance.

---

# Reverse Proxy (Nginx)

The Nginx container forwards requests to Astro.

Example flow:

```
http://localhost
     │
     ▼
nginx:80
     │
     ▼
astro:4321
```

Benefits:

- Standard web port (`80`)
- Future TLS support
- Easy production deployment.

---

# Automatic Project Initialization

If the `app` folder does not contain an Astro project, `start.sh` will automatically create one:

```
npm create astro@latest -- --template starlight/tailwind
```

This generates a ready-to-use **Astro Starlight documentation site**.

Starlight is a documentation theme built on top of Astro designed for technical documentation and guides. ([Starlight][2])

---

# Development Workflow

Typical workflow:

```
docker compose up
```

Edit files inside:

```
app/src/
```

Changes are reflected automatically in **development mode**.

---

# Stopping the Environment

```
docker compose down
```

To remove volumes:

```
docker compose down -v
```

---

# Advantages of this Setup

✔ Consistent development environment
✔ No local Node.js installation required
✔ Automatic project initialization
✔ Supports development and production preview
✔ Easy deployment to servers

---

# Future Improvements

Possible enhancements:

- Production **multi-stage Docker build**
- Automatic **static export**
- HTTPS with **Let's Encrypt**
- CI/CD deployment pipeline

---

# License

MIT

[1]: https://github.com/higress-group/higress-group.github.io?utm_source=chatgpt.com "GitHub - higress-group/higress-group.github.io: Higress Official Website"
[2]: https://starlight.astro.build/getting-started/?utm_source=chatgpt.com "Getting Started | Starlight"
