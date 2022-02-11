let marsApiButtons = document.querySelectorAll("button[id*='marsApi']")

marsApiButtons.forEach( button => button.addEventListener('click', function () {
    const buttonId = this.id;
    const roverId = buttonId.split("marsApi")[1];
    let roverData = document.getElementById("marsApiRoverData");
    roverData.value = roverId;
    document.getElementById("frmRoverType").submit();
    }))

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function highlightButtonByRoverType( roverType ) {
    if (roverType == '') {
        roverType = 'curiosity'
    }
    document.getElementById('marsApi' + roverType).classList.remove('btn-secondary')
    document.getElementById('marsApi' + roverType).classList.add('btn-primary')
}

let marsRoverType = getUrlParameter("marsApiRoverData");
let marsSolInt = getUrlParameter("marsSol");
document.getElementById("marsSol").value = marsSolInt;

highlightButtonByRoverType(marsRoverType);
