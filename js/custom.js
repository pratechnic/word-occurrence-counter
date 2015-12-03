function onlyUnique(value, index, self) {         //returns all unique elements in an array
          return self.indexOf(value) === index;
        }

function sortObj(obj){                            //Sorts the object passed in Descending Order
  var sortem=[];
  for(i in obj)
    sortem.push([i, obj[i]]);
  sortem.sort(function(a,b){return b[1]-a[1];});
  return sortem;
}

function trim(str){                               //To Remove trailing whitespaces
  return /\S/.test(str);
}

function get_count(){
  $('#occurences>h2').remove();     //the only jQuery used is to clear the result div
  $('#result>pre').remove();

  var words = $(".fields").map(function() {return this.value.toLowerCase();})          //Combines the lowecase text input from all the fields and tokenizes the string
                          .get()                                                       
                          .join()
                          .split(/[.\s,]+/);

  var count = {};

  for(var i=0; i<words.length; i++){                                                   //Object count is initialized with the count of unique words
      var word = words[i];
      count[word] = count[word] ? count[word]+1 : 1;
  }

  delete count[''];
  var unique = words.filter(onlyUnique);
  unique = unique.filter(trim);
  
  var objTo = document.getElementById('result');                                       //Creating the heading & pre elements
  var pre = document.createElement('pre');
  var occurrences=document.getElementById('occurences');
  var heading = document.createElement('h2');

   if(unique.length){
    heading.innerHTML="Unique Occurrences: "+unique.length;
    pre.innerHTML = JSON.stringify(sortObj(count),null,2);
  }
  else
  {
    heading.innerHTML="Enter something first!";
  }  
  occurences.appendChild(heading);
  objTo.appendChild(pre);
}
