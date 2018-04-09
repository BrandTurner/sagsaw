const menu = [
  {
    text: 'about',
    rootPath: '/about',
    submenu: [
      {
        text: 'Founder',
        path: '/about',
      },
      {
        text: 'Our Mission and Values',
        path: '/mission',
      },
      {
        text: 'Board of Directors',
        path: '/board',
      },
      {
        text: 'Staff',
        path: '/staff',
      },

    ],
  },
  {
    text: 'programs',
    path: 'https://demo.api-platform.com/',
  },
  {
    text: 'get involved',
    rootpath: '/getInvolved',
    submenu: [
      {
        text: 'Upcoming Programs and Events',
        path: '/',
      },
      {
        text: 'Benefits and Criteria',
        path: '/benefits',
      },
      {
        text: 'Volunteer',
        path: '/volunteer',
      },
      {
        text: 'Testimonials',
        path: '/',
      },
      {
        text: 'Volunteer',
        path: '/',
      },
    ],
  },
   {
     text: 'partners',
     rootpath: '/content_partners',
     submenu: [{
         text: 'World of Money',
         path: '/wom',
       },
       {
         text: 'C-Stem',
         path: '/c_stem',
       },
       {
         text: 'Partner with Us',
         path: '/new_partner',
       },
     ],
   },

  {
    text: 'The Latest',
    path: '/blog',
  },
];

export default menu;
