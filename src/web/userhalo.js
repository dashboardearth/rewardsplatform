var users = [
    "SeanSassenrath",
    "sattawatsup",
    "oneCodeSlinger",
    "un1crom",
    "someshchandra",
    "helenanderson",
    "smadenian",
    "ParkerDSlote"
]

function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function generateRandomVertices()
{
    var vertices = {
        "size": Math.random(),
        "speed": Math.random(),
        "brightness": Math.random(),
        "complexity": Math.random(),
        "color": Math.random(),
        "wobble": Math.random(),
        "colorCenter": Math.random(),
        "colorCenterRatio": Math.random(),
        "waveCount": getRandomIntInclusive(0, 10),
        "highlightRing": Math.random()
    };
    return vertices;
}

function generateNewHalo(vertices) 
{
    var newHaloDefinition = {
        "app": 1000401,
        "vertices": vertices
    };
    var req = new XMLHttpRequest();
    req.open("POST", "http://sandbox.ora.me:6196/halo", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        var res;
        try {
          res = JSON.parse(req.responseText);
        } catch(e) {
          console.log("Error parsing server response: " + req.responseText + ":");
          return;
        }
        console.log(res);
        var url = "http://sandbox.ora.me/embed?id=" + res.id + "&size=600";
        console.log(url);
        $('#userhalo').attr('src', url);
        $('#haloId').html(res.id);
      }
    }
    req.send(JSON.stringify(newHaloDefinition));    
}

function generateUserHalo()
{
    var username = $("#usernames").val();
    console.log(username);
    var req = new XMLHttpRequest();
    req.open("GET", "http://planetdashmshackforgood2017.azurewebsites.net/api/beta/Users(%27" + username + "%27)", true);
    req.setRequestHeader("Content-Type", "application/text");
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        var res;
        try {
          res = JSON.parse(req.responseText);
        } catch(e) {
          console.log("Error parsing server response: " + req.responseText + ":");
          return;
        }
        console.log(res);
        var uservertices = {
            "size": res.size,
            "speed": res.speed,
            "brightness": res.brightness,
            "complexity": res.complexity,
            "color": res.color,
            "wobble": res.wobble,
            "colorCenter": res.colorCenter,
            "colorCenterRatio": res.colorCenterRatio,
            "waveCount": 10,
            "highlightRing": res.highlightRing
        };
        generateNewHalo(uservertices);
      }
    }
    req.send(username);    
}

function updateHalo()
{
    var haloId = $("#idInputField").val();
    var modifiedHaloDefinition = {
        "app": 1000401,
        "vertices": generateRandomVertices(),
        "id": haloId
    };
    var req = new XMLHttpRequest();
    req.open("PUT", "http://sandbox.ora.me:6196/halo/" + haloId, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        var res;
        try {
          res = JSON.parse(req.responseText);
        } catch(e) {
          console.log("Error parsing server response: " + req.responseText + ":");
          return;
        }
        console.log(res);
        var url = "http://sandbox.ora.me/embed?id=" + haloId + "&size=600";
        console.log(url);
        $('#userhalo').attr('src', url);
        $('#haloId').html(haloId);
      }
    }
    req.send(JSON.stringify(modifiedHaloDefinition));
}

function showHalo()
{
    var haloId = $("#idInputField").val();
    var url = "http://sandbox.ora.me/embed?id=" + haloId + "&size=600";
    console.log(url);
    $('#userhalo').attr('src', url);
    $('#haloId').html(haloId);
    
    // var req = new XMLHttpRequest();
    // req.open("GET", "http://sandbox.ora.me:6196/halo/" + haloId, true);
    // //req.setRequestHeader("Content-Type", "application/json");
    // req.onreadystatechange = function() {
    //   if (req.readyState == 4) {
    //     var res;
    //     try {
    //       res = JSON.parse(req.responseText);
    //     } catch(e) {
    //       console.log("Error parsing server response: " + req.responseText + ":");
    //       return;
    //     }
    //     console.log(res);
    //   }
    // }
    // req.send();
}

$(document).ready(function()
{
    $('#showHalo').click(function(e)
    {
        e.preventDefault();
        showHalo();
    });

    $('#updateHalo').click(function(e)
    {
        e.preventDefault();
        updateHalo();
    });

    $('#generateHalo').click(function(e)
    {
        generateNewHalo(generateRandomVertices());
    });

    $('#generateUserHalo').click(function(e)
    {   
        e.preventDefault();
        generateUserHalo();
    });
});