
 document.getElementById('Submit').addEventListener('click', function(e){
  e.preventDefault();
  var str = $('#name').val()
  if(str !== ''){
    loadusers(str)
  }else {
    var msgErr = 'Please enter what you are searching for then click Submit button'
    document.getElementById('preview').innerHTML = msgErr;
  }
 });
// Load gif from Website
function loadusers(str) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.tenor.com/v1/search?q='+str+'&key=R40DGR14U8VL&limit=10', true);
  // xhr.responseType = 'json'
  xhr.onreadystatechange = function(){
   // console.log(xhr.respons)
    if(this.status == 200 && this.readyState === 4 ){
      var preview = JSON.parse(this.responseText);
      var output = '';
      var dataResponse = preview.results
      if(dataResponse.length > 0){
        for(var i in preview.results){
        var dataResults = preview.results[i].media[0].gif.url
        output +=
           
          '<img src="'+dataResults+'" class = "img">' 
       }
      }else {
        output +=
          '<div class = "preview">' +
          '<p>No data found in the API</p>' +
          '</div>';
      }
       
     document.getElementById('preview').innerHTML = output;
    }
  }
  xhr.send();
   }
