$(document).ready(function(){
var $div = $('<div />').appendTo('body');
$div.attr('id', 'autocompletesuggestions');
$('head').append('<style>.autoselected{background-color:#3390FF;color:#fff} #autocompletesuggestions{background-color:white;position:absolute;z-index:10} #autocompletesuggestions div{padding:5px;cursor:pointer;border-bottom:1px solid rgba(240,240,240,1);}</style>')
});

jQuery.fn.autocomplete = function(options){

//setting default values if parameters not passed    
var target = $(this);        
var data = options.array;
var autofill = options.autofill!=undefined?options.autofill:true;  
var dataURL = options.url;       

if(!data && !(!dataURL)){
    $.ajax({
        url:dataURL,
        type:"get",
        data:'',
        success: function(response){
            data = JSON.parse(response+"");
        }
    });
}    
    
target.attr('autocomplete','off');
target.on('focusin',function(){
  var position = target.position();
  var width = target.outerWidth();
  var height = target.outerHeight();
    
  $("#autocompletesuggestions").css({"width":width+"px","height":"auto","top":position.top+height+"px","left":position.left+"px"});
 }).on('keyup',function(e){
    this.completeArray = jQuery.grep(data, function( item ) {
      return item.toLowerCase().includes(target.val().toLowerCase());
    });
    var html = "";
    var foundSimilar = false;
    var str = "";
    var start;
    var end;
    $.each(this.completeArray,function(index,item){
      html += '<div>'+item+'</div>';
      if(!foundSimilar){
            if(item.toLowerCase().indexOf(target.val().toLowerCase()) == 0 && target.val()!=""){
               start = target.val().length;
               end = item.length;
                str = item.substring(start,end);
                foundSimilar = true;

            }
      }
    });
    
    if(autofill && foundSimilar && checkautoFill(e)){
        target.val(target.val().concat(str));
        $(target).selectRange(start,end);
    }
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


  $.fn.selectRange = function(start, end) {
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
}; 

function checkautoFill(e){
    if(e.keyCode <= 46 || (e.keyCode >= 112 && e.keyCode <= 123) || e.ctrlKey)
        return false;
    else
        return true;
}


};

