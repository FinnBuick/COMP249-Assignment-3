(function(){

    var dataChangedEvent = new Event('dataChanged')

    function Job() {
        this.url = 'http://127.0.0.1:8080/positions'
        this.positions = []
    }

    /* get data from the API endpoint and store it locally */
    Job.prototype.getData = function() {

        var self = this

        $.get({
           url: self.url,
            headers : {
             'Access-Control-Allow-Origin' : '*'
            },
           success: function(data) {
                /* store data as a property of this object */
                self.positions = data
                /* trigger the data changed event */
                window.dispatchEvent(dataChangedEvent)
           }
        })

    }

    Job.prototype.getPositions = function() {
        if (this.positions === []) {
            return []
        } else {
            return this.positions
        }
    }

    Job.prototype.getPosition = function(id) {

        var positions = this.positions

        for (var i = 0; i < positions.length; i++) {
            if(positions[i].id === id)
                return positions[i]
        }

        return []
    }


    /* export to the global window object */
    window.app = window.app || {}
    window.app.Job = Job
})()