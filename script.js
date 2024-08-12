
        /*function to trigger an action after an event occurs. The action is to display the navigation menu after clicking the hamburger menu on the top right, on device smaller than 768px wide. */
        let hamburger = document.querySelector(".hamburger");
        let navMenu = document.querySelector(".nav-menu");

        /*Active class is added in the media query. It is added and removed with the funciton in order to make the navigation menu appear/displayed and disappear. */

        function mobileMenu() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle("active");
        }                    
        //Calling the function after click event occurs
        hamburger.addEventListener('click', function() {
          mobileMenu();
        });

