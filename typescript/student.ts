let students_obj: any[] = [
    {
		"studentID": "1",
        "studentname": "soumya",
        "marks":"85"
	},
	{
		"studentID": "2",
        "studentname": "Pallavi",
        "marks":"90"
    },
    {
		"studentID": "3",
        "studentname": "Tarun",
        "marks":"71"
    },
    {
		"studentID": "4",
        "studentname": "Subha",
        "marks":"100"
	}
];

let titles_obj: any[] = ["id", "name", "marks"];

function make_table(students: any[]) {
    
    let root = document.getElementById('mytable');
    let table = document.createElement('table');
    let table_body = document.createElement('body');

    
    table.appendChild(table_body);
    let tr_element = document.createElement('tr');
    table_body.appendChild(tr_element);

    for (var title of titles_obj) {
        let th_element = document.createElement('th')
        th_element.appendChild(document.createTextNode(title));
        tr_element.appendChild(th_element);
    }

    for (var student of students) {

        let tr_element = document.createElement('tr');
        
            let td_element_id = document.createElement('td');
            let td_element_name = document.createElement('td');
            let td_element_marks = document.createElement('td');
            td_element_id.appendChild(document.createTextNode(student.studentID.toString()));
            td_element_name.appendChild(document.createTextNode(student.studentname.toString()));
            td_element_marks.appendChild(document.createTextNode(student.marks.toString()));
            tr_element.appendChild(td_element_id);
            tr_element.appendChild(td_element_name);
            tr_element.appendChild(td_element_marks);
      
        table_body.appendChild(tr_element);
    }

    root.appendChild(table)
}

make_table(students_obj)