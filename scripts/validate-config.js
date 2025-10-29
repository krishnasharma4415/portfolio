#!/usr/bin/env node

/**
 * Configuration Validation Script
 * Validates deployment configuration files
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating deployment configuration...\n');

const validations = [
  {
    name: 'Vercel configuration',
    file: 'vercel.json',
    validate: (content) => {
      try {
        const config = JSON.parse(content);
        return config.framework === 'nextjs' && config.buildCommand && config.outputDirectory;
      } catch (e) {
        return false;
      }
    }
  },
  {
    name: 'Package.json scripts',
    file: 'package.json',
    validate: (content) => {
      try {
        const pkg = JSON.parse(content);
        const requiredScripts = ['build', 'start', 'dev'];
        return requiredScripts.every(script => pkg.scripts && pkg.scripts[script]);
      } catch (e) {
        return false;
      }
    }
  },
  {
    name: 'Next.js configuration',
    file: 'next.config.ts',
    validate: (content) => {
      return content.includes('NextConfig') && content.includes('export default');
    }
  },
  {
    name: 'Environment example',
    file: '.env.example',
    validate: (content) => {
      return content.includes('NODE_ENV') && content.includes('NEXT_PUBLIC_SITE_URL');
    }
  },
  {
    name: 'PWA Manifest',
    file: 'public/manifest.json',
    validate: (content) => {
      try {
        const manifest = JSON.parse(content);
        return manifest.name && manifest.start_url && manifest.icons;
      } catch (e) {
        return false;
      }
    }
  }
];

let allValid = true;

validations.forEach(validation => {
  const filePath = validation.file;
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${validation.name}: File ${filePath} not found`);
    allValid = false;
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const isValid = validation.validate(content);
  
  const status = isValid ? '✅' : '❌';
  console.log(`${status} ${validation.name}`);
  
  if (!isValid) {
    allValid = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allValid) {
  console.log('🎉 All configuration files are valid!');
  console.log('✅ Ready for dashboard deployment');
} else {
  console.log('❌ Some configuration issues found');
  console.log('Please fix the issues above before deploying');
}

console.log('\n📋 Deployment platforms:');
console.log('• Vercel: https://vercel.com/dashboard');
console.log('• Render: https://dashboard.render.com/');

process.exit(allValid ? 0 : 1);