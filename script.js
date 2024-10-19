startProgram = () => {

    const menu = () => {
        console.log(`Choose an operation:
            1. Add a new task
            2. Display all tasks
            3. Toggle task completion
            4. Delete a task
            5. Update task description
            6. Search a task
            7. Exit
            `)
    }
    const tasks = [];
    let taskId = 1;

    //function to add a task
    const addTasks = (taskName) => {
        tasks.push(
            {
                id: taskId++,
                description: taskName,
                completion: false
            }
        );
        console.log(`Task ${taskName} added!`);
    }

    //function to display tasks
    const print = (task) => {
        console.log(`${task.id}. ${task.description} is [${(task.completion) ? "completed!" : "not completed!"}]`);
    }

    //function to make tasks as completed 
    const toggleTaskCompletion = (taskId) => {
        const search = (task) => {
            if (task.id === taskId) {
                task.completion = true;
                console.log(`Task "${task.description}" marked as ${task.completion ? "Completed" : "Not Completed"}`);
                return true;
            }
            return false;
        };
        const found = tasks.find(search);

        if (!found) {
            console.log("Task not found");
        }
    };

    //function to delete a task
    const removeTask = (taskId) => {
        const ind = tasks.findIndex(task => task.id === taskId);
        if (ind !== -1) {
            console.log(`Task removed`);
            tasks.splice(ind, 1);
        } else {
            console.log("Task not found");
        }
    }

    //function to update a task name
    const updateTask = (taskId, newDescription) => {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.description = newDescription;
            console.log(`Task ${taskId} description updated to "${newDescription}"`);
        } else {
            console.log("Task not found.");
        }
    }

    //function to search a task
    const searchTasks = (keyword) => {
        const filteredTasks = tasks.filter(task => task.description.toLowerCase().includes(keyword.toLowerCase()));
        if (filteredTasks.length === 0) {
            console.log("No tasks match the search keyword.");
        } else {
            console.log("Search Results:");
            filteredTasks.forEach(task => {
                console.log(`[${task.id}] ${task.description} - ${task.completed ? "Completed" : "Not Completed"}`);
            });
        }
    }

    let exit = false;
    while (!exit) {
        menu();
        const choice = prompt("Enter your choice: ");
        switch (choice) {
            case '1':
                const description = prompt("Enter task description (Name): ");
                addTasks(description);
                break;
            case '2':
                tasks.forEach(print);
                break;
            case '3':
                const taskId = parseInt(prompt("Enter task ID : "));
                toggleTaskCompletion(taskId);
                break;
            case '4':
                const taskIdDelete = parseInt(prompt("Enter task ID to remove: "));
                removeTask(taskIdDelete);
                break;
            case '5':
                const taskIdUpdate = parseInt(prompt("Enter task ID to update: "));
                const newDescription = prompt("Enter new task description (Name): ");
                updateTask(taskIdUpdate, newDescription);
                break;
            case '6':
                const Name = prompt("Enter task description (Name) to search: ");
                searchTasks(Name);
                break;
            case '7':
                exit = true;
                console.log("Exiting the application");
                break;
            default:
                console.log("Invalid choice ,choose between (1-7)");
                break;
        }
    }
}


