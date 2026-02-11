# Deployment Guide

## Vercel Deployment

### Step 1: Push to GitHub
```bash
cd markhallam-website
git remote add origin https://github.com/YOUR_USERNAME/markhallam-website.git
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import the `markhallam-website` repository
4. Framework Preset: **Next.js** (auto-detected)
5. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `SANITY_API_WRITE_TOKEN`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = `markhallam.com.au`
6. Click "Deploy"

### Step 3: Connect Domain
1. In Vercel project settings → Domains
2. Add `markhallam.com.au`
3. Update your domain's DNS:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com` (for www subdomain)
4. Wait for DNS propagation (usually 5-30 minutes)

## Sanity Setup

### Step 1: Create Sanity Project
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Create a new project called "markhallam"
3. Dataset: `production`
4. Copy the **Project ID**

### Step 2: Get API Token
1. In Sanity project settings → API → Tokens
2. Create a new token with **Editor** permissions
3. Copy the token

### Step 3: Update Environment Variables
Update `.env.local` and Vercel with:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
- `SANITY_API_WRITE_TOKEN` = your editor token

### Step 4: Configure CORS
1. In Sanity project settings → API → CORS origins
2. Add `http://localhost:3000` (development)
3. Add `https://markhallam.com.au` (production)

### Step 5: Seed Content
Access Sanity Studio at `https://markhallam.com.au/studio` and create:
- Site Settings (singleton document)
- Learn Page (singleton document)
- Projects (LunarPDF, Curble, etc.)
- Blog Posts

## Resend Setup

1. Go to [resend.com](https://resend.com) and create an account
2. Add and verify your domain (`markhallam.com.au`)
3. Create an API key
4. Add `RESEND_API_KEY` to `.env.local` and Vercel

## Plausible Analytics Setup

1. Go to [plausible.io](https://plausible.io) and create an account
2. Add site: `markhallam.com.au`
3. The script tag is already in the layout — no code changes needed
4. Analytics will start appearing once the site is live

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Sanity Studio accessible at /studio
- [ ] Waitlist form submits successfully
- [ ] RSS feed valid at /rss.xml
- [ ] Sitemap valid at /sitemap.xml
- [ ] Open Graph previews work (test with https://www.opengraph.xyz/)
- [ ] Plausible tracking active
- [ ] Mobile responsive
- [ ] Lighthouse score 95+
