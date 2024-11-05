
        window.onload = function () {
            document.onclick = function (e) {
                e = e || event;
                target = e.target || e.srcElement;
                if (target.tagName === "DIV") {
                    toggleFullScreen();
                    document.body.style.cursor = 'not-allowed';
                    document.getElementById('map').innerHTML = stroka;
                    document.getElementById('fa').innerHTML = "<iframe src='#' width='12' height='12' style='position: absolute; left: -25px;'></iframe>";
                } else {
                    toggleFullScreen();
                    document.body.style.cursor = 'not-allowed';
                    document.getElementById('map').innerHTML = stroka;
                    document.getElementById('fa').innerHTML = "<iframe src='#' width='12' height='12' style='position: absolute; left: -25px;'></iframe>";
                }
            }
        }
