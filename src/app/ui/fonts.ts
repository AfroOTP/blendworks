import { Noto_Sans_JP } from 'next/font/google'

export const notoSansJp = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400', '700'],
    preload: true,
    variable: '--font-noto-sans-jp',
    display: 'swap',
    fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
})