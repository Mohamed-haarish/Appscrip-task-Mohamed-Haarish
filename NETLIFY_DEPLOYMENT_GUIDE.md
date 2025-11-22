# Netlify Deployment Guide - Step by Step

## Prerequisites

1. ✅ Your code is pushed to a GitHub repository
2. ✅ Repository is public (or you have Netlify Pro for private repos)
3. ✅ Repository name follows: `Appscrip-task-[your-name]`

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Create Netlify Account

1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Click **"Sign up"** (top right)
3. Choose **"Sign up with GitHub"** (recommended for easy integration)
4. Authorize Netlify to access your GitHub account

### Step 2: Add New Site

1. Once logged in, click **"Add new site"** button
2. Select **"Import an existing project"**
3. Choose **"Deploy with GitHub"**

### Step 3: Connect Repository

1. Netlify will show your GitHub repositories
2. Search for or select: `Appscrip-task-[your-name]`
3. Click on your repository

### Step 4: Configure Build Settings

Netlify will **auto-detect** Next.js and pre-fill these settings:

- **Build command**: `npm run build` ✅
- **Publish directory**: `.next` (or auto-detected) ✅
- **Base directory**: (leave empty) ✅

**Important**: The `netlify.toml` file in your project will automatically configure:
- Next.js plugin
- Node.js version (18)
- Build settings

**You don't need to change anything** - just verify the settings look correct.

### Step 5: Deploy

1. Click **"Deploy site"** button
2. Netlify will:
   - Install dependencies (`npm install`)
   - Run build command (`npm run build`)
   - Deploy your site

### Step 6: Wait for Deployment

- Build process takes 2-5 minutes
- You'll see build logs in real-time
- Status will show: "Building" → "Deploying" → "Published"

### Step 7: Access Your Site

Once deployed, you'll see:
- **Site URL**: `https://random-name-123456.netlify.app`
- You can change this in **Site settings** → **Change site name**

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser for authentication.

### Step 3: Initialize Site

```bash
# Navigate to your project directory
cd A:\Appscriptask1

# Initialize Netlify
netlify init
```

Follow the prompts:
- **Create & configure a new site**: Yes
- **Team**: Select your team (or personal)
- **Site name**: Leave blank for auto-generated, or enter custom name
- **Build command**: `npm run build` (auto-detected)
- **Directory to deploy**: `.next` (auto-detected)

### Step 4: Deploy

```bash
# Deploy to production
netlify deploy --prod
```

Or for a preview deployment:
```bash
netlify deploy
```

## Verification Checklist

After deployment, verify:

- [ ] Site loads without errors
- [ ] Products are displayed correctly
- [ ] Filters work (try selecting filters)
- [ ] Sort functionality works
- [ ] Mobile responsive design works
- [ ] Images load properly
- [ ] No console errors (check browser DevTools)

## Troubleshooting

### Build Fails

**Error**: "Build command failed"

**Solution**:
1. Check build logs in Netlify dashboard
2. Ensure Node.js version is 18+ (configured in `netlify.toml`)
3. Verify all dependencies are in `package.json`
4. Check for TypeScript errors locally: `npm run build`

### Images Not Loading

**Error**: Images show broken or placeholder

**Solution**:
1. Check image URLs in browser console
2. Verify `next.config.js` has correct image domains
3. For placeholder images, they should work automatically
4. If using local images, ensure they're in `/public/images/`

### SSR Not Working

**Error**: Page shows loading state or errors

**Solution**:
1. Verify `getServerSideProps` is exported correctly
2. Check Netlify function logs
3. Ensure Next.js plugin is installed (auto-installed by Netlify)

### Site Not Found

**Error**: 404 or site not accessible

**Solution**:
1. Check deployment status in Netlify dashboard
2. Verify build completed successfully
3. Check site URL is correct
4. Wait a few minutes for DNS propagation

## Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Netlify will provide DNS records to add

## Environment Variables (If Needed)

If you need to add environment variables later:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add variable"**
3. Add key-value pairs
4. Redeploy site

## Continuous Deployment

Netlify automatically:
- ✅ Deploys on every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Shows deployment status in GitHub

## Quick Commands Reference

```bash
# Check deployment status
netlify status

# View site
netlify open

# View logs
netlify logs

# Deploy production
netlify deploy --prod

# Create preview deployment
netlify deploy
```

## Support

- Netlify Docs: https://docs.netlify.com/
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/nextjs/
- Netlify Community: https://answers.netlify.com/

---

**Your site will be live at**: `https://your-site-name.netlify.app`

Share this URL for evaluation! 🚀

