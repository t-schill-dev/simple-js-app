let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(e){if("object"==typeof e)return t.push(e)}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){return t.imageUrl=e.sprites.other.dream_world.front_default,t.height=e.height,t.types=e.types,t}).catch(function(t){console.log(t)})}function a(t){o(t).then(t=>{!function(t){$(".modal-title").empty().append(t.name),$(".modal-body_image").attr("src",t.imageUrl),$(".modal-body_attributes").empty().append("Height: "+t.height+"m, Type: "+t.types[0].type.name)}(t)})}return{add:n,getAll:function(){return t},addListItem:function(t){let e=document.createElement("div"),n=document.createElement("button");$(e).addClass("list-group-item col-lg-4 col-md-6 col-sm-12"),$(n).text(t.name),$(n).addClass("btn btn-block pokemon-btn"),$(n).attr("type","button"),$(n).attr("data-toggle","modal"),$(n).attr("data-target","#pokemon-modal"),$(e).append(n),$("#pokemon-list").append(e),$(n).on("click",()=>{a(t)})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.log(t)})},loadDetails:o,showDetails:a}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});