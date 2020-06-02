export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed6e77f691a07f12b551092',
                  title: 'Sanity Studio',
                  name: 'humansofmit-website-studio',
                  apiId: '8a981d20-7448-4ed5-bb06-679e34189d0b'
                },
                {
                  buildHookId: '5ed6e77fc9a769a8d0ccec72',
                  title: 'Blog Website',
                  name: 'humansofmit-website',
                  apiId: '65ad78e2-b009-4d6e-af76-bc43cc974d1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TypingKoala/humansofmit-website',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://humansofmit-website.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
