# Quick Fix for Netlify Deployment Error

## The Problem
Netlify can't find the `pages/` directory because files aren't committed/pushed to GitHub yet.

## The Solution (3 Steps)

### Step 1: Add All Files to Git

```bash
# Add all files including the updated netlify.toml
git add .

# Verify pages directory is included
git status
```

You should see `pages/_app.tsx` and `pages/index.tsx` in the list.

### Step 2: Commit Everything

```bash
git commit -m "Initial commit: Complete Next.js project with pages directory"
```

### Step 3: Push to GitHub

```bash
# If you haven't set up remote yet:
git remote add origin https://github.com/yourusername/Appscrip-task-yourname.git
git branch -M main
git push -u origin main

# If remote already exists:
git push
```

### Step 4: Redeploy on Netlify

1. Go to Netlify dashboard
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Or it will auto-deploy when you push

## Verify Before Pushing

Run this to verify structure:

```bash
# Check pages directory exists
ls pages/

# Should show:
# _app.tsx
# index.tsx
```

## What Was Wrong?

The `pages/` directory exists locally but wasn't committed to git. Netlify builds from your GitHub repository, so it needs the files to be there.

## After Pushing

Once pushed, Netlify will:
1. Detect the `pages/` directory
2. Run `npm run build` successfully
3. Deploy your site

Your site will be live at: `https://your-site-name.netlify.app`

