// Verification script to check project structure
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Next.js project structure...\n');

const checks = [
  {
    name: 'pages directory exists',
    check: () => fs.existsSync('pages'),
    fix: 'Create a pages/ directory at the root'
  },
  {
    name: 'pages/index.tsx exists',
    check: () => fs.existsSync('pages/index.tsx'),
    fix: 'Create pages/index.tsx file'
  },
  {
    name: 'pages/_app.tsx exists',
    check: () => fs.existsSync('pages/_app.tsx'),
    fix: 'Create pages/_app.tsx file'
  },
  {
    name: 'package.json exists',
    check: () => fs.existsSync('package.json'),
    fix: 'Create package.json file'
  },
  {
    name: 'next.config.js exists',
    check: () => fs.existsSync('next.config.js'),
    fix: 'Create next.config.js file'
  },
  {
    name: 'netlify.toml exists',
    check: () => fs.existsSync('netlify.toml'),
    fix: 'Create netlify.toml file'
  }
];

let allPassed = true;

checks.forEach(({ name, check, fix }) => {
  const passed = check();
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${name}`);
  if (!passed) {
    console.log(`   Fix: ${fix}`);
    allPassed = false;
  }
});

console.log('\n');

if (allPassed) {
  console.log('✅ All checks passed! Project structure is correct.');
  console.log('\n📝 Next steps:');
  console.log('1. Make sure all files are committed to git:');
  console.log('   git add .');
  console.log('   git commit -m "Initial commit"');
  console.log('   git push');
  console.log('\n2. Deploy to Netlify');
} else {
  console.log('❌ Some checks failed. Please fix the issues above.');
  process.exit(1);
}

