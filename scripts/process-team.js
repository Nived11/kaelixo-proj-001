const sharp = require('sharp');

async function processGrowth() {
  const width = 900;
  const height = 1200;

  const cropped = await sharp('public/images/about/team/growth.jpg')
    .resize(width, height, { fit: 'cover', position: 'top' })
    .toBuffer();

  const svgVignette = Buffer.from(`
    <svg width="${width}" height="${height}">
      <defs>
        <radialGradient id="grad" cx="50%" cy="40%" r="50%">
          <stop offset="25%" stop-color="#020205" stop-opacity="0" />
          <stop offset="65%" stop-color="#020205" stop-opacity="0.75" />
          <stop offset="90%" stop-color="#020205" stop-opacity="0.98" />
          <stop offset="100%" stop-color="#020205" stop-opacity="1" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" />
    </svg>
  `);

  await sharp(cropped)
    .composite([{ input: svgVignette, blend: 'over' }])
    .jpeg({ quality: 95 })
    .toFile('public/images/about/team/growth-portrait.jpg');

  console.log('Created growth-portrait.jpg successfully');
}

processGrowth().catch(console.error);
