import { addProjectModal, editProjectModal, editTaskModal } from './module/modal.js';
import { singin } from './module/singin.js';
import { singup } from './module/singup.js';
import { addProject, allProject } from './module/projects.js';

$(document).ready(isloged());
let $content = $('#main');
function isloged() {
    $.get("./isloged.php", function (data) {
        data = JSON.parse(data);
        if (data.isloged) {

            $content.html(addProject);
            allProject()
        } else {
            $content.html(singin);
        }
    });
}

// auth
$content.delegate('#register', 'click', (e) => {
    e.preventDefault();
    $content.html(singup);

});

$content.delegate('#singin', 'click', (e) => {
    e.preventDefault();
    $content.html(singin);
});

$content.delegate('#registr-btn', 'click', (e) => {
    e.preventDefault();
    $(".input__error").removeClass('input__error');
    let login = $('#login').val();
    let password = $('#password').val();
    let passwordConfirm = $('#passwordConfirm').val();
    $.ajax({
        url: 'vendor/singup.php',
        type: "POST",
        dataType: 'json',
        data: {
            login,
            password,
            passwordConfirm
        },
        success(data) {
            if (data.status) {
                isloged();
            } else {
                if (data.type) {
                    data.fields.forEach((field) => {
                        $(`#${field}`).addClass('input__error');
                    })
                }
                let msg = data.message;
                $('.form__msg').removeClass('hide').text(msg);
            }
        }
    })

});

$content.delegate('#login-btn', 'click', (e) => {
    e.preventDefault();
    $(".input__error").removeClass('input__error');
    let login = $('#login').val();
    let password = $('#password').val();
    $.ajax({
        url: 'vendor/singin.php',
        type: "POST",
        dataType: 'json',
        data: {
            login,
            password
        },
        success(data) {
            if (data.status) {
                console.log(isloged());
            } else {
                if (data.type == 1) {
                    data.fields.forEach((field) => {
                        $(`#${field}`).addClass('input__error');
                    })
                }
                let msg = data.message;
                $('.form__msg').removeClass('hide').text(msg);
            }
        }
    })
});

//project

$content.delegate('.delete-project', 'click', (e) => {
    e.preventDefault();
    let id = e.target.dataset.id;

    $.ajax({
        url: 'vendor/delete.php',
        type: 'POST',
        data: {
            id
        },
        dataType: 'json',
        success(data) {
            isloged()
        }
    });
});

$content.delegate('.edit-project', 'click', (e) => {
    e.preventDefault();
    let id = e.target.dataset.id;
    let content = $('.project__title[data-id=' + id + ']').text();
    console.log(content);
    $content.append(editProjectModal(id, content));
});

$content.delegate('#edit-project-btn', 'click', (e) => {
    e.preventDefault();
    let fields = $(":input").serializeArray();
    $.post('./vendor/edit-project.php', fields).done((data) => {
        data = JSON.parse(data)
        if (data.status) {
            isloged();
        } else {
            if (data.type) {
                $.each(data.fields, (index, field) => {
                    $(`#${field}`).addClass('input__error');
                })
            }
            let msg = data.message;
            $('.form__msg').removeClass('hide').text(msg);
        }
    });
});

$content.delegate('#add-project-btn', 'click', (e) => {
    e.preventDefault();
    let name = $('#addProject').val();
    $.ajax({
        url: 'vendor/add_project.php',
        type: "POST",
        dataType: 'json',
        data: {
            name,
        },
        success(data) {
            if (data.status) {
                isloged();
                $('.modal').remove();
            } else {
                if (data.type) {
                    data.fields.forEach((field) => {
                        $(`#${field}`).addClass('input__error');
                    })
                }
                let msg = data.message;
                $('.form__msg').removeClass('hide').text(msg);
            }
        }
    })
})

$content.delegate('#add-project', 'click', (e) => {
    e.preventDefault();
    $content.append(addProjectModal);
})


// task

$content.delegate('.add-task-btn', 'click', (e) => {
    e.preventDefault();
    $(".form__msg").addClass('hide');
    $(".add-task-form__input").removeClass('input__error');
    let id = e.target.dataset.id;
    let task = $("#add-task__input-" + id).val();
    let fields = {
        'task-name': task,
        id
    }

    $.post('./vendor/add-task.php', fields).done((data) => {
        data = JSON.parse(data)
        if (data.status) {
            isloged();
        } else {
            if (data.type) {
                $.each(data.fields, (index, field) => {
                    $(`#${field}`).addClass('input__error');
                })
            }
            let msg = data.message;
            $('.form__msg.form__msg-' + id).removeClass('hide').text(msg);
        }
    });
})

$content.delegate('.delete-task', 'click', (e) => {
    e.preventDefault();
    let id = e.target.dataset.id;
    $.ajax({
        url: 'vendor/delete-task.php',
        type: 'POST',
        data: {
            id
        },
        dataType: 'json',
        success(data) {
            isloged()
        }
    });
});

$content.delegate('.edit-task', 'click', (e) => {
    e.preventDefault();
    let id = e.target.dataset.id;
    let content = $(`p[data-id="${id}"]`).text();
    let deadline = $(`li[data-id="${id}"]`).attr('title').split(' ');
    let date = deadline[1] ? 'value=' + deadline[1] : '';
    let priority = $(`li[data-id="${id}"]`).attr('data-priority');

    $content.append(editTaskModal(id, content, date, priority));
});

$content.delegate('.checkbox', 'click', (e) => {
    let id = e.target.dataset.id;
    let status = e.target.checked;
    let priority = $(`li[data-id="${id}"]`).data('priority');
    if(status){
        priority = 0;
        status = 1;
    } else {
        status = 0;
    }
    console.log(status, priority)
    let fields = {
        id,
        status,
        priority
    }
    $.post('./vendor/edit-task.php', fields).done((data) => {
        data = JSON.parse(data)
        if (data.status) {
            isloged();
        }
    });
});

$content.delegate('#edit-task-btn', 'click', (e) => {
    e.preventDefault();
    $('#deadline').addClass('input__error');
    let name = $("#editTasktModal").val();
    let date = $("#deadline").val();
    let priority = $("#priority").val();
    let id = e.target.dataset.id;
    let today = new Date();
    today = today.getFullYear() + '-' + (+today.getMonth() + 1) + '-' + today.getDate();

    let fields = {
        id,
        name,
        'deadline': date,
        priority
    }
    console.log(fields)
    $.post('./vendor/edit-task.php', fields).done((data) => {
        data = JSON.parse(data)
        if (data.status) {
            isloged();
        } else {
            if (data.type) {
                $.each(data.fields, (index, field) => {
                    $(`#${field}`).addClass('input__error');
                })
            }
            let msg = data.message;
            $('.form__msg').removeClass('hide').text(msg);
        }
    });
});

// other
$content.delegate('#close', 'click', (e) => {
    e.preventDefault();
    $('.modal').remove();

});

function sortByCheck(arr) {
    arr.sort((a, b) => a.status > b.staus? 1 : -1);
}
