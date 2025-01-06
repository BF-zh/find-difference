import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [/^(bg|c|b)-(primary|p)$/, ([, c]) => `${c}-[#1989fa]`],
    [/^(bg|c|b)-(secondary|s)/, ([, c]) => `${c}-gray-300`],
    [/^(bg|c|b)-(secondary|s)-light/, ([, c]) => `${c}-gray-100`],
  ],
  rules: [
    [/^w-s-(normal|nowrap|pre|break-spaces|inherit|initial|revert|unset)/, ([, c]) => ({ 'white-space': c })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
