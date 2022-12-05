import DocSearch from './components/docsearch'
import PlaybookLogo from './playbook.tsx'

// theme.config.js
export default {
    floatTOC: true,
    projectLink: 'https://github.com/powerhome/playbook',
    docsRepositoryBase: 'https://github.com/powerhome/playbook-website/',
    titleSuffix: ' – Playbook',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: <DocSearch />,
    darkMode: true,
    footer: true,
    footerText: `MIT ${new Date().getFullYear()} © Shu Ding.`,
    footerEditLink: `Edit this page on GitHub`,
    logo: <PlaybookLogo />,
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Nextra: the next docs builder" />
            <meta name="og:title" content="Nextra: the next docs builder" />
        </>
    ),
    
}