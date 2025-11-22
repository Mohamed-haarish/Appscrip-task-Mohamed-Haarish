# Deployment Guide

## GitHub Repository Setup

1. Create a new repository on GitHub with the name: `Appscrip-task-[your-name]`
   - Example: `Appscrip-task-john-doe`
   - Make it public

2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Appscrip task implementation"
   git branch -M main
   git remote add origin https://github.com/yourusername/Appscrip-task-yourname.git
   git push -u origin main
   ```

## Netlify Deployment

### Option 1: Deploy via Netlify Dashboard

1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Sign up or log in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Netlify will auto-detect Next.js settings from `netlify.toml`
6. Click "Deploy site"
7. Your site will be live at `https://your-site-name.netlify.app`

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Environment Variables

No environment variables are required for this project. All data is provided via SSR.

## Build Settings

The project uses the following build settings (configured in `netlify.toml`):
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x (auto-detected)

## Post-Deployment Checklist

- [ ] Verify site is accessible
- [ ] Test responsive design on mobile/tablet
- [ ] Check SEO meta tags in page source
- [ ] Verify schema markup is present
- [ ] Test filter and sort functionality
- [ ] Verify images load correctly
- [ ] Check console for errors

## Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Ensure Node.js version is 18+
- Check that all dependencies are installed
- Review build logs in Netlify dashboard

### Images Not Loading
- Verify image URLs are accessible
- Check `next.config.js` image domain settings
- Ensure placeholder images are working

### SSR Issues
- Verify `getServerSideProps` is properly exported
- Check server logs in Netlify function logs

