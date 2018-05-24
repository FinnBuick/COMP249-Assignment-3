(function(){

    /* your code goes here */

    $(document).ready(function(){

        window.app.model = new window.app.Job()
        window.app.model.getData()

        $(window).on("dataChanged", function() {

            var positions = window.app.model.getPositions()

            console.log(positions)

            for (var i = 0; i < 10; i++) {
                $('.content-left').append("<div class='row' data-id=" + positions[i].id + ">"
                + "<p class='meta'>" + new Date(positions[i].created_at).toString().substring(0,21) + "</p>"
                + "<a class='jobtitle'>" + positions[i].title + "</a>"
                + "<p class'location'><i class='icon' data-feather='map-pin'></i>" + positions[i].location + "</p>"
                + "<p class'company'><i class='icon' data-feather='briefcase'></i>" + positions[i].company + "</p>"
                + "<p class='description'>" + positions[i].description.substring(0,120) + "...</p>"
                + "</div>")
            }


            var rowClicked = false
            $(".row").on('click', function(){
                if (!rowClicked) {

                    var id = this.dataset.id
                    var position = window.app.model.getPosition(id)

                    $(".content").css("float", "left")
                    $(".content").css("width", "50%")
                    $(".content").css("margin-right", "10px")

                    $(".content-right").append("<div class='row' id=" + position.id + ">"
                    + "<p class='meta'>" + new Date(position.created_at).toString().substring(0,21) + "</p>"
                    + "<a class='jobtitle'>" + position.title + "</a>"
                    + "<p class'location'><i class='icon' data-feather='map-pin'></i>" + position.location + "</p>"
                    + "<p class'company'><i class='icon' data-feather='briefcase'></i>" + position.company + "</p>"
                    + "<p class='description'>" + position.description + "...</p>"
                    + "</div>")

                    rowClicked = true
                }
            })

            feather.replace({ width: 16, height: 16})
        })
    })
})()
