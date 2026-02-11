# Cross-Posting Setup Guide

Automated syndication: publish once on your site, auto-post to X and LinkedIn.

## Architecture

```
[Write post in Sanity Studio]
        ↓
[Site rebuilds via webhook]
        ↓
[RSS feed updates at /rss.xml]
        ↓
[Zapier detects new RSS item]
        ↓
[Zapier formats for each platform]
  → X: Title + excerpt (≤280 chars) + link
  → LinkedIn: Title + excerpt + link + hashtags
        ↓
[Zapier sends to Buffer]
        ↓
[Buffer queues and publishes]
```

## Step 1: Verify RSS Feed

Your RSS feed is at `https://markhallam.com.au/rss.xml`. Verify it works by opening it in a browser.

## Step 2: Set Up Buffer

1. Go to [buffer.com](https://buffer.com) and create an account
2. Connect your X (@MarkHallam) and LinkedIn (mark-hallam) accounts
3. Choose the Essentials plan ($5-10/month)

## Step 3: Set Up Zapier

1. Go to [zapier.com](https://zapier.com) and create an account
2. Create a new Zap:

### Trigger
- **App**: RSS by Zapier
- **Event**: New Item in Feed
- **Feed URL**: `https://markhallam.com.au/rss.xml`

### Action 1: Post to X via Buffer
- **App**: Buffer
- **Event**: Add to Buffer
- **Account**: Your X account
- **Message Template**:
  ```
  {{title}} — {{description}}

  {{link}}
  ```
  (Zapier will auto-truncate to 280 chars)

### Action 2: Post to LinkedIn via Buffer
- **App**: Buffer
- **Event**: Add to Buffer
- **Account**: Your LinkedIn account
- **Message Template**:
  ```
  {{title}}

  {{description}}

  {{link}}

  #buildinpublic #AI #solobuilder
  ```

3. Test the Zap with your most recent RSS item
4. Turn on the Zap

## Step 4: Set Up Sanity Webhook (for Vercel revalidation)

1. In your Sanity project dashboard, go to **API** → **Webhooks**
2. Create a new webhook:
   - **Name**: Vercel Revalidation
   - **URL**: `https://markhallam.com.au/api/revalidate`
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type == "blogPost" || _type == "project"`
3. Add the webhook secret to your Vercel environment variables

## Monthly Cost

| Service | Cost |
|---------|------|
| Buffer Essentials | $5-10/month |
| Zapier Starter | $29/month |
| **Total** | **$34-39/month** |

## Alternative (Lower Cost)

Use Buffer's built-in RSS feed feature (if available) or IFTTT ($0) instead of Zapier for simpler posting. Less flexible but free.
