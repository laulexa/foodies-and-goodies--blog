console.log("Hello Food lover!")

iconMenuBtn.addEventListener('click', toggleMobileMenu);
mobileBtn.addEventListener('click', closeMobileMenuContainer)
mobileBtnA.addEventListener('click', closeMobileMenuContainer)
mobileBtnR.addEventListener('click', closeMobileMenuContainer)
mobileBtnAB.addEventListener('click', closeMobileMenuContainer)

function toggleMobileMenu() {
   console.log("closing")
 mobileMenu.classList.toggle('inactive')
}

function closeMobileMenuContainer () {
    mobileMenu.classList.toggle('inactive')
}
// desktopMenu.classList.toggle('inactive')