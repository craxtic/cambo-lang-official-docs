
export default defineAppConfig({
  github: false,
  docus: {
    locale: 'en', // Set your single-language locale
  },
  header: {
    title: 'Cambo',
    logo:{
      
    }
  },

  seo: {
    // titleTemplate: 'Cambo',
    title: 'Cambo documentation',
    description: 'A complete and official documentation for Cambo programming language.',
    
  },

  toc: {
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-lucide-circle-alert',
        label: 'Report an issue',
        to: 'https://github.com/craxtic/cambo-lang-official-docs/issues/new',
        target: '_blank'
      }]
    }
  }
  // ... other configurations
})
