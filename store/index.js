export const state = () => ({
    isSideNavOpen: false,
    news: [
        {
            id: 0,
            title: 'Aliquam Fermentum Dolor Eget Dolor Ipsum',
            bg: require('~/assets/img/news0-bg.jpg'),
            date: 'March 13, 2020',
            paragraph:
                'Molestiae et laudantium libero ration lorem nihilium est repud iandae nisi id molestias, laudan tium molestias...',
            path: 'news'
        },
        {
            id: 1,
            title: 'Etiam Eget Velit Sitamet Diam Congue Harum',
            bg: require('~/assets/img/news1-bg.jpg'),
            date: 'June 10, 2020',
            paragraph:
                'Molestiae et laudantium libero ration lorem nihilium est repud iandae nisi id molestias, laudan tium molestias...',
            path: 'news'
        },
        {
            id: 2,
            title: 'Donec Hendrerit Sem At Nucn Rhoncus Lorem',
            bg: require('~/assets/img/news2-bg.jpg'),
            date: 'June 23, 2020',
            paragraph:
                'Molestiae et laudantium libero ration lorem nihilium est repud iandae nisi id molestias, laudan tium molestias...',
            path: 'news'
        },
        {
            id: 3,
            title: 'Irtaque Libero Harum Auth Doromqeu lure Optio',
            bg: require('~/assets/img/news3-bg.jpg'),
            date: 'December 3, 2020',
            paragraph:
                'Molestiae et laudantium libero ration lorem nihilium est repud iandae nisi id molestias, laudan tium molestias...',
            path: 'news'
        }
    ],
    events: [
        {
            id: 0,
            heading: 'Upcoming Events',
            title: 'Cras Congue ENim',
            bg: require('~/assets/img/event0-bg.jpg'),
            date: 'JUN 23 - JUN 30',
            location: 'Beijing',
            seeAllRoute: 'events'
        },
        {
            id: 1,
            heading: 'Upcoming Events',
            title: 'Integer Aliquet Tortor',
            bg: require('~/assets/img/event1-bg.jpg'),
            date: 'JUL 20',
            location: 'Berlin',
            seeAllRoute: 'events'
        },
        {
            id: 2,
            heading: 'Upcoming Events',
            title: 'Pellentesque Sagittis',
            bg: require('~/assets/img/event2-bg.jpg'),
            date: 'AUG 18 - AUG 26',
            location: 'London',
            seeAllRoute: 'events'
        },
        {
            id: 3,
            heading: 'Upcoming Events',
            title: 'Donec In Dui Tristique',
            bg: require('~/assets/img/event3-bg.jpg'),
            date: 'SEP 17',
            location: 'Tokyo',
            seeAllRoute: 'events'
        },
        {
            id: 4,
            heading: 'Upcoming Events',
            title: 'Vivamus Nec Lectus',
            bg: require('~/assets/img/event4-bg.jpg'),
            date: 'OCT 28',
            location: 'Tokyo',
            seeAllRoute: 'events'
        },
        {
            id: 5,
            heading: 'Upcoming Events',
            title: 'Sed Aliquet Libero',
            bg: require('~/assets/img/event5-bg.jpg'),
            date: 'NOV 19',
            location: 'Beijing',
            seeAllRoute: 'events'
        }
    ]
})

export const getters = {
    isSideNavOpen: state => state.isSideNavOpen,
    news: state => state.news,
    events: state => state.events
}

export const mutations = {
    SET_IS_SIDE_NAV_OPEN: (state, payload) => {
        state.isSideNavOpen = payload
    }
}

export const actions = {
    setIsSideNavOpen: ({ commit }, payload) => {
        commit('SET_IS_SIDE_NAV_OPEN', payload)
    }
}