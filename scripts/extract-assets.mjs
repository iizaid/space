import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sourceDir = path.join(root, 'assets');
const outDir = path.join(root, 'public', 'generated');

await fs.mkdir(outDir, { recursive: true });

const cropJobs = [
  {
    input: 'section 2.png',
    output: 'experience-main.webp',
    box: { left: 704, top: 69, width: 470, height: 802 },
  },
  {
    input: 'section 2.png',
    output: 'experience-sign.webp',
    box: { left: 1187, top: 69, width: 429, height: 403 },
  },
  {
    input: 'section 2.png',
    output: 'experience-dessert.webp',
    box: { left: 1186, top: 486, width: 197, height: 385 },
  },
  {
    input: 'section 2.png',
    output: 'experience-food.webp',
    box: { left: 1397, top: 486, width: 220, height: 385 },
  },
  {
    input: 'section 3.png',
    output: 'drink-hibiscus.webp',
    box: { left: 116, top: 477, width: 236, height: 277 },
  },
  {
    input: 'section 3.png',
    output: 'drink-latte.webp',
    box: { left: 370, top: 477, width: 235, height: 277 },
  },
  {
    input: 'section 3.png',
    output: 'drink-space-special.webp',
    box: { left: 624, top: 444, width: 288, height: 309 },
  },
  {
    input: 'section 3.png',
    output: 'drink-mango.webp',
    box: { left: 930, top: 477, width: 235, height: 277 },
  },
  {
    input: 'section 3.png',
    output: 'drink-strawberry.webp',
    box: { left: 1184, top: 477, width: 236, height: 277 },
  },
];

for (const job of cropJobs) {
  await sharp(path.join(sourceDir, job.input))
    .extract(job.box)
    .resize({ width: Math.round(job.box.width * 1.2), withoutEnlargement: true })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, job.output));
}

const heroBox = { left: 580, top: 165, width: 905, height: 620 };
const heroInput = path.join(sourceDir, 'section 1.png');
const heroCrop = sharp(heroInput)
  .extract(heroBox)
  .resize({ width: Math.round(heroBox.width * 1.2), withoutEnlargement: true })
  .ensureAlpha()
  .raw();
const hero = await heroCrop.toBuffer({ resolveWithObject: true });
const bg = [hero.data[0], hero.data[1], hero.data[2]];

for (let index = 0; index < hero.data.length; index += hero.info.channels) {
  const red = hero.data[index];
  const green = hero.data[index + 1];
  const blue = hero.data[index + 2];
  const brightness = (red + green + blue) / 3;
  const spread = Math.max(red, green, blue) - Math.min(red, green, blue);
  const distance = Math.hypot(red - bg[0], green - bg[1], blue - bg[2]);

  if (brightness > 224 && spread < 26 && distance < 42) {
    hero.data[index + 3] = Math.max(0, Math.min(255, Math.round((distance / 42) * 255)));
  }
}

await sharp(hero.data, {
  raw: {
    width: hero.info.width,
    height: hero.info.height,
    channels: hero.info.channels,
  },
})
  .png()
  .toFile(path.join(outDir, 'hero-plate.png'));

const logoInput = path.join(sourceDir, 'logo.jpg');
const logo = sharp(logoInput).ensureAlpha().raw();
const { data, info } = await logo.toBuffer({ resolveWithObject: true });

for (let index = 0; index < data.length; index += info.channels) {
  const red = data[index];
  const green = data[index + 1];
  const blue = data[index + 2];
  const whiteness = Math.min(red, green, blue);
  if (whiteness > 242) {
    data[index + 3] = 0;
  } else if (whiteness > 226) {
    data[index + 3] = Math.round((242 - whiteness) * 16);
  }
}

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: info.channels,
  },
})
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 8 })
  .resize({ width: 420 })
  .png()
  .toFile(path.join(outDir, 'logo-transparent.png'));
