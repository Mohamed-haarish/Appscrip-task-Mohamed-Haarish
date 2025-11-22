# Quick Guide: Push to GitHub

## The Issue
GitHub is rejecting your push because it's using old/cached credentials.

## Quick Fix (3 Steps)

### Step 1: Create GitHub Personal Access Token

1. Open: **https://github.com/settings/tokens/new**
2. Fill in:
   - **Note**: `Netlify Deployment`
   - **Expiration**: `90 days`
   - **Scopes**: ✅ Check **"repo"** (full control)
3. Click **"Generate token"**
4. **COPY THE TOKEN** (starts with `ghp_...`)

### Step 2: Clear Old Credentials

I've already cleared the cached credential. If you need to do it manually:

```powershell
cmdkey /delete:"LegacyGeneric:target=git:https://github.com"
```

### Step 3: Push with Token

Run this command:

```powershell
git push -u origin main
```

**When Windows Credential Manager pops up:**
- **User name**: `Mohamed-haarish` (or your GitHub username)
- **Password**: **Paste your Personal Access Token** (the `ghp_...` token, NOT your GitHub password)

Click **OK** and it should push successfully!

## Alternative: Use Token in URL (One Command)

If you prefer, you can embed the token directly:

```powershell
# Replace YOUR_TOKEN with the token you copied
$token = "YOUR_TOKEN_HERE"
git remote set-url origin "https://$token@github.com/Mohamed-haarish/Appscrip-task-Mohamed-Haarish.git"
git push -u origin main
```

## Success Looks Like:

```
Enumerating objects: 24, done.
Counting objects: 100% (24/24), done.
Delta compression using up to 8 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (24/24), 15.23 KiB | 2.17 MiB/s, done.
Total 24 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/Mohamed-haarish/Appscrip-task-Mohamed-Haarish.git
 * [new branch]      main -> main
Branch 'main' set up to track remote 'main'.
```

## After Push

✅ Go to Netlify dashboard
✅ Build will auto-trigger
✅ Should build successfully now! 🎉

