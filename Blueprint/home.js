$(".search-btn").click(function(){
    var str = $(".search-txt").val();
    loadInvestopedia(investopedia_json, str);
    loadDictionary(dictionary_json, str);
    // alert(str);
});

function loadInvestopedia(json, searchResult){
    let defination="cannot be found";
    let explaination="cannot be found";
    var i;
    for(i=0; i<json.length; i++){
        if(searchResult == json[i].keyword){
            var jsonObject = json[i]
            defination = searchResult
            explaination=jsonObject.defination
            
        }
    }
    const html = `
    <div class="defination">
    <h2>${defination}</h2>
        <p>
            ${explaination}
        </p>
    
    </div>
  `;
  $(".investopedia .defination").replaceWith(html);

}

function loadDictionary(json, searchResult){
    let defination="cannot be found";
    let explaination="cannot be found";
    var i;
    for(i=0; i<json.length; i++){
        if(searchResult.toLowerCase() == json[i].keyword.toLowerCase()){
            var jsonObject = json[i]
            defination = searchResult
            explaination=jsonObject.defination
        }

    }
    const html = `
    <div class="defination">
    <h2>${defination}</h2>
        <p>
            ${explaination}
        </p>
    
    </div>
  `;
  $(".dictionary .defination").replaceWith(html);

}


$('#close-icon').click(function() {
    console.log('close');
    window.close();
})


$(".tab-container .button-container #investopedia-button").click(function(){
    showPanel(0);
});


$(".tab-container .button-container #dictionary-button").click(function(){
    showPanel(1);
});


var tabButtons = document.querySelectorAll(".tab-container .button-container button");
var tabPanels = document.querySelectorAll(".tab-container .tab-panel");

function showPanel(panelIndex){
    tabButtons.forEach(function(node){
        node.style.backgroundColor="lightgreen";
    });
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabButtons[panelIndex].style.backgroundColor="#44D795"
   tabPanels[panelIndex].style.display="block"
   tabPanels[panelIndex].style.backgroundColor="#44D795"
}
showPanel(0);