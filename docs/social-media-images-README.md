# Open Graph Images for Social Media

## 🎯 Current Status

Your Open Graph metadata is now configured to use your existing profile image (`/about/abuti.jpg`) from your hero section. This will show up in social media previews immediately.

## 📱 How It Works

When someone shares your website link, social media platforms will display:
- **Title**: "Tevin Morake - Full-Stack Developer & Tech Innovator"
- **Description**: Your professional summary
- **Image**: Your profile photo from `/about/abuti.jpg`

## 🛠️ Creating Custom Open Graph Images (Optional)

For even better social media previews, you can create custom Open Graph images:

### Option 1: Use Online Tools (Recommended)
1. **Canva**: Go to canva.com → Create → Custom Size → 1200x630px
2. **Figma**: Create a 1200x630px frame
3. **Adobe Express**: Choose social media post template

### Option 2: Use the HTML Template
1. Open `/public/og-template.html` in your browser
2. Take a screenshot (1200x630px)
3. Save as `/public/og-image.jpg`
4. Update the metadata to use the new image

## 📋 Required Dimensions

- **Open Graph**: 1200x630px (1.91:1 ratio)
- **Twitter Card**: 1200x630px (same as OG)
- **LinkedIn**: 1200x627px (essentially the same)
- **Square Format**: 1200x1200px (for some platforms)

## ✅ Testing Your Images

### Test Tools:
1. **Facebook Debugger**: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
2. **Twitter Card Validator**: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
3. **LinkedIn Inspector**: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)
4. **Open Graph Check**: [opengraphcheck.com](https://opengraphcheck.com)

### Test Your Site:
Enter your URL: `https://tevin-morake.github.io`

## 🎨 Design Tips for Custom Images

### Content to Include:
- Your name prominently
- Your title/profession
- Key technologies (React, Node.js, etc.)
- Your website URL
- Professional photo
- Consistent branding

### Design Guidelines:
- Use high contrast text
- Keep text large and readable
- Use your brand colors
- Include your photo for personal branding
- Test how it looks at smaller sizes

## 🚀 Current Configuration

Your metadata is set up to use your existing profile image:
```typescript
images: [
  {
    url: '/about/abuti.jpg',
    width: 1200,
    height: 630,
    alt: 'Tevin Morake - Full-Stack Developer Portfolio',
    type: 'image/jpeg',
  }
],
```

This means your existing profile photo will show up in social media previews right away!

## 📈 Benefits You'll See

- **Professional appearance** in social media shares
- **Higher click-through rates** from social media
- **Better brand recognition** 
- **Consistent visual identity** across platforms
- **Improved social media engagement**

Your social media previews are now working with your existing profile image! 🎉
