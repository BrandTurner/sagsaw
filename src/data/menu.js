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
       {
         text: 'Sponsorships',
         path: '404'
       }
     ]
   },

  {
    text: 'The Latest',
    rootpath: '/blog',
    submenu: [{
        text: 'Blog and News',
        path: '/blog'
      },
      {
        text: 'Testimonials',
        path: '/404'
      },
      {
        text: 'Upcoming Events',
        path: '/404'
      },
      {
        text: 'Media Gallery',
        path: '/404'
      },
      {
        text: 'Newsletter',
        path: '/404'
      },


    ]

  },
];

export default menu;
