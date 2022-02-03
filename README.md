# Hydrogen Example - Newsletter Signup (Klaviyo)

## Getting started

**Requirements:**

- Node v14+
- Yarn

Rename `.env.example` to `.env` and add Klayivo details.

```bash
yarn
yarn dev
```

## Overview

- `Index.server.jsx` loads a newsletter form component `NewsletterForm.client.jsx`. The form is a client component (ends in `.client.jsx`) because it requires
  client-side stateful interactivity.

- An `api` function is exported from `/src/pages/api/subscriber.server.jsx` which creates an `/api/subscribe` route. This function pulls Klaviyo environment variables from `.env` and communicates with [Klaviyo's API](https://developers.klaviyo.com/en/reference/api-overview).
