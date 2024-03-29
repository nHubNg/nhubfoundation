
export const SideNavData = [
    {
        title: 'Dashboard',
        path: '/admin ',
        icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/lucide_layout-dashboard_lqu6sp.svg',
        mobileIcon: "https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/bx_category_evoqtl.svg"


    },
    {
        title: 'Internship',
        path: '/admin/applications/pending/',
        icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/charm_person_sr3kco.svg',
        mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616689/nHubFoundation/charm_person_lbjbys.svg',
        sideArrow: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692793410/nHubFoundation/icons8-greater-than-50_pprtqw.png',

        // path : '/applications',
        subMenu: [
            {
                title: 'New',
                path: '/admin/applications/pending/',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1690455760/nHubFoundation/Vector_e3vumb.png',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616802/nHubFoundation/mdi_account-pending-outline_l6x6ft.svg'
            },
            {
                title: 'Interviews',
                path: '/admin/applications/interview',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/teenyicons_appointments-outline_jjlgn0.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/teenyicons_appointments-outline_olnthc.svg'
            },
            {
                title: 'Approved',
                path: '/admin/applications/approved',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/eva_person-done-outline_exslcj.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616516/nHubFoundation/eva_person-done-outline_znsspy.svg'
            },
            {
                title: 'Started',
                path: '/admin/applications/started',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/akar-icons_person_mxzjpm.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/akar-icons_person_opjkfo.svg'
            },
            {
                title: 'Ended',
                path: '/admin/applications/ended',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/akar-icons_person_mxzjpm.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/akar-icons_person_opjkfo.svg'
            },
            {
                title: 'Declined',
                path: '/admin/applications/declined',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/tabler_user-cancel_gjjmvt.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616516/nHubFoundation/tabler_user-cancel_ozriib.svg'
            },
            {
                title: 'PlaceHer',
                path: '/admin/applications/placeher',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691064046/nHubFoundation/akar-icons_person_mxzjpm.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616517/nHubFoundation/akar-icons_person_opjkfo.svg'
            }
        ]
    },
    {
        title: 'Blogs',
        path: '/admin/blogadmin/all ',
        icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/tabler_brand-blogger_p53hfh.svg',
        mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/tabler_brand-blogger_fg5ar3.svg',
        sideArrow: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692793410/nHubFoundation/icons8-greater-than-50_pprtqw.png',
        // path: '/blogadmin',
        subMenu: [
            {
                title: 'Blogs',
                path: '/admin/blogadmin/all',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063574/nHubFoundation/tabler_brand-blogger_p53hfh.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/iconoir_post_ky3dnc.svg'
            },
            {
                title: 'Add New',
                path: '/admin/blogadmin/new',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063833/nHubFoundation/gala_add_dzzxyw.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/gala_add_mnseel.svg'
            },
            {
                title: 'Categories',
                path: '/admin/blogadmin/categories',
                icon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063833/nHubFoundation/bx_category_kywcb4.svg',
                mobileIcon: 'https://res.cloudinary.com/nhubnacademy/image/upload/v1692616515/nHubFoundation/bx_category_evoqtl.svg'
            },
            // {
            //     title: 'Tags',
            //     path: '/admin/blogadmin/tags',
            //     icon : 'https://res.cloudinary.com/nhubnacademy/image/upload/v1691063916/nHubFoundation/ant-design_tags-outlined_iilcld.svg',
            //     mobileIcon : ''
            // }
        ]
    }
]