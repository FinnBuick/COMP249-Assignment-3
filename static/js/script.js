(function(){

    /* your code goes here */

    $(document).ready(function(){

        window.app.model = new window.app.Job()
        window.app.model.getData()

        $(window).on("dataChanged", function() {

            var positions = window.app.model.getPositions()

            console.log(positions)

            for (var i = 0; i < 10; i++) {
                $('#content-left').append("<div class='row' id=" + positions[i].id + ">"
                + "<p class='meta'>" + new Date(positions[i].created_at).toString().substring(0,21) + "</p>"
                + "<a class='jobtitle'>" + positions[i].title + "</a>"
                + "<p class'location'><i class='icon' data-feather='map-pin'></i>" + positions[i].location + "</p>"
                + "<p class'company'><i class='icon' data-feather='briefcase'></i>" + positions[i].company + "</p>"
                + "<p class='description'>" + positions[i].description.substring(0,120) + "...</p>"
                + "</div>")
            }

            $(".row").on('click', function(){
                $("#content-left").css("margin", "60px 10px 10px 10px")
                $("#content-left").css("width", "50%")
                
            })

            feather.replace({ width: 16, height: 16})
        })
    })
})()
