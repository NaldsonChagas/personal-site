import type { Plugin } from 'vite';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - critters types are not properly exported
import Critters from 'critters';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export function critical(): Plugin {
  return {
    name: 'vite-plugin-critical',
    apply: 'build',
    async closeBundle() {
      const outDir = join(process.cwd(), 'dist/public');
      const htmlPath = join(outDir, 'index.html');

      try {
        const html = readFileSync(htmlPath, 'utf-8');
        const critters = new Critters({
          path: outDir,
          external: true,
          preload: 'swap',
          fonts: true,
        });

        const inlined = await critters.process(html);
        writeFileSync(htmlPath, inlined, 'utf-8');
      } catch (error) {
        console.warn('Critical CSS inlining failed:', error);
      }
    },
  };
}
