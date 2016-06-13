window.onload = function(){
  var PRIV_KEY = "91a622c71829b786e82a6cf458061180edad8b4d";
  var API_KEY = "51966208f38f0353c12bbbd842711fcb";
  var ts = new Date().getTime();
  var url = "http://gateway.marvel.com:80/v1/public/characters?series=20432&apikey=" + API_KEY;
  var md5 = function(value) {
    return CryptoJS.MD5(value).toString();
  }

  var hash = md5(ts + PRIV_KEY + API_KEY);
  url += "&ts="+ts+"&hash="+hash;

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send(null);

  request.onload = function(){
    loadHeroCompareChart(request.responseText);    
  } 
 
  
}
 
var loadHeroCompareChart = function(responseText){
  var characters = [];
  var objects = JSON.parse(responseText);
  // console.log(objects);
  for(character of objects.data.results){
  characters.push({
    name: character.name,
    y: character.comics.available,
    image: character.thumbnail.path +"/standard_amazing.jpg"
   })
  }
  // console.log(characters);
  var pc = new PieChart("Heros", characters)
  document.getElementById('spiderman').src = characters[1].image;
  document.getElementById('ironman').src = characters[0].image;
  document.getElementById('miles').src = characters[2].image;

  var spiderMan = document.getElementById('1');
  var ironMan = document.getElementById('2');
  var Miles = document.getElementById('3');
  spiderMan.onclick = function(){
    console.log('clicked');
  }
}









  


