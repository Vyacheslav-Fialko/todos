export function allProject() {
    $.get("./vendor/project.php", function (data) {
        data = JSON.parse(data);
        if (data) {
                $.each(data, (index, project) => {
                    let tasks = '';
                    if (project.tasks) {
                        let tasksSortByPriority = project.tasks.sort((a, b) => a.priority*1 > b.priority*1 ? 1 : -1);
                        let tasksSortByStatus = tasksSortByPriority.sort((a, b) => a.status > b.status ? 1 : -1);
                        
                        tasks = '<ul class="tasks">'
                        $.each(tasksSortByStatus, (index, task) => { 
                            tasks += `<li class="task" data-id="${task.id}" data-priority="${task.priority}" title="deadline: ${task.deadline}, priority: ${task.priority}">
                            <span class="task__chek">
                                <input type="checkbox" ${task.status == 1 ? 'checked' : ''} data-id="${task.id}" name="status" class="checkbox">
                            </span>
                            
                            <p class="task__name" data-id="${task.id}">${task.name}</p>

                            
                            <a href="#" class="task__btn edit-task" ${task.status == 1 ? 'style="display: none"' : ''}>
                                <i class="fas fa-pencil-alt task__icon" data-id="${task.id}"></i>
                            </a>
                            <a href="#" class="task__btn delete-task">
                                <i class="fas fa-trash-alt task__icon" data-id="${task.id}"></i>
                                </a>
                            
                            </li>` ;
                        });
                        tasks +='</ul>'
                    }
                    $('.main').prepend(`<article class="project">
                        <header class="project__header">
                        <i class="far fa-clipboard project__header-icon"></i>
                        <h2 class="project__title" data-id="${project.id}">${project.name}</h2>
                        <a href="#" class="project__header-link edit-project"><i class="fas fa-pencil-alt project__header-icon" data-id="${project.id}"></i></a>
                        <a href="#" class="project__header-link delete-project"><i class="fas fa-trash-alt project__header-icon" data-id="${project.id}"></i></a>
                        </header>
                        <form class="add-task-form">
                        <a href="#" class="add-task-btn add-task-form__link" data-id="${project.id}">+</a>
                        <input type="text" required placeholder="create task" class="add-task-form__input" name="task-name" id="add-task__input-${project.id}">
                        <input type="text" hidden value="${project.id}" name="id">
                        <button class="add-task-form__btn add-task-btn" type="submit" data-id="${project.id}">add task</button>
                        </form>
                        <p class="form__msg form__msg-${project.id} hide"></p>
                        ${tasks}
                        </article>`
                        );
                })
        } else {

        }
    })
}

export const addProject = `<div class="add-project" id="add-project">
    <span>+</span>
    <span>add todos</span>
</div>`