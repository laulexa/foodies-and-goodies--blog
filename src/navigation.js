    homeBtn.addEventListener('click', () => {
    location.hash = '#home';
  });
  
  blogBtn.addEventListener('click', () => {
    location.hash = '#article';
  });

  restaurantsBtn.addEventListener('click', () => {
    location.hash = '#restaurants';
  });

  aboutMeBtn.addEventListener('click', () => {
    location.hash = '#aboutme';
  });

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});
    //home
     if(location.hash.startsWith('#article')) {
        blogArticles()
        //blog-content ->restaurants
    } else if(location.hash.startsWith('#restaurants')) {
        blogContent()
        //about-me
    } else if(location.hash.startsWith('#aboutme')){
        aboutMePage()
    }  else {
        homePage()
    }
}

function homePage() {
    console.log('home Page');
    homeSection.classList.remove('inactive')
    blogArticlesSection.classList.add('inactive')
    blogContentSection.classList.add('inactive')
    aboutMeSection.classList.add('inactive')
}
function blogArticles() {
    console.log('blog articles')
    blogArticlesSection.classList.remove('inactive')
    homeSection.classList.add('inactive')
    blogContentSection.classList.add('inactive')
    aboutMeSection.classList.add('inactive')
}
function blogContent() {
    console.log('blog content')
    blogContentSection.classList.remove('inactive')
    homeSection.classList.add('inactive')
    blogArticlesSection.classList.add('inactive')
    aboutMeSection.classList.add('inactive')
}
function aboutMePage() {
    console.log('about me.')
    aboutMeSection.classList.remove('inactive')
    homeSection.classList.add('inactive')
    blogArticlesSection.classList.add('inactive')
    blogContentSection.classList.add('inactive')
}

