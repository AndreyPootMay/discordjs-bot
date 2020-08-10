const yesterday = new Vue({
    el: '#yesterday-form',
    data: {
        rows: [
            {
                'index': 0,
                'project': '',
                'activity': '',
            }
        ]
    },
    methods: {
        addRow: function () {
            const size = this.rows.length;

            this.rows.push({
                'index': size,
                'project': '',
                'activity': '',
            });

            if (size >= 0) {
                document.querySelector("#form-submit").style.display = "block";
            }
        },
        deleteRow: function(row) {
            const index = this.rows.indexOf(row);
            this.rows.splice(index, 1);
            this.reOrdering();

            if (this.rows.length == 0) {
                document.querySelector("#form-submit").style.display = "none";
            }
        },
        reOrdering: function() {
            this.rows.forEach((row, index) => {
                row.index = index;
            });
        }
    }
});

const today = new Vue({
    el: '#today-form',
    data: {
        rows: [
            {
                'index': 0,
                'project': '',
                'activity': '',
            }
        ]
    },
    methods: {
        addRow: function () {
            const size = this.rows.length;

            this.rows.push({
                'index': size,
                'project': '',
                'activity': '',
            });

            if (size >= 0) {
                document.querySelector("#form-submit").style.display = "block";
            }
        },
        deleteRow: function(row) {
            const index = this.rows.indexOf(row);
            this.rows.splice(index, 1);
            this.reOrdering();

            if (this.rows.length == 0) {
                document.querySelector("#form-submit").style.display = "none";
            }
        },
        reOrdering: function() {
            this.rows.forEach((row, index) => {
                row.index = index;
            });
        }
    }
});

const blocked = new Vue({
    el: '#blocked-form',
    data: {
        rows: [
            {
                'index': 0,
                'project': '',
                'activity': '',
            }
        ]
    },
    methods: {
        addRow: function () {
            const size = this.rows.length;

            this.rows.push({
                'index': size,
                'project': '',
                'activity': '',
            });

            if (size >= 0) {
                document.querySelector("#form-submit").style.display = "block";
            }
        },
        deleteRow: function(row) {
            const index = this.rows.indexOf(row);
            this.rows.splice(index, 1);
            this.reOrdering();

            if (this.rows.length == 0) {
                document.querySelector("#form-submit").style.display = "none";
            }
        },
        reOrdering: function() {
            this.rows.forEach((row, index) => {
                row.index = index;
            });
        }
    }
});