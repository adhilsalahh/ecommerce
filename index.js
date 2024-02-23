   $(window).on('load', function() {
    console.log("heloo ")
    $.ajax({url: "https://api.api-ninjas.com/v1/randomimage?category=", success: function(result){
  

      // $("#image-1").html(" https://api.api-ninjas.com/v1/randomimage?category=");

    }});
    
   })
   $(document).ready(function(){
    $("#image-1").click(function() {
      $(random_imageOne).show();
      $(random_imageThree).show();
      $(random_imageTwo).show();
      $(random_imagefour).show();

      
    })
    });
const random_imageOne = () => {
  var category = 'nature';
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
      headers: { 'X-Api-Key': 'IVBX9O8hWPvvGsYsovmOAA==3t5ytEGrYzSunHP1', 'Accept': 'application/json'},
      success: function(result) {
          console.log(result);
          $('#image-1').attr('src', 'data:image/jpeg;base64,'+result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
}
const random_imageTwo = () => {
  var category = 'nature';
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
      headers: { 'X-Api-Key': 'IVBX9O8hWPvvGsYsovmOAA==3t5ytEGrYzSunHP1', 'Accept': 'application/json'},
      success: function(result) {
          console.log(result);
          $('#image-2').attr('src', 'data:image/jpeg;base64,'+result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
}
const random_imageThree = () => {
  var category = 'nature';
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
      headers: { 'X-Api-Key': 'IVBX9O8hWPvvGsYsovmOAA==3t5ytEGrYzSunHP1', 'Accept': 'application/json'},
      success: function(result) {
          console.log(result);
          $('#image-3').attr('src', 'data:image/jpeg;base64,'+result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
}
const random_imagefour = () => {
  var category = 'nature';
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
      headers: { 'X-Api-Key': 'IVBX9O8hWPvvGsYsovmOAA==3t5ytEGrYzSunHP1', 'Accept': 'application/json'},
      success: function(result) {
          console.log(result);
          $('#image-4').attr('src', 'data:image/jpeg;base64,'+result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
}

// Call the random_image function when the document is ready
$(document).ready(function() {
  random_imageOne();
  random_imageTwo();
  random_imageThree();
  random_imagefour();
});



$(document).ready(function(){
  $("#image-10").click(function() {
    $(product).show();
 
    
  })
  });



  // $.get("https://fakestoreapi.com/products", function(data, status){
  //       if (status === 'success') {
  //           // Loop through the products and display them
  //           $.each(data, function(index, product){
  //               // Create a div element for each product
  //               var productDiv = $("<div class='product'></div>");
                
  //               // Add product details to the div
  //               productDiv.append("<img src='" + product.image + "' alt='" + product.title + "'><br>");
  //               productDiv.append("<strong>" + product.title + "</strong><br>");
  //               productDiv.append("$" + product.price + "<br>");
  //               productDiv.append("<em>" + product.category + "</em><br>");
                
  //               // Append the product div to the container
  //               $("#products-container").append(productDiv);
  //           });
  //       } else {
  //           console.error("Failed to fetch data from the API");
  //       }
  //   });


  // // const product = () =>{
  // //  $.ajax({
  // //   method : 'GET',
  // //   url:'https://fakestoreapi.com/products',
  // //   success: function(result) {
  // //     console.log( result);
  // //     $('image-10').attr('src','https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'+ result)
      
  // //   },
  // //   error:function ajaxError (jqXHR){
  // //     console.error('Error: ', jqXHR.responseText)
  // //   }
  // //  }) 
  // }


  var data = 'https://fakestoreapi.com/products';
$.ajax({
    method: 'GET',
    url:'',
    headers: {'Accept': 'image/jpg'},
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

// var data = 'https://api-ninjas.com';
// var category = 'nature'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY', 'Accept': 'image/jpg'},
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });



        // const product = async () =>{
        //   try {
        //     const response =await fetch(
        //       "https://fakestoreapi.com/products"
        //     );
        //     const JSONConverted = await response.json();
        //     console.log(JSONConverted,'....');
        //     document.getElementById()


            
        //   }catch(err){
        //     console.log(err);
        //   }

        // }