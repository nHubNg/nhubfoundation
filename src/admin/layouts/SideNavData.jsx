export const SideNavData = [
    {
        id: 1, // Unique ID for this item
        title: 'Dashboard',
        path: '/admin',
        icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/lucide_layout-dashboard_lqu6sp.svg',
        mobileIcon: "https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/bx_category_evoqtl.svg"
    },
    {
        id: 2, // Unique ID for this item
        title: 'Internship',
        path: '/admin/applications/pending/',
        icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/charm_person_sr3kco.svg',
        mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616689/nHubFoundation/charm_person_lbjbys.svg',
        sideArrow: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692793410/nHubFoundation/icons8-greater-than-50_pprtqw.png',
        subMenu: [
            {
                id: '2-1', // Submenu ID
                title: 'New',
                path: '/admin/applications/pending/',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690455760/nHubFoundation/Vector_e3vumb.png',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616802/nHubFoundation/mdi_account-pending-outline_l6x6ft.svg'
            },
            {
                id: '2-2',
                title: 'Interviews',
                path: '/admin/applications/interview',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/teenyicons_appointments-outline_jjlgn0.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/teenyicons_appointments-outline_olnthc.svg'
            },
            {
                id: '2-3',
                title: 'Approved',
                path: '/admin/applications/approved',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/eva_person-done-outline_exslcj.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616516/nHubFoundation/eva_person-done-outline_znsspy.svg'
            },
            {
                id: '2-4',
                title: 'Started',
                path: '/admin/applications/started',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/akar-icons_person_mxzjpm.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/akar-icons_person_opjkfo.svg'
            },
            {
                id: '2-5',
                title: 'Ended',
                path: '/admin/applications/ended',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/akar-icons_person_mxzjpm.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/akar-icons_person_opjkfo.svg'
            },
            {
                id: '2-6',
                title: 'Declined',
                path: '/admin/applications/declined',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/tabler_user-cancel_gjjmvt.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616516/nHubFoundation/tabler_user-cancel_ozriib.svg'
            },
            {
                id: '2-7',
                title: 'PlaceHer',
                path: '/admin/applications/placeher',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/akar-icons_person_mxzjpm.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/akar-icons_person_opjkfo.svg'
            }
        ]
    },
    {
        id: 3, // Unique ID for this item
        title: 'Blogs',
        path: '/admin/blogadmin/all',
        icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/tabler_brand-blogger_p53hfh.svg',
        mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/tabler_brand-blogger_fg5ar3.svg',
        sideArrow: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692793410/nHubnFoundation/icons8-greater-than-50_pprtqw.png',
        subMenu: [
            {
                id: '3-1', // Submenu ID
                title: 'Blogs',
                path: '/admin/blogadmin/all',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/tabler_brand-blogger_p53hfh.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubnFoundation/iconoir_post_ky3dnc.svg'
            },
            {
                id: '3-2',
                title: 'Add New',
                path: '/admin/blogadmin/new',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063833/nHubFoundation/gala_add_dzzxyw.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubnFoundation/gala_add_mnseel.svg'
            },
            {
                id: '3-3',
                title: 'Categories',
                path: '/admin/blogadmin/categories',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063833/nHubFoundation/bx_category_kywcb4.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubnFoundation/bx_category_evoqtl.svg'
            }
        ]
    }
];
