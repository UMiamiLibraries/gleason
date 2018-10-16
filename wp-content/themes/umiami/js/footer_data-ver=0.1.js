jQuery(document).ready(function($){

  // check window height for making footer ok
  var win_height = $(window).height();
  if (win_height > 900) {
    // tweak the size of the footer area so it extends to bottom of page
    var extra_height = (win_height - 800) + "px";
    $("#wide_footer").css("min-height", extra_height);
  }

  $navmenu = $("#nav_menu");

  function addMega(){

    $(this).children("a").addClass("selected_href");
    $(this).find("[class^=mega]").stop().fadeTo('fast', 1).show();

  }

  function removeMega(){
    $(this).children("a").removeClass("selected_href");
    $(this).find(".mega_child").hide();

  }

  var megaConfig = {
    interval: 50,
    sensitivity: 4,
    over: addMega,
    timeout: 100,
    out: removeMega
  };

  $("li.mega").hoverIntent(megaConfig);

  // end hover //



  // Search box dropdown //

  var $searchme = $("#search_container");

  function addSearchme() {
    $("#search_options").stop().fadeTo('fast', 1).show();


  }

  function removeSearchme() {
    $("#search_options").stop().fadeTo('fast', 1).hide();
  }

  var searchmeConfig = {
    interval: 200,
    sensitivity: 4,
    over: addSearchme,
    timeout: 300,
    out: removeSearchme

  };

  $searchme.hoverIntent(searchmeConfig);

  var our_option = $('#search_options input:radio:checked').val();



  // End Search Dropdown zone //

  // a generic jumper used to jump from a select option box
    $(".jumper").change(function() {
    var url = $(this).val();
    window.location.href = url;
  })

  // Page level tabs

  $("a[rel*=tab-]").click(function() {
    var tab_id = $(this).attr("rel").split("-");
    // fade out current tab
    $("div[class*=tab-]").hide();
    // show desired tab
    var holder = 'div[class*=tab-' + tab_id[1] + ']';
    $(holder).show();

    var unactivate = "#page_lvl_tabs li";
    var unactivate2 = ".page_lvl_tabs li";
    
    $(unactivate).removeClass("active");
    $(this).parent().addClass("active");
    
    $(unactivate2).removeClass("active");
    $(this).parent().addClass("active");

    return false;

  });


  //Foo Table Configuration
  $(function () {
    $('.footable').footable({
        breakpoints: {
            phone: 480,
            medium: 600,
            tablet: 1024
        }
    });

    $('table').trigger('footable_expand_first_row');
  });


  





  
  
});






