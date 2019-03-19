(function() {

    var button = document.getElementById('send_button');
    var userFile = document.getElementById('userfile');
    var mainContainer = document.getElementById('main_container');

    button.addEventListener('click', sendFile);

    function sendFile(e) {
        var formData = new FormData();

        formData.append('userfile', userFile.files[0]);

        var request = new XMLHttpRequest();

        request.onloadstart = function () {
            mainContainer.innerHTML = "";
            mainContainer.innerHTML = '<div class="alert alert-info" role="alert">Wait...</div>'
        }

        request.onerror = function() {
            mainContainer.innerHTML = '<div class="alert alert-danger" role="alert">Some error occured</div>'
        }

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                mainContainer.innerHTML = '<div class="alert alert-success" role="alert">Loaded successfully. <a href="/show_all">Show all</a></div>'
            } else if (this.status != 200) {
                mainContainer.innerHTML = '<div class="alert alert-danger" role="alert">Server return '+ this.status +' code </div>'
            }
        }

        request.open("POST", "/load_csv");
        request.send(formData);
    }
})();