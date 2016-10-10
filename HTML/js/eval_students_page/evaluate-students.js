function update_table() {
    $.get("students_php/show_students.php", function (data) {
        document.getElementById("students_table").innerHTML = data;
    });
}

function delete_all() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to undo this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, clear it!",
        closeOnConfirm: false
    }, function () {
        $.post("students_php/delete_all.php", function () {
            update_table();
            swal("Deleted!", "You asked for it.", "success");
        });
    });
}

update_table();

