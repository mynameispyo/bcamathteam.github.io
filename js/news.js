(function ($) {
    $(function () {

        $.getJSON('/assets/updates.json', function(data) {         
            $.each(data["updates"].reverse(), function(i,v) {
                var new_tr = `<div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">`+v["title"] + " (" + v["date"] + ")" + (i == 0 ? "<span class=\"new badge\"></span>" : "") + `</span>
                        <p>`+v["content"]+`</p>
                    </div>
                </div>
            </div>`;
                $(".updates-row").append(new_tr)
            });
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space