homeBtn.addEventListener('click', () => {
    location.hash = '#home=';
  });
  
  blogBtn.addEventListener('click', () => {
    location.hash = '#articles';
  });

  restaurantsBtn.addEventListener('click', () => {
    location.hash = '#restaurants';
  });

  aboutMeBtn.addEventListener('click', () => {
    location.hash = 'aboutMe';
  });

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log("hello");
    //home
    if(location.hash.startsWith('#home')){
        homePage()
        //blog-articles
    } else if(location.hash.startsWith('#articles')) {
        blogArticles()
        //blog-content ->restaurants
    } else if(location.hash.startsWith('#restaurants')) {
        blogContent()
        //about-me
    } else if(location.hash.startsWith('#aboutMe')){
        aboutMePage()
    } 
}

function homePage() {
    console.log('home Page');
    blogArticlesSection.classList.add('inactive')
    blogContentSection.classList.add('inactive')
    aboutMeSection.classList.add('inactive')
}
function blogArticles() {
    console.log('blog articles')
    homeSection.classList.add('inactive')
    blogContentSection.classList.add('inactive')
    aboutMeSection.classList.add('inactive')
}
function blogContent() {
    console.log('blog content')
    homeSection.classList.add('inactive')
    blogArticlesSection.classList.add('inactive')
    aboutMeSection.classList.add('inactive')
}
function aboutMePage() {
    console.log('about me.')
    homeSection.classList.add('inactive')
    blogArticlesSection.classList.add('inactive')
    blogContentSection.classList.add('inactive')
}

