$(document).ready(function(){
var $div = $('<div />').appendTo('body');
$div.attr('id', 'autocompletesuggestions');
$('head').append('<style>.autoselected{background-color:#3390FF;color:#fff} #autocompletesuggestions{position:absolute;z-index:10} #autocompletesuggestions div{padding:5px;cursor:pointer;border-bottom:1px solid rgba(240,240,240,1);}</style>')
});

jQuery.fn.autocomplete = function(options){
var target = $(this);    
console.log($(this).outerHeight());

$(target).on('focusin',function(){
  var position = $(this).position();
  var width = $(this).outerWidth();
  var height = $(this).outerHeight();
  console.log(position);console.log(height);
  
  
  $("#autocompletesuggestions").css({"width":width+"px","height":"auto","top":position.top+height+"px","left":position.left+"px"});
 }).on('keyup',function(){
  this.completeArray = jQuery.grep(options.array, function( item ) {
      return item.toLowerCase().includes(target.val().toLowerCase());
    });
    var html = "";
    $.each(this.completeArray,function(index,item){
      html += '<div>'+item+'</div>';
    });
    $("#autocompletesuggestions").html(html).css({"border":"1px solid rgba(240,240,240,1)"}); 
    
    $("#autocompletesuggestions div").hover(function(){
      $("#autocompletesuggestions div").removeClass('autoselected');
      $(this).addClass('autoselected');
    }); 
    
    $("#autocompletesuggestions div").on('mousedown',function(){
      $(target).val($(this).text());
    });

    $("#autocompletesuggestions").show();
       
  }).on('focusout',function(){
    $("#autocompletesuggestions").hide();
  });

};