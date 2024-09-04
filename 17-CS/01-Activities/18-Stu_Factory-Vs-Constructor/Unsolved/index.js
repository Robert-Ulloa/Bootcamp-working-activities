// TODO: Refactor the class to a factory function.

//factory function for creating Lesson objects
function createLesson(title, description) {
  let lessonTitle = title;
  let lessonDescription = description;

  //public methods are exposed via the returned object
  return {
    information() {
      console.log(lessonTitle, lessonDescription);
    }
  };
}

//create an instance of a Lesson using the factory function
const csForJS = createLesson('Module 17 - Computer Science', 'CS for JS');
csForJS.information();