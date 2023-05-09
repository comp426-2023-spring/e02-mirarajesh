function showHideShots() {
    let check = document.getElementById('opponent');
    let rps = document.getElementById('rps');
    let rpsls_game = document.getElementById('rpsls');

    if (check.checked) {
        if (rps.checked) {
            $('#shotsContainer').show();
            $('.rps.shots').show();
            $('.rpsls.shots').hide();
        } else if (rpsls_game.checked) {
            $('#shotsContainer').show();
            $('.shots').show();
        }
    } else {
        $('#shotsContainer').hide();
    }
}

function startOver() {
    $('form').show();
    $('#play').show();
    document.getElementById('userinput').reset();
    showHideShots();
    $('.results').hide();
}

function hideGame() {
    $('form').hide();
    $('#play').hide();
}

async function playGame() {
    let game = $('input[type=radio][name=game]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();
    let baseurl = window.location.href + 'app/';
    console.log(baseurl);
    let url;
    
    if (document.getElementById('opponent').checked == true) {
        url = baseurl + game + '/play/' + shot;
        console.log(url);
    } else {
        url = baseurl + game + '/play/';
    }
    
    console.log(url);
    
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    
    var results_container = document.getElementById("results");
    if (document.getElementById("opponent").checked == true) {
        results_container.innerHTML = "<pre>" + "you:" + JSON.stringify(result.player) + "opponent:" + JSON.stringify(result.opponent) + "result:" + JSON.stringify(result.result) + "</pre>";
    } else {
        results_container.innerHTML = "<pre>" + JSON.stringify(result.player) + "</pre>";
    }
    $('.results').show();
}

// Add the following line to make sure the function is called on page load
document.addEventListener("DOMContentLoaded", showHideShots);