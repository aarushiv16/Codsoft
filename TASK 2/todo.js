new Vue({
    el: '#taskList',
    data: {
        newTask: '',
        tasks: [
            { name: 'Start a new pen', done: false },
            { name: 'Read a book', done: false },
            { name: 'Meeting with team', done: false }
        ]
    },
    methods: {
        newItem: function () {
            if (!this.newTask) {
                return;
            }
            this.tasks.push({ name: this.newTask, done: false });
            this.newTask = '';
        },
        delItem: function (index) {
            this.tasks.splice(index, 1);
        }
    }
});
