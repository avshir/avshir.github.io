$(document).ready(function() {

// --------------------menu burger-----------
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');  
    })
    

  
})  

// --------------------sub-menu-------------
	let arrow = document.querySelectorAll('.arrow');
	for(i=0; i< arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}

console.log();
console.log();

console.log();