// accordion
    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });

    // map

  
  
  //scroll on mobile
  function tabs(cont){
    var paraContent = document.getElementById('tab-content');

    if(cont == 'main'){
      paraContent.innerHTML = 'Environmentally Sensitive Building, Designed <br> to Resist Seismic Force of Zone III';
    }else if(cont == 'first'){
      paraContent.innerHTML = 'Granite Top Kitchen Platform Dado Tiles upto Lintel Level in Kitchen Electrical Point for Fridge, Microwave, Water Purifier Washing Machine Point in Dry Balcony 3 ft. Dado Tiles in Dry Balcony Provision for Exhaust Fan';
    }else if(cont == 'second'){
      paraContent.innerHTML = 'Concealed Plumbing with Standard C.P. Fittings & Sanitary Fixtures Brick Bat/ Chemical Double Coat Water Proofing in Bathrooms, Terraces & Dry Balcony';
    } else if(cont == 'third'){
      paraContent.innerHTML = 'Designer Entrance Lobby';
    } else if(cont == 'four'){
      paraContent.innerHTML = 'Solar Water Connection In 1 Washroom False Ceiling in Bathrooms LED Tube Lights and Fans in Entire Flat';
    } else if(cont == 'five'){
      paraContent.innerHTML = 'Designer Laminate Finish Main Door Both Side Laminated Flush Door in Bedrooms and Bathrooms Powder Coated French Doors for Living Terrace';
    } else if(cont == 'six'){
      paraContent.innerHTML = 'Three Track Powder Coated Aluminum Sliding Windows with sliding glass shutters, mosquito net M. S. Railing for Balcony and Terrace Marble/granite window sill Aluminium Louvers with Exhaust Fan Provision in Bathroom Safety Grill for Window';
    } else if(cont == 'seven'){
      paraContent.innerHTML = 'Internally Double Coated OBD Paint Externally Semi Acrylic Paint';
    } else if(cont == 'eight'){
      paraContent.innerHTML = 'Concealed Wiring with Modular Switches A.C Point in Master Bedroom Exhaust Fan Point in Kitchen & Bathroom Separate MCB/ELCB for Each Apartment TV & Telephone Point in Living & Master Bedroom Provision for DTH, Broadband & Inverter Point';
    } else if(cont == 'nine'){
      paraContent.innerHTML = '800mm X 800mm Vitrified Tiles in Apartment 7ft. Designer Dado Tiles in Bathrooms Anti-skid Ceramic Tiles in Bathrooms and Dry Balcony Granite/ Marble Door Frames for all Bathrooms';
    } else if(cont == 'ten'){
      paraContent.innerHTML = 'AAC Block Masonary Sand Faced External Plaster Internal Wall & Ceiling in Gypsum Finish';
    }
  
  }

  // scroll

  window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;
    if  (scroll > 600){
      $('#mynav').addClass('nav-colored');
      $('#mynav').removeClass('navbar-padding');
    }else {
      $('#mynav').removeClass('nav-colored');
      $('#mynav').addClass('navbar-padding');
    }
});

// lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
})