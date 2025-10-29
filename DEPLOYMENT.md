# Deployment Guide

This guide covers how to deploy your Krishna Sharma portfolio website to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### Custom Domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 🌐 Netlify

### Steps:
1. Build the project locally:
   ```bash
   npm run build
   npm run export  # If using static export
   ```
2. Upload the `out` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 📦 Static Export (Optional)

If you want to deploy to any static hosting service:

1. Update `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. The static files will be in the `out` directory

## 🔧 Environment Variables

If you add any environment variables later (like for a contact form API), make sure to:

1. Add them to your `.env.local` file locally
2. Add them to your deployment platform's environment variables section

## 📝 Pre-deployment Checklist

- [ ] Update personal information in data files
- [ ] Add your actual resume PDF to `public/resume.pdf`
- [ ] Add project images to `public/projects/`
- [ ] Update social media links
- [ ] Test all links and forms
- [ ] Optimize images for web
- [ ] Test responsive design on different devices
- [ ] Check accessibility with screen readers
- [ ] Verify SEO meta tags

## 🎯 Performance Optimization

Before deploying:

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minimize Bundle Size**: Remove unused dependencies
3. **Enable Compression**: Most platforms do this automatically
4. **Use CDN**: Vercel and Netlify provide this by default

## 🔍 SEO Optimization

1. **Meta Tags**: Already configured in `layout.tsx`
2. **Sitemap**: Consider adding a sitemap for better SEO
3. **Analytics**: Add Google Analytics or similar
4. **Open Graph**: Already configured for social sharing

## 📊 Analytics (Optional)

To add analytics:

1. **Vercel Analytics**:
   ```bash
   npm install @vercel/analytics
   ```

2. **Google Analytics**: Add tracking code to `layout.tsx`

## 🚨 Troubleshooting

### Build Errors:
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct
- Ensure all required files exist

### Runtime Errors:
- Check browser console for JavaScript errors
- Verify all external links work
- Test form submissions

### Performance Issues:
- Optimize images and reduce file sizes
- Check for unused CSS and JavaScript
- Use Next.js Image component for optimization

## 📱 Testing

Before going live:
- Test on mobile devices
- Check loading speeds
- Verify all animations work smoothly
- Test contact form functionality
- Check all external links

## 🔄 Continuous Deployment

Set up automatic deployments:
1. Connect your repository to Vercel/Netlify
2. Enable automatic deployments on push to main branch
3. Set up preview deployments for pull requests

Your portfolio is now ready for deployment! 🎉