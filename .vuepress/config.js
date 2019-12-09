module.exports = {
    title: 'Fallen Demon',
    logo: 'https://vuepress.vuejs.org/hero.png',
    color: "",
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
                    title: 'Actes',
                    collapsable: false,
                    children: [
                        'actes/',
                        'actes/ActesOne',
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