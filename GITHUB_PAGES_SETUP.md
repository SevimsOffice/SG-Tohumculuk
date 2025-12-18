# GitHub Pages Setup Guide for sgtohumculuk.com

## Current Configuration

- ✅ Base path set to `/` for custom domain
- ✅ CNAME file created in `public/CNAME` with `sgtohumculuk.com`
- ✅ GitHub Actions workflow configured for automatic deployment
- ✅ Build outputs to `dist` folder

## Required Steps to Complete Setup

### 1. Configure GitHub Pages Settings

1. Go to your repository: `https://github.com/SevimsOffice/SG-Tohumculuk`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
4. Under **Custom domain**, enter: `sgtohumculuk.com`
5. Check **"Enforce HTTPS"** (will be available after DNS is configured)
6. Click **Save**

### 2. Configure DNS Records

You need to add DNS records at your domain registrar (where you purchased sgtohumculuk.com):

#### Option A: A Records (for apex domain - recommended)
Add these 4 A records pointing to GitHub Pages IPs:

```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600 (or default)
```

#### Option B: CNAME Record (for www subdomain)
If you want to use `www.sgtohumculuk.com`:

```
Type: CNAME
Name: www
Value: sevimsoffice.github.io
TTL: 3600 (or default)
```

### 3. Verify Domain in GitHub

After adding DNS records:
1. Go back to **Settings** → **Pages**
2. GitHub will automatically detect and verify your domain
3. Wait for DNS propagation (can take up to 24 hours, usually 1-2 hours)
4. Once verified, you'll see a green checkmark
5. Enable **"Enforce HTTPS"**

### 4. Test Your Site

Once DNS is configured and verified:
- ✅ `https://sgtohumculuk.com` should work
- ✅ `https://sevimsoffice.github.io/SG-Tohumculuk/` should also work (both URLs work simultaneously)

## Troubleshooting

### Issue: GitHub Pages URL redirects to custom domain and gives 404

**Cause**: CNAME file is present but DNS isn't configured yet.

**Solution**: 
- Configure DNS records as described above
- OR temporarily remove CNAME file until DNS is ready (not recommended)

### Issue: Site shows 404 on custom domain

**Possible causes**:
1. DNS records not yet propagated (wait 1-24 hours)
2. DNS records configured incorrectly
3. GitHub Pages not enabled in repository settings

**Solution**:
- Verify DNS records are correct
- Check GitHub Pages settings → Custom domain shows your domain
- Wait for DNS propagation

### Issue: Assets (CSS/JS/images) not loading

**Cause**: Base path mismatch

**Solution**: Already configured - base path is set to `/` which is correct for custom domain.

## References

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Managing Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

