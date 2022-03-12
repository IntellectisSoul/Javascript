//incomplete html file...

function GetData()  {
  var XMLReq = new XMLHttpRequest();

  XMLReq.open( "GET", "https://edition.cnn.com/", false )


  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      alert(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

document.querySelector("#getDataBtn").addEventListener('click', GetData);
<button id="getDataBtn">Get Data</button>