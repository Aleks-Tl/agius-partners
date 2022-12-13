import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


// Activity class start ========================================================================================================================================================

if (document.querySelectorAll('.header ul a').length > 0) {
	const menuContainer = document.querySelectorAll('nav ul a');

	menuContainer.forEach(function (el) {
		if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
			el.classList.add('active');
		} else {
			el.classList.remove('active');
		}
	});
}

// Fixed header ========================================================================================================================================================

// FIXED HEADER ========================================================================================================================================================


const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  scrollHeader();
})

function scrollHeader() {
  if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
      header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

