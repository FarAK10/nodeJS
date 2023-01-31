export const getStudents  = 'SELECT * FROM students';
export const getStudentsBYID =  'SELECT * FROM students WHERE id = $1';
export const checkEmailExist = 'SELECT s FROM students s WHERE s.email = $1';
export const addStudentQuery  = 'INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)';
export const deleteUserQuery = 'DELETE FROM students WHERE id = $1';
export const updateUserQuery = 'UPDATE students SET name = $1 WHERE id = $2';