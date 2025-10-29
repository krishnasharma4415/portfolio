#!/usr/bin/env node

/**
 * Build Verification Script
 * Checks if the build is ready for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying build for deployment...\n');

const checks = [
  {
    name: 'Next.js build directory exists',
    check: () => fs.existsSync('.next'),
    fix: 'Run: npm run build'
  },
  {
    name: 'Package.json exists',
    check: () => fs.existsSync('package.json'),
    fix: 'Ensure package.json is in the root directory'
  },
  {
    name: 'Required public assets exist',
    check: () => {
      const requiredFiles = ['favicon.ico', 'manifest.json', 'robots.txt'];
      return requiredFiles.every(file => fs.existsSync(path.join('public', file)));
    },
    fix: 'Add missing files to /public directory'
  },
  {
    name: 'Environment example exists',
    check: () => fs.existsSync('.env.example'),
    fix: 'Create .env.example with required variables'
  },
  {
    name: 'Build configuration files exist',
    check: () => {
      const configFiles = ['next.config.ts', 'tsconfig.json', 'package.json'];
      return configFiles.every(file => fs.existsSync(file));
    },
    fix: 'Ensure all config files are present'
  }
];

let allPassed = true;

checks.forEach((check, index) => {
  const passed = check.check();
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${check.name}`);
  
  if (!passed) {
    console.log(`   💡 Fix: ${check.fix}`);
    allPassed = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 All checks passed! Ready for deployment.');
  console.log('\n📋 Next steps:');
  console.log('1. Push your code to GitHub');
  console.log('2. Deploy via Vercel or Render dashboard');
  console.log('3. Configure environment variables');
  console.log('4. Test your deployed site');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please fix the issues above.');
  process.exit(1);
}