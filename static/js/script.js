(function(){

    /* your code goes here */

    $(document).ready(function(){

    	$.get({
    	    url: 'http://127.0.0.1:8080/positions',
    	    headers : {
             'Access-Control-Allow-Origin' : '*'
            },
            success: function(positions){
                console.log(positions)

                for (var i = 0; i < 10; i++) {
                    $('#contentpanel').append("<div class='row'>"
                    + "<a class='jobtitle'>" + positions[i].title + "</a>"
                    + "<p class'location'>" + positions[i].location + "</p>"
                    + "<p class'company'>" + positions[i].company + "</p>"
                    + "</div>")
                }
            }
    	})
    })
})()
