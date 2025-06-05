import {
  defineConfig,
  presetIcons,
  presetWind3,
  presetAttributify,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
  ],
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetAttributify({
      // Enabling this option may cause the VS Code extension to fail to display decorations in CSS.
      strict: true
    }),
    presetWind3(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
