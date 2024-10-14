export default defineAppConfig({
  title: 'Trust',
  titleBadge: 'Beta',
  titleTemplate: '%s - Trust',
  description: 'A web3 Trust Protocol',
  showFooterTop: false,
  links: [
    {
      label: '$TF',
      to: '/tf'
    },
    {
      label: '$Trust',
      to: '/trust'
    },
    {
      label: 'Forbes',
      to: '/forbes'
    },
  ],
  pwaConnector: false,
  ui: {
    primary: 'lime',
    gray: 'cool',
    tooltip: {
      default: {
        openDelay: 500
      }
    }
  }
})
