require('dotenv').config()
const topicDetails = require('./data/config/blog/topics-page-details')

module.exports = {
  lang: 'en-US',
  base: '/',
  title: 'DecipherDev',
  description:
    'Let\'s read, write and execute code ☕',
  head: [
    [
      'meta',
      {
        name: 'charset',
        content: 'utf-8'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'Umesh Toke'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      }
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#1f2229'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-title',
        content: 'Decipher Dev'
      }
    ],
    [
      'meta',
      {
        name: 'application-name',
        content: 'Decipher Dev'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#1f2229'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#1f2229'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml'
      }
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Decipher Dev'
      }
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website'
      }
    ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image',
    //     content:
    //       'https://codemonkeys.tech/images/code-monkeys-logos/code-monkeys-blog-open-graph.png'
    //   }
    // ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image:width',
    //     content: '1200'
    //   }
    // ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image:height',
    //     content: '630'
    //   }
    // ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image:alt',
    //     content: 'Decipher Dev Blog Open Graph Image'
    //   }
    // ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://decipherdev.github.io'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Read write and execute Code  🐵'
      }
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: 'DecipherDev'
      }
    ],
    [
      'link',
      {
        href: '//codefence.io/codefence.css',
        rel: 'stylesheet'
      }
    ],
    [
      'script',
      {
        defer: '',
        type: 'text/javascript',
        src: '//codefence.io/codefence.js'
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    domain: 'https://decipherdev.github.io/',
    defaultAuthor: 'Umesh Toke',
    allPostsDescription:
      "Here's all of the posts we've made so far! 📝",
    topicsDescription:
      "Here you can view the various topics we've covered so far! Find a topic that interests you and start learning and coding today! Be sure to grab a banana! 🍌",
    // logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo-200w.png',
    nav: [
      { text: 'Home', link: "/posts/" },
      { text: 'Java-Programming', link: '/topics/Java/' },
      { text: 'LeetCode-Solutions', link: '/topics/LeetCode/' },
    ]
  },
  plugins: [
    '@vuepress/back-to-top',
    '@goy/svg-icons',
    'vuepress-plugin-mathjax',
    'mermaidjs',
    'redirect-frontmatter',
    [
      'vuepress-plugin-container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
    [
      'vuepress-plugin-code-copy',
      {
        color: '#eb7132',
        backgroundColor: '#eb7132',
        successText: 'Copied to Clipboard!',
        staticIcon: true
      }
    ],
    [
      '@adamdehaven/vuepress-plugin-custom-tooltip',
      {
        name: 'VueCustomTooltip',
        color: '#e6e6e6',
        background: '#16181d',
        borderRadius: 100,
        fontWeight: 500,
      },
    ],
    [
      'feed1',
      {
        hostname: 'https://decipherde.github.io',
        rss: true,
        atom: true,
        json: false,
        channel: {
          copyright: 'Copyright © 2024 DecipherDev',
          image: 'https://codemonkeys.tech/images/code-monkeys-logos/code-monkeys-rss-image.png',
          icon: 'https://codemonkeys.tech/images/code-monkeys-logos/code-monkeys-rss-icon.png'
        }
      },
    ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
            dirname: '_posts',
            path: '/posts/',
            title: 'All Posts',
            layout: 'IndexPost',
            frontmatter: {
              description:
                "Here's all of the posts we've made so far! Find a post that peeks your interest 📝",
              canonicalUrl: 'posts/'
            },
            itemLayout: 'Post',
            itemPermalink: '/:slug',
            pagination: {
              lengthPerPage: 5,
              layout: 'IndexPost',
              prevText: 'Prev',
              nextText: 'Next'
            }
          }
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'topics',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['topic'],
            // Path of the `entry page` (or `list page`)
            path: '/topics/',
            title: 'Topics',
            // Layout of the `entry page` (list of tags)
            layout: 'Topics',
            // Layout of the `scope page` (list of posts with this tag)
            scopeLayout: 'IndexPost',
            frontmatter: {
              description:
                "Here you can view the various topics we've covered so far! Find a topic that interests you and start learning and coding today! Be sure to grab a banana! 🍌",
              canonicalUrl: 'topics/',
              topicDetails: topicDetails.topicsPageDetails
            },
            pagination: {
              lengthPerPage: 5,
              layout: 'IndexPost'
            }
          }
        ],
        sitemap: {
          hostname: 'https://decipherdev.github.io/'
        }
      //   comment: {
      //     service: 'vssue',
      //     platform: 'github-v4',
      //     owner: 'decipherDev',
      //     repo: `${process.env.NODE_ENV !== 'development'
      //       ? 'decipher-dev-blog-comments'
      //       : 'decipher-dev-blog-comments-dev'
      //       }`,
      //     clientId: `${process.env.NODE_ENV !== 'development'
      //       ? '70480748c9fd241c5495'
      //       : process.env.CLIENT_ID_DEV_GITHUB
      //       }`,
      //     clientSecret: `${process.env.NODE_ENV !== 'development'
      //       ? 'c6e9d0221e76f8b0c4604d1a61e05fa72a33758c'
      //       : process.env.CLIENT_SECRET_DEV_GITHUB
      //       }`,
      //     labels: [':monkey_face:comments'],
      //     prefix: '[Post] ',
      //     admins: ['jchiarulli'],
      //     perPage: 10 // 10 is the default value
      //   }
      }
    ]
  ]
}
