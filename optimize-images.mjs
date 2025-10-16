#!/usr/bin/env node
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const GALLERY_DIR = './client/public/gallery';
const OUTPUT_DIR = './client/public/gallery-optimized';
const MAX_WIDTH = 1200;
const QUALITY = 85;

async function optimizeImages() {
  try {
    // Create output directory
    await mkdir(OUTPUT_DIR, { recursive: true });

    // Read all files in gallery
    const files = await readdir(GALLERY_DIR);
    const imageFiles = files.filter(f => 
      ['.jpg', '.jpeg', '.png', '.JPEG'].includes(extname(f).toLowerCase())
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);
    console.log(`Current size: 915MB`);
    console.log('');

    let processed = 0;

    for (const file of imageFiles) {
      const inputPath = join(GALLERY_DIR, file);
      const outputPath = join(OUTPUT_DIR, file);

      try {
        // Use sips (built-in macOS tool) to optimize
        await execAsync(
          `sips -Z ${MAX_WIDTH} -s format jpeg -s formatOptions ${QUALITY} "${inputPath}" --out "${outputPath}"`
        );
        
        const inputStats = await stat(inputPath);
        const outputStats = await stat(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
        
        processed++;
        console.log(`✓ ${file} (${(inputStats.size / 1024 / 1024).toFixed(1)}MB → ${(outputStats.size / 1024).toFixed(0)}KB) -${savings}%`);
      } catch (err) {
        console.error(`✗ Failed to optimize ${file}:`, err.message);
      }
    }

    console.log('');
    console.log(`✅ Optimized ${processed}/${imageFiles.length} images!`);
    console.log('');
    console.log('📂 Optimized images saved to: client/public/gallery-optimized/');
    console.log('');
    console.log('Next steps:');
    console.log('1. Review the optimized images');
    console.log('2. If satisfied, replace the originals:');
    console.log('   rm -rf client/public/gallery-backup');
    console.log('   mv client/public/gallery client/public/gallery-backup');
    console.log('   mv client/public/gallery-optimized client/public/gallery');

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

optimizeImages();

