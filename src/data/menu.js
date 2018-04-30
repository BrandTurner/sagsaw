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
        text: 'Mentee Applications',
        path: 'https://goo.gl/forms/8EDnH5QGyFTyvnMa2'
      },
      {
        text: 'Professional Mentor Applications',
        path: 'https://goo.gl/forms/SJTjSbUTQVKzAl4Q2'
      },
      {
        text: 'Volunteer',
        path: '/volunteer',
      },
      {
        text: 'Scholarship',
        path: 'Scholarship',
      },
    ],
  },
   {
     text: 'partners',
     path: '/contentPartner',
     submenu: [
       {
         text: 'CSTEM',
         path: '/contentPartner'
       },
       {
         text: 'World of Money',
         path: '/contentPartner'
       },
     ]
   },

  {
    text: 'The Latest',
    path: '/blog',
  },
];

export default menu;
