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
                + "<a class='jobtitle'><b>" + positions[i].title + "</b></a>"
                + "<p class'location'><i class='icon' data-feather='map-pin'></i>" + positions[i].location + "</p>"
                + "<p class'company'><i class='icon' data-feather='briefcase'></i>" + positions[i].company + "</p>"
                + "<p class='description'>" + positions[i].description.substring(0,250) + "...</p>"
                + "</div>")
            }

            var id
            var rowClicked = false
            $(".row").on('click', function(){
                if (!rowClicked) {

                    id = this.dataset.id
                    var position = window.app.model.getPosition(id)

                    $(".content").css("width", "49%")
                    $(".content").css("margin-right", "10px")
                    $(".content-left").css("float", "left")
                    $(".content-right").css("float", "right")

                    $(".content-right").append("<div class='row' id=" + position.id + ">"
                    + "<span class='x' data-feather='x-circle'></span>"
                    + "<p class='meta'>" + new Date(position.created_at).toString().substring(0,21) + "</p>"
                    + "<a class='jobtitle'><b>" + position.title + "</b></a>"
                    + "<p class'location'><i class='icon' data-feather='map-pin'></i>" + position.location + "</p>"
                    + "<p class'company'><i class='icon' data-feat her='briefcase'></i>" + position.company + "</p>"
                    + "<p class='description'>" + position.description + "</p>"
                    + "<h2>Apply:</h2>"
                    + "<form action='/apply' method='POST'>"
                        + "<input type='text' value=></input>"
                    + "</div>")

                    rowClicked = true
                    feather.replace({ width: 20, height: 20})
            }

            $(".x").on('click', function(){
                if (rowClicked) {

                    var position = window.app.model.getPosition(id)

                    $(".content").css("width", "100%")
                    $(".content").css("margin-right", "0px")
                    $("#" + id).remove()
                    rowClicked = false
                    $(window).scrollTop(0);
                }
            })

            })

            feather.replace({ width: 16, height: 16})
        })
    })
})()
