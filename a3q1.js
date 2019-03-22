function search() {
   var form = document.getElementsByTagName("form")[0];
   var delimiter = form.delimiter.value;
   var rawText = form.toSplit.value;
   var regex = form.regex.value;
   var modifier = form.modifiers.value;
   regEx = new RegExp(regex, modifier);
   var words=0;

   var tokens = rawText.split(delimiter);
   var body = document.getElementsByTagName("body")[0];

   var counter =0;

   for (var token in tokens){
   	if (regEx.test(tokens[token])) {
   		console.log(token);
   		console.log(regEx);
   		counter++;
   	}
   	if (tokens[token] !=="") {
   		words++;
   	}
   }

   var text = document.getElementsByTagName("p")[0];
   text.innerHTML = "There is a total of " + words + " non-empty words in the text, including " + counter + " that match the RegExp";
 }
