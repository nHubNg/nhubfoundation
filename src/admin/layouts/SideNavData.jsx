import React from 'react'


export const SideNavData = [
    {
        tittle : 'Dashboard',
        path :    '/admin ',
        icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/lucide_layout-dashboard_lqu6sp.svg',
        mobileIcon : "https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/bx_category_evoqtl.svg"
        
       
    },
    {
        tittle : 'Internship application',
        icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/charm_person_sr3kco.svg',
        mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616689/nHubFoundation/charm_person_lbjbys.svg',
        sideArrow : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692793410/nHubFoundation/icons8-greater-than-50_pprtqw.png',
        
        // path : '/applications',
        subMenu: [
            {
                tittle : 'Pending Reviews',
                path : '/admin/applications/pending',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690455760/nHubFoundation/Vector_e3vumb.png',
                mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616802/nHubFoundation/mdi_account-pending-outline_l6x6ft.svg'
            },
            {
                tittle : 'PlaceHer Applications',
                path : '/admin/applications/placeher',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/akar-icons_person_mxzjpm.svg',
                mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/akar-icons_person_opjkfo.svg'
            },
            {
                tittle : 'Interviews',
                path : '/admin/applications/interview',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/teenyicons_appointments-outline_jjlgn0.svg',
                mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/teenyicons_appointments-outline_olnthc.svg'
            },
            {
                tittle : 'Approved Applications',
                path : '/admin/applications/approved',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/eva_person-done-outline_exslcj.svg',
                mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616516/nHubFoundation/eva_person-done-outline_znsspy.svg'
            },
            {
                tittle : 'Declined Applications',
                path : '/admin/applications/declined',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/tabler_user-cancel_gjjmvt.svg',
                mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616516/nHubFoundation/tabler_user-cancel_ozriib.svg'
            }
        ]
    },
    {
        tittle: 'Blogs',
        icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/tabler_brand-blogger_p53hfh.svg',
        mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/tabler_brand-blogger_fg5ar3.svg',
        sideArrow : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692793410/nHubFoundation/icons8-greater-than-50_pprtqw.png',
        // path: '/blogadmin',
        subMenu: [
            {
                tittle : 'Blogs',
                path : '/admin/blogadmin/all',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/tabler_brand-blogger_p53hfh.svg',
                mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/iconoir_post_ky3dnc.svg'
            },
            {
                tittle : 'Add New',
                path : '/admin/blogadmin/new',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063833/nHubFoundation/gala_add_dzzxyw.svg',
                mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/gala_add_mnseel.svg'
            },
            {
                tittle : 'Catergories',
                path: '/admin/blogadmin/categories',
                icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063833/nHubFoundation/bx_category_kywcb4.svg',
                mobileIcon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/bx_category_evoqtl.svg'
            },
            // {
            //     tittle: 'Tags',
            //     path: '/admin/blogadmin/tags',
            //     icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063916/nHubFoundation/ant-design_tags-outlined_iilcld.svg',
            //     mobileIcon : ''
            // }
        ]
    }
]