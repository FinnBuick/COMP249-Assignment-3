(function(){

    /* Handlebars Helpers */
    Handlebars.registerHelper('trim', function(str) {
        var theString = str.substring(0,150);
        return new Handlebars.SafeString(theString + "...")
    });

    Handlebars.registerHelper('convertDate', function(str) {
        var theString = new Date(str).toString().substring(0,21)
        return new Handlebars.SafeString(theString)
    });

    $(document).ready(function(){

        window.app.model = new window.app.Job()
        window.app.model.getData()

        $(window).on("dataChanged", function() {

            var positions = window.app.model.getPositions().slice(0, 10)
            var template = Handlebars.compile($("#positions").html())
            var html = template({positions: positions})

            $('.content-left').html(html)
            
            //Presentation logic
            var id
            var rowClicked = false
            $(".row").on('click', function(){
                if (!rowClicked) {

                    id = this.dataset.id
                    var position = window.app.model.getPosition(id)
                    var template = Handlebars.compile($("#position").html())
                    var html = template(position)

                    $(".content-right").html(html)

                    $(".content").css("width", "49%")
                    $(".content").css("margin-right", "10px")
                    $(".content-left").css("float", "left")
                    $(".content-right").css("float", "right")

                    rowClicked = true

                    feather.replace({ width: 20, height: 20})
                }

                $(".x").on('click', function(){
                    if (rowClicked) {

                        $(".content").css("width", "100%")
                        $(".content").css("margin-right", "0px")
                        $(".content-right").html("")
                        rowClicked = false
                        $(window).scrollTop(0);
                    }
                })
            })

            feather.replace({ width: 20, height: 20})


            //Submit application
            $("#apply").submit(function(e) {

                console.log('Hello')

                $.ajax({
                    url: 'http://127.0.0.1:8080/apply',
                    method: 'POST',
                    data: $("#apply").serialize(),
                    success: function(data){
                        alert(data)
                    }
                })
                e.preventDefault()
            })

            //Search function
            $(".search").on("keyup", function() {
                var input = $(".search").val().toLowerCase()
                $(" .container .content-left .row").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
                })
            })
        })

    })

})()
