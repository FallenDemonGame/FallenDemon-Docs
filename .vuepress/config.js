module.exports = {
    title: 'Fallen Demon',
    logo: 'https://vuepress.vuejs.org/hero.png',
    description: 'An evolutive Hack\'n Slash inspired by the dragon ball universe',
    themeConfig: {
        nav: [{
                text: 'Accueil',
                link: '/'
            },
            {
                text: 'Wiki',
                link: '/guide/'
            },
            {
                text: 'Github',
                link: 'https://google.com'
            },
        ],
        sidebar: {
            '/guide/': [
                '', 
                {
                    title: 'Act',
                    collapsable: false,
                    children: [
                        'act/',
                        'act/ActOne',
                    ]
                },
                {
                    title: 'Class',
                    collapsable: false,
                    children: [
                        'class/',
                        'class/Warriors', 
                    ]
                },
            ],

            '/': [  
                ''  
            ]
        }
    }
}