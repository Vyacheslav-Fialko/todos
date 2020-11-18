export const addProjectModal = `
    <div class="modal">
        <form class="form">
            <label for="addProject" class="form__label">name project</label>
            <input type="text" class="form__input" id="addProject" placeholder="enter project name" name="project-name" required>
            <button class="form__btn" type="submit" id="add-project-btn">add project</button>
            <p class="form__info"><a href="#" class="form__link" id="close">close</a></p>
            <p class="form__msg hide"></p>
        </form>
    </div>
    `;

export function editProjectModal(id, content) {
    return `
    <div class="modal">
        <form class="form">
            <label for="editProjectModal" class="form__label">name project</label>
            <input type="text" class="form__input" id="editProjectModal" placeholder="enter project name" name="project-name" value="${content}" required>
            <input type="text" hidden value="${id}" name="id">
            <button class="form__btn" type="submit" id="edit-project-btn">edit project</button>
            <p class="form__info"><a href="#" class="form__link" id="close">close</a></p>
            <p class="form__msg hide"></p>
        </form>
    </div>
`;
}

export function editTaskModal(id, content, deadline, priority) {
    return `
    <div class="modal">
        <form class="form">
            <label for="editTasktModal" class="form__label">name task</label>
            <input type="text" class="form__input" id="editTasktModal" placeholder="enter task name" name="name" value="${content}" required>
            <label for="deadline" class="form__label">deadline</label>
            <input type="date" name="deadline" id="deadline" class="form__input" ${deadline} >
            <label for="priority" class="form__label">priority</label>
            <input type="number" name="priority" value="${priority}" min="0" max="100" class="form__input" id="priority">
            <button class="form__btn" type="submit" id="edit-task-btn" data-id="${id}">edit task</button>
            <p class="form__info"><a href="#" class="form__link" id="close">close</a></p>
            <p class="form__msg hide"></p>
        </form>
    </div>
`
};
