const menu = [
  {
    text: 'about',
    submenu: [
      {
        text: 'Founder',
        path: '/about',
      },
      {
        text: 'Vision, Mission, Values',
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
    path: '/programs',
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
        text: 'Scholarship',
        path: 'Scholarship',
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
   },

  {
    text: 'The Latest',
    path: '/blog',
  },
];

export default menu;
