'use strict';

let imagesArray = ['url("images/hero-image.png")', 'url("images/glacier-np.jpg")', 'url("images/zion-np.jpg")'];

let imageCarousel = () => {
  setInterval(function(){
    $('header').css({'background-image':imagesArray[1]});
  }, 5000);

  setInterval(function(){
    $('header').css({'background-image':imagesArray[2]});
  }, 10000);

  setInterval(function(){
    $('header').css({'background-image':imagesArray[0]});
  }, 15000);
}

imageCarousel();