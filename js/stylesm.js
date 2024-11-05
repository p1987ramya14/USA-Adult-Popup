

    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 122 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 13) {
            document.getElementById('map').innerHTML = stroka;
            toggleFullScreen();
        }
    }, false);