# Fix GitHub Authentication Error

## Problem
```
remote: Permission denied to Mohamed-haarish/Appscrip-task-Mohamed-Haarish.git
fatal: unable to access '...': The requested URL returned error: 403
```

## Solution: Use Personal Access Token

GitHub no longer accepts passwords for HTTPS. You need a Personal Access Token.

### Step 1: Create Personal Access Token

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Settings:
   - **Note**: "Netlify Deployment"
   - **Expiration**: 90 days (or your preference)
   - **Scopes**: Check **"repo"** (this gives full repository access)
4. Click **"Generate token"**
5. **IMPORTANT**: Copy the token immediately (you won't see it again!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Clear Stored Credentials

Clear any old/cached credentials:

```powershell
# Clear Windows credential manager
git credential-manager-core erase
# Or if that doesn't work:
cmdkey /list
# Then delete GitHub entries:
cmdkey /delete:git:https://github.com
```

### Step 3: Push with Token

When you run `git push`, it will prompt for credentials:

```powershell
git push -u origin main
```

**When prompted:**
- **Username**: `Mohamed-haarish` (or your GitHub username)
- **Password**: Paste your **Personal Access Token** (not your GitHub password!)

### Alternative: Embed Token in URL (One-time)

If you want to avoid entering it each time:

```powershell
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://YOUR_TOKEN@github.com/Mohamed-haarish/Appscrip-task-Mohamed-Haarish.git

# Then push (no password prompt)
git push -u origin main
```

**⚠️ Security Note**: This stores the token in your git config. Only use if you're comfortable with that.

### Step 4: Verify Push

After successful push, you should see:
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
...
To https://github.com/Mohamed-haarish/Appscrip-task-Mohamed-Haarish.git
 * [new branch]      main -> main
```

## Troubleshooting

### Still Getting 403?

1. **Verify repository exists**: Check https://github.com/Mohamed-haarish/Appscrip-task-Mohamed-Haarish
2. **Check token permissions**: Make sure "repo" scope is selected
3. **Verify username**: Make sure you're using the correct GitHub username
4. **Token expired**: Generate a new token if old one expired

### Wrong Username?

If your GitHub username is different:
```powershell
# Check your actual GitHub username
# Then update remote if needed
git remote set-url origin https://github.com/YOUR-ACTUAL-USERNAME/Appscrip-task-Mohamed-Haarish.git
```

## After Successful Push

✅ Netlify will automatically detect the push
✅ Build will trigger automatically
✅ Your site will deploy!

