// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		toggleNav = document.getElementById('nav-toggle'),
		closeNav = document.getElementById('nav-close');

// Show Menu
toggleNav.addEventListener('click', ()=>{
	navMenu.classList.toggle('show-menu')
});

// Hide Menu
closeNav.addEventListener('click', ()=>{
	navMenu.classList.remove('show-menu')
});
// ===== end show menu ===== //

// ===== REMOVE MOBILE MENU ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction));
// ===== end remove mobile menu ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active menu ===== //

// ===== HOME ===== //
const homeSwiper = new Swiper(".home__slides", {
	spaceBetween: 30,
	effect: "fade",

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
});
// ===== end home slider ===== //

/* ===== COUNTDOWN TIMER ===== */
const countdownDate = new Date("December 25, 2022 08:00:00").getTime();

const timerFunction = setInterval(() => {
	const currentDate = new Date().getTime();
	const finalTime = countdownDate - currentDate;

	if(finalTime > 0){
		const days = Math.floor(finalTime / (1000*60*60*24));
		const hours = Math.floor((finalTime % (1000*60*60*24)) / (1000*60*60));
		const minutes = Math.floor((finalTime % (1000*60*60)) / (1000*60));
		const seconds = Math.floor((finalTime % (1000*60)) / (1000));

		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	}else{
		clearInterval(timerFunction);
		document.getElementById("timer-stop").innerHTML = "The Countdown is Over!";
	}
}, 1000);
// ===== end countdown timer ===== //

// ===== VIDEO ===== //
const videoPlay = document.getElementById('video-play'),
		videoContent = document.getElementById('video-content'),
		videoClose = document.getElementById('video-close');

videoPlay.addEventListener('click', ()=>{
	document.body.style.overflow = 'hidden';
	videoContent.classList.add('show-video')
});
videoClose.addEventListener('click', ()=>{
	document.body.style.overflow = 'auto';
	videoContent.classList.remove('show-video')
});
// ===== end video ===== //

// ===== RSVP ===== //
const rsvpRespon = document.querySelector('.rsvp__respon'),
		rsvpForm = document.querySelector('.rsvp__form');

// Area Google Sheets
const scriptURL = '#';

const form = document.forms['rsvp-input-data']

form.addEventListener('submit', e => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => {
		// Alert: RSVP Respon
		rsvpRespon.classList.toggle('rsvp-respon');

		// Resert Form
		rsvpForm.reset();

		console.log('Success!', response);
	})
	.catch(error => console.error('Error!', error.message))
});
// ===== end rsvp ===== //

// ===== WEDDING GIFT ===== //
const giftButton = document.getElementById('gift-button'),
		giftRekening = document.getElementById('gift-rekening');

giftButton.addEventListener('click', ()=>{
	giftRekening.classList.add('show-rekening');
	giftButton.style.marginBottom = "3rem";
});

const bca = document.getElementById('bca'),
		mandiri = document.getElementById('mandiri');
const copyBca = document.querySelector('.copy__bca'),
		copyMandiri = document.querySelector('.copy__mandiri');

copyBca.addEventListener('click', ()=>{
	document.execCommand("copy");
});
copyMandiri.addEventListener('click', ()=>{
	document.execCommand("copy");
});

copyBca.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", bca.textContent);
		alert("BCA copied")
	}else{
		alert("Not copied!")
	}
});
copyMandiri.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", mandiri.textContent);
		alert("Mandiri copied!")
	}else{
		alert("Not Copied!")
	}
});
// ===== end wedding gift ===== //

// ===== FILTERS TABS ===== //
const tabs = document.querySelectorAll('[data-target]'),
		tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
	tab.addEventListener('click', ()=>{
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach(tc =>{
			tc.classList.remove('maids__active');
		})
		target.classList.add('maids__active');

		tabs.forEach(t =>{
			t.classList.remove('maid-tab-active');
		})
		tab.classList.add('maid-tab-active');
	})
})
// ===== end filters tabs ===== //

// ===== BACKSOUND ===== //
const backsound = document.getElementById('song'),
		backsoundIcon = document.getElementById('backsound-icon'),
		popupBtn = document.getElementById('popup-btn');

popupBtn.addEventListener('click', ()=>{
	backsound.play();
	backsoundIcon.src = "assets/img/pause.png";
})

backsoundIcon.onclick = ()=>{
	if(backsound.paused){
		backsound.play();
		backsoundIcon.src = "assets/img/pause.png";
	}else{
		backsound.pause();
		backsoundIcon.src = "assets/img/play.png";
	}
}
// ===== end backsound ===== //

/* ===== POPUP ===== */
const popup = document.getElementById('popup');
// const popupBtn = document.getElementById('popup-btn');

popupBtn.addEventListener('click', ()=>{
	document.body.style.overflow = 'auto';
	popup.style.display = 'none';
});
// ===== end popup ===== //

/* ===== PASSWORD WEBSITE ===== */
const passwordBtn = document.querySelector('.password__button'),
		password = document.getElementById('password'),
		passwordForm = document.querySelector('.password__form');

passwordBtn.addEventListener('click', ()=>{
	const passwordInput = document.getElementById('password-input').value;

	if(passwordInput == 123456){
		password.style.display = 'none';
	}else{
		// Resert Form
		passwordForm.reset();
		alert('Your password wrong!');
	}
});
// ===== end password website ===== //

// ===== AOS ANIMATE ===== //
// 1. home -> .home__content

// 2. class css -> .section__title
const sectionTitle = document.querySelectorAll('.section__title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
});

// 3. class css -> .section__subtitle
const sectionSubtitle = document.querySelectorAll('.section__subtitle');
sectionSubtitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 4. countdown timer -> .timer__box
const timerBox = document.querySelectorAll('.timer__box');
timerBox.forEach((n, i) => {
	n.dataset.aos = 'flip-left';
	n.dataset.aosDelay = i * 100;
});

// 5. gallery -> .gallery__box
const galleryBox = document.querySelectorAll('.gallery__box');
galleryBox.forEach((img, i) => {
	img.dataset.aos = 'zoom-in-down';
	img.dataset.aosDelay = i * 100;
});

// 6. video -> .video__frame

// 7. rsvp -> .rsvp__container

// 8. gift -> .gift__container

// 9. live streaming -> .streaming__container

// 10. groomsmen & bridesmaid -> .maids__nav, .maids__sections

// 11. prokes 
const prokesBox = document.querySelectorAll('.prokes__box');
prokesBox.forEach((n, i) => {
	n.dataset.aos = 'flip-left';
	n.dataset.aosDelay = i * 100;
});

// 12. footer -> .quotes, .footer__box

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end aos animate ===== //