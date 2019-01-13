export class TaskCollectionModule {
    constructor (tasks = []) {
        this.tasls = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

export let TaskCollectionTitle = 'My task Collection';