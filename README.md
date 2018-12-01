# Autocomplete

A Plugin for autocomplete.

# Usage

Plugin requires you to load jQuery first.

Then load the autocomplete.min.js file

`<script type="text/javascript" src="autocomplete.min.js"></script>`

## Using it for input fields

You have to call the autocomplete function.
<pre>
$("#auto").autocomplete({  
});</pre>

For getting suggestions you have to pass an array for suggestions as parameter to the function.
<pre>
var params = ['Apple','Orange','Grapes','Banana'];
 $("#auto").autocomplete({  
    array: params
 });
</pre>

## Allow autofill

You can choose if you want to auto fill the input field. By deafult the param is set to true.

<pre>
var params = ['Apple','Orange','Grapes','Banana'];
 $("#auto").autocomplete({  
    array: params,
    autofill:false
 });
</pre>

## Fetch Suggestions using Ajax

If you want to get suggestion from a server. You can provide the url

<pre>
 $("#auto").autocomplete({  
    autofill:false,
    url: "PASTE YOUR URL HERE"
 });
</pre>

If both `array` and `url` are passed as parameter then only `array` will be consider for suggestion. So if you want data from `url` you have to skip the `array` parameter.