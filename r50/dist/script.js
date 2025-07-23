var $divs = $("#pages > div");
$("#menu-picker a").click(function() {
  $divs.hide().filter(".portfolio" + $(this).data('id')).show();
}).first().click();