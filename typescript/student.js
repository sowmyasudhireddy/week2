var students_obj = [
    {
        "studentID": "1",
        "studentname": "soumya",
        "marks": "85"
    },
    {
        "studentID": "2",
        "studentname": "Pallavi",
        "marks": "90"
    },
    {
        "studentID": "3",
        "studentname": "Tarun",
        "marks": "71"
    },
    {
        "studentID": "4",
        "studentname": "Subha",
        "marks": "100"
    }
];
var titles_obj = ["id", "name", "marks"];
function make_table(students) {
    var root = document.getElementById('mytable');
    var table = document.createElement('table');
    var table_body = document.createElement('body');
    table.appendChild(table_body);
    var tr_element = document.createElement('tr');
    table_body.appendChild(tr_element);
    for (var _i = 0, titles_obj_1 = titles_obj; _i < titles_obj_1.length; _i++) {
        var title = titles_obj_1[_i];
        var th_element = document.createElement('th');
        th_element.appendChild(document.createTextNode(title));
        tr_element.appendChild(th_element);
    }
    for (var _a = 0, students_1 = students; _a < students_1.length; _a++) {
        var student = students_1[_a];
        var tr_element_1 = document.createElement('tr');
        var td_element_id = document.createElement('td');
        var td_element_name = document.createElement('td');
        var td_element_marks = document.createElement('td');
        td_element_id.appendChild(document.createTextNode(student.studentID.toString()));
        td_element_name.appendChild(document.createTextNode(student.studentname.toString()));
        td_element_marks.appendChild(document.createTextNode(student.marks.toString()));
        tr_element_1.appendChild(td_element_id);
        tr_element_1.appendChild(td_element_name);
        tr_element_1.appendChild(td_element_marks);
        table_body.appendChild(tr_element_1);
    }
    root.appendChild(table);
}
make_table(students_obj);
