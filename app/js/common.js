
function clickMenu() {
    let humburgerLine1 = document.querySelector('.hamburger-line_1');
    let humburgerLine2 = document.querySelector('.hamburger-line_2');
    let humburgerLine3 = document.querySelector('.hamburger-line_3');
    let navigationList = document.getElementById('navigation__list');
    let navigation = document.querySelector('.navigation');

    humburgerLine1.classList.toggle('hamburger-line_1_rotate');
    humburgerLine2.classList.toggle('hamburger-line_2_hidden');
    humburgerLine3.classList.toggle('hamburger-line_3_rotate');
   // navigation.classList.toggle('navigation_responsive');
    //navigationList.classList.toggle('navigation__list_responsive')

}