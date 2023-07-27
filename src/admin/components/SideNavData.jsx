import React from 'react'


export const SideNavData = [
    {
        tittle : 'Dashboard',
        path :    '/admin',
        icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690452232/nHubFoundation/lucide_layout-dashboard_tuyjqx.png'
       
    },
    {
        tittle : 'Internship application',
        icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690452232/nHubFoundation/Group_vl6ptg.png',
        // path : '/applications',
        subMenu: [
            {
                tittle : 'Pending Reviews',
                path : '/admin/applications/pending',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690455760/nHubFoundation/Vector_e3vumb.png'
            },
            {
                tittle : 'PlaceHer Applications',
                path : '/admin/applications/placeher',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690455760/nHubFoundation/akar-icons_person_yc94b4.png'
            },
            {
                tittle : 'Interviews',
                path : '/admin/applications/interview',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690455761/nHubFoundation/teenyicons_appointments-outline_mqn5gy.png'
            },
            {
                tittle : 'Approved Applications',
                path : '/admin/applications/approved',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690455760/nHubFoundation/eva_person-done-outline_pt8hxu.png'
            },
            {
                tittle : 'Declined Applications',
                path : '/admin/applications/declined',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690455760/nHubFoundation/tabler_user-cancel_syzhnw.png'
            }
        ]
    },
    {
        tittle: 'Blogs',
        icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690452232/nHubFoundation/tabler_brand-blogger_gydrl1.png',
        // path: '/blogadmin',
        subMenu: [
            {
                tittle : 'Blogs',
                path : '/admin/blogadmin/all',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690452232/nHubFoundation/tabler_brand-blogger_gydrl1.png'
            },
            {
                tittle : 'Add New',
                path : '/admin/blogadmin/new',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690459444/nHubFoundation/gala_add_b6hasi.png',
            },
            {
                tittle : 'Catergories',
                path: '/admin/blogadmin/categories',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690459444/nHubFoundation/bx_category_qcjd9m.png',
            },
            {
                tittle: 'Tags',
                path: '/admin/blogadmin/tags',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690459444/nHubFoundation/Vector_gz9ref.png'
            }
        ]
    }
]