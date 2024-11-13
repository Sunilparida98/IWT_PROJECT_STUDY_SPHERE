(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery



  // show sidebar


  const showSidebar = (toggleId, sidebarId) =>{
   const toggle = document.getElementById(toggleId),
   sidebar = document.getElementById(sidebarId)
  

   if(toggle && sidebar){
       toggle.addEventListener('click', ()=>{
           /* Show sidebar */
           sidebar.classList.toggle('show-sidebar')
          
       })
   }
}
showSidebar(header-toggle,sidebar)
// const hiden_navbar = document.getElementById(header-toggle);




//feedback
 document.addEventListener('DOMContentLoaded', () => {
  let rating = 0;

  const ratingStars = document.querySelectorAll('#rating-stars .star');
  const form = document.getElementById('feedback-form');

  ratingStars.forEach((star) => {
    star.addEventListener('click', () => {
      rating = star.getAttribute('data-star');
      updateStarColors(rating);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name1').value;
    const email = document.getElementById('email1').value;
    const feedback = document.getElementById('feedback1').value;

    console.log(`Name: ${name}, Email: ${email}, Rating: ${rating}, Feedback: ${feedback}`);
    alert("Thank you for your feedback!");
  });

  function updateStarColors(rating) {
    ratingStars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }
});
