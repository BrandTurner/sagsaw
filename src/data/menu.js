const menu = [
  {
    text: 'about',
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
     path: '/contentPartner',
     submenu: [{
         text: 'World of Money',
         path: '/wom',
       },
       {
         text: 'C-Stem',
         path: '/cStem',
       },
       {
         text: 'Partner with Us',
         path: '/newPartner',
       },
     ],
   },

  {
    text: 'The Latest',
    path: '/blog',
  },
];

export default menu;
