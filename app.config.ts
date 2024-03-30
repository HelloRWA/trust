export default defineAppConfig({
  title: 'Template Layer SaaS',
  titleBadge: 'Beta',
  titleTemplate: '%s - Template Layer SaaS',
  description: 'A Web3 Full Stack SaaS Template based on Web3 Full Stack Layer SaaS',
  links: [
    {
      label: 'Docs',
      to: '/docs'
    },
    {
      label: 'Pricing',
      to: '/pricing'
    },
    {
      label: 'Blog',
      to: '/blog'
    }
  ],
  ui: {
    primary: 'sky',
    gray: 'cool',
    tooltip: {
      default: {
        openDelay: 500
      }
    }
  }
})
