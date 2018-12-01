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