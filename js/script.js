        var btn = document.querySelector("#next");
        var img = document.querySelector("#profilePic");

        var backgroundImages = [
          "pics/profile.jpg",
          "pics/eating_nuts.jpg",
          "pics/in_love.jpg",
          "pics/me_and_jonathan.jpg",
        ];
        
        btn.addEventListener("click", function () {
          var currentImage = img.getAttribute("src");
          var currentIndex = backgroundImages.indexOf(currentImage);
          var nextIndex = currentIndex + 1;
          
          if (nextIndex >= backgroundImages.length) {
            nextIndex = 0;
          }

          var nextImage = backgroundImages[nextIndex];

          img.setAttribute("src", nextImage);
        });