var users = {
    // "SeanSassenrath": {},
    // "sattawatsup": {},
    // "oneCodeSlinger": {},
    // "un1crom": {},
    // "someshchandra": {},
    // "helenanderson": {},
    // "smadenian": {},
    // "ParkerDSlote": {}
}

var totals = {};
var min = {};
var max = {};

function normalize(username, attribute)
{
    var center = 0.55;
    var average = totals[attribute] / Object.keys(users).length;
    var userDistanceFromAverage = users[username][attribute] - average;
    if (userDistanceFromAverage > 0) //user is above average
    {
        var maxDistanceFromAverage = max[attribute] - average;
        return center + 0.45 * (userDistanceFromAverage / maxDistanceFromAverage);
    }
    if (userDistanceFromAverage < 0) //user is below average
    {
        var minDistanceFromAverage = min[attribute] - average;
        return center - 0.45 * (userDistanceFromAverage / minDistanceFromAverage);
    }
    return 0.55;
}

function populateCommitData(data)
{
    for (var index in data)
    {
        var username = data[index]["author"]["login"];
        var commitCount = data[index]["total"];
        var lineAddCount = 0;
        var lineDeleteCount = 0;
        for (var week in data[index]["weeks"])
        {
            lineAddCount += week["a"];
            lineDeleteCount += week["d"];
        }
        users[username] = {
            "commitCount": commitCount,
            "lineAddCount": lineAddCount,
            "lineDeleteCount": lineDeleteCount,
            "lineChangeCount": lineAddCount + lineDeleteCount
        };
    }
}

function populateGitHubData()
{
    $.ajax({
        url: "https://api.github.com/repos/dashboardearth/rewardsplatform/stats/contributors",
        dataType: "json",
        async: false,
        success: function(res){
            populateCommitData(res);
        }
    });
    // var gitreq = new XMLHttpRequest();
    // gitreq.open("GET", "https://api.github.com/repos/dashboardearth/rewardsplatform/stats/contributors", false);
    // gitreq.onreadystatechange = function() {

   // }
    for (var username in users)
    {
        console.log(username);
        var req = new XMLHttpRequest();
        req.open("GET", "http://planetdashmshackforgood2017.azurewebsites.net/api/beta/Users(%27" + username + "%27)", true);
        //req.setRequestHeader("Content-Type", "application/text");
        (function(localUsername)
        {
            req.onreadystatechange = function() {
                if (this.readyState == 4) {
                    var res;
                    try {
                        res = JSON.parse(this.responseText);
                    } catch(e) {
                        console.log("Error parsing server response: " + this.responseText + ":");
                        return;
                    }
                    console.log(res);
                    users[localUsername]["createEvents"] = res.createEventCount;
                    users[localUsername]["pushEvents"] = res.pushEventCount;
                    users[localUsername]["pullRequestCount"] = res.pullRequestCount;
                    users[localUsername]["daysActive"] = res.daysActive;
                    users[localUsername]["actionVelocity"] = res.actionVelocity;
                    users[localUsername]["pullConversionRate"] = res.pullConversionRate;
                    // var userData = {
                    //     "createEvents": res.createEventCount,
                    //     "pushEvents": res.pushEventCount,
                    //     "pullRequestCount": res.pullRequestCount,
                    //     "daysActive": res.daysActive,
                    //     "actionVelocity": res.actionVelocity,
                    //     "pullConversionRate": res.pullConversionRate
                    // };
                    // console.log(userData);
                    // users[localUsername] = userData;

                    for (key in users[localUsername])
                    {
                        totals[key] = totals[key] ? totals[key] += users[localUsername][key] : users[localUsername][key];
                        if (!min[key])
                        {
                            min[key] = users[localUsername][key];
                        } 
                        else
                        {
                            if (users[localUsername][key] < min[key])
                                min[key] = users[localUsername][key];
                        }
                        if (!max[key])
                        {
                            max[key] = users[localUsername][key];
                        } 
                        else
                        {
                            if (users[localUsername][key] > max[key])
                                max[key] = users[localUsername][key];
                        }
                    }
                }
            };
        })(username);
        req.send();  
    }
   // window.setTimeout(() => {console.log(totals);}, 3000);
}

// function calculateGitHubTotals()
// {
//     var totals = {};
//     for (user in users)
//     {
//         var userData = users[user];
//         for (key in userData)
//         {
//             totals[key] = totals[key] ? totals[key] += userData[key] : userData[key];
//         }
//     }
//     return totals;
// }

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
        //console.log(res);
        var url = "http://sandbox.ora.me/embed?id=" + res.id + "&size=600";
        //console.log(url);
        $('#userhalo').attr('src', url);
        $('#haloId').html(res.id);
      }
    }
    req.send(JSON.stringify(newHaloDefinition));    
}

function generateUserHalo(username)
{
    //var username = $("#usernames").val();
    var userData = users[username];
    var userVertices = {
        "size": normalize(username, "daysActive"),
        "speed": normalize(username, "actionVelocity"),
        "brightness": normalize(username, "pullRequestCount"),
        "complexity": normalize(username, "lineChangeCount"),
        "color": normalize(username, "commitCount"),
        "wobble": 0.5,
        //normalize(username, "pullConversionRate"),
        "colorCenter": normalize(username, "pullRequestCount"),
        "colorCenterRatio": 0.5,
        //userData["commitCount"] > 0 ? userData["commitCount"] / userData["pullRequestCount"] : normalize(username, "pullRequestCount"),
        "waveCount": userData["createEvents"] <= 10 ? userData["createEvents"] : 10,
        "highlightRing": normalize(username, "createEvents")
    };
    console.log(userVertices);
    generateNewHalo(userVertices);

    //var req = new XMLHttpRequest();
    //req.open("GET", "http://planetdashmshackforgood2017.azurewebsites.net/api/beta/Users(%27" + username + "%27)", true);
    //req.setRequestHeader("Content-Type", "application/text");
    // req.onreadystatechange = function() {
    //   if (req.readyState == 4) {
    //     var res;
    //     try {
    //       res = JSON.parse(req.responseText);
    //     } catch(e) {
    //       console.log("Error parsing server response: " + req.responseText + ":");
    //       return;
    //     }
    //     //console.log(res);
    //     var uservertices = {
    //         "size": res.size,
    //         "speed": res.speed,
    //         "brightness": res.brightness,
    //         "complexity": res.complexity,
    //         "color": res.color,
    //         "wobble": res.wobble,
    //         "colorCenter": res.colorCenter,
    //         "colorCenterRatio": res.colorCenterRatio,
    //         "waveCount": 10,
    //         "highlightRing": res.highlightRing
    //     };
    //     //console.log(uservertices);
    //     generateNewHalo(uservertices);
    //   }
    // }
    // req.send(username);    
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
    populateGitHubData();

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

    $('a').click(function(e)
    {
        var target = (e.target) ? e.target : e.srcElement;
        $('a').css('color', 'white');
        $(target).css('color', '#ff0066');
    });
});