aboutMeBtn.addEventListener('click', () => {
    location.hash = '#blogProfile'
});

function navigator() {
    console.log("hello");
    if(location.hash.startsWith('#blogProfile')){
        blogProfilePage()
    }
}

function blogProfilePage() {
    console.log('we are in the blog profile.')
}