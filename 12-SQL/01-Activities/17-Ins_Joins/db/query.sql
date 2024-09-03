SELECT 
    *
FROM 
    course_names
        JOIN departments 
        ON course_names.department_id = departments.id;
