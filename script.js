const posts = [
  {
    id: 1,
    title: "Why I learned Vue",
    body: `I'm baby chambray street art <strong>thundercats</strong> occupy four loko
    church- key disrupt.Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg.Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. <br> Lo - fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  },
  {
    id: 2,
    title: "Using the Vue CDN",
    body: `I'm baby chambray street art thundercats occupy four loko
    church- key disrupt.Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg.Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore.Lo - fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  },
  {
    id: 3,
    title: "How I mastered Vue",
    body: `I'm baby chambray street art thundercats occupy four loko
    church- key disrupt.Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg.Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore.Lo - fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  }
]

const links = [
  {
    id: 1,
    name: "Home",
    url: "index.html"
  },
  {
    id: 2,
    name: "Portfolio",
    url: "portfolio.html"
  },
  {
    id: 3,
    name: "Contact Me",
    url: "contact.html"
  }
]

Vue.createApp({
  created() {
    this.getPosts();
  },
  data() {
    return {
      name: "Sydney",
      links,
      posts: [],
      darkModeSet: false,
      darkMode: {
        background: "#38383a",
        color: "whitesmoke",
      },
      base: {
        fontFamily: "monospace",
      },
    };
  },
  methods: {
    toggleMode() {
      this.darkModeSet = !this.darkModeSet;
    },
    async getPosts() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      this.posts = data;
    }
  }
}).mount("body");
