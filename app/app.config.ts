export default defineAppConfig({
  title: 'Sink',
  email: 'sink@149159.xyz',
  github: 'https://link.149159.xyz/github',
  twitter: 'https://link.149159.xyz/kai',
  telegram: 'https://link.149159.xyz/telegram',
  mastodon: 'https://link.149159.xyz/mastodon',
  blog: 'https://link.149159.xyz/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
