//const root = document.querySelector('#root');
const rightNavigation = document.querySelector('#rightNavigation');

const courses = [
  {institution: undefined, name: undefined, year: undefined, division:undefined},
  {institution:"ITFS 16",name:"ITFS 16 Dialog logica 2020A",year:2020,division:"A"},
  {institution:"ITFS 16",name:"ITFS 16 Data Base 2020A",year:2020,division:"A"}
]; 
const home = () =>{
  rightNavigation.innerHTML = '<h2>Home</h2>';
}

const userArea = ()=> {
  const template =
  `<section style='text-align:center;' class='userLinks'>
     <div style='padding:20px;'>
       <h3>TEACHER LINKS</h3>
       <ul style='list-style:none; padding:2px;'>
         <li><a href="#" onclick="createEditCourse(0);">Create course</a></li>
       </ul>
     </div>

     <div style='padding:20px;'>
     <h3>STUDENT LINKS</h3>
     <ul style='list-style:none; padding:2px;'>
       <li><a href="#" onclick="console.log('link')">x</a></li>
     </ul>
   </div>
  </section>
  `;
  rightNavigation.innerHTML = template;
 }
const createEditCourse = (id) =>{
    const {institution,name,year,division} = courses[id];
  
  const template =
  `<section class="container-form">
  <h2 class="brand"><span>Browxy</span> courses</h2>
  <div class="wrapper-form">
    <div class="side-info">
      <h3>Course</h3>
      <ul>
      <li onclick="teacherListCourses();">My Courses</li>
      <li onclick="createEditTask();">Create Task</li>
      </ul>
     
    </div>
    <div class="course-form">
      <h3>Create Course</h3>
      <form>
        <p>
          <label>Institution</label>
          <input type="text" name="institution" value="${institution || ''}">
        </p>
        <p>
          <label>Name</label>
          <input type="text" name="name" value="${name || ''}">
        </p>
        <p>
          <label>Year</label>
          <input type="number" name="year" value=${year || new Date().getFullYear()}>
        </p>
        <p>
          <label>Division</label>
          <input type="text" name="division" value="${division || ''}">
        </p>
        <p class="full">
          <label>Description</label>
          <textarea name="description" rows="5"></textarea>
        </p>
        <p class="full">
          <button>Create Course</button>
        </p>
      </form>
    </div>
  </div>
  </section>
  `;
  rightNavigation.innerHTML = template;
}

const teacherListCourses = () =>{
  const template =
  `<h2>Teacher Courses</h2>
   <section class="teacher-courses">
    <ul>
     <li> 
       <ul class="teacher-course-cell teacher-course-header">
       <li>Name</li>
       <li>Year</li>
       <li>Division</li>
       <li>Status</li>
       <li>Students</li>
       <li>Actions</li>    
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>ITFS 16 Dialog Logica 2020A</li>
       <li>2020</li>
       <li>A</li>
       <li><div class="status status-active"></div> Active</li>
       <li>15</li>
       <li><span class="action-course action-course-edit" onclick="createEditCourse(1);">Edit</span> - <span class="action-course action-course-delete">Delete</span></li>      
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>ITFS 16 Data Base 2020A</li>
       <li>2020</li>
       <li>A</li>
       <li><div class="status status-active"></div> Active</li>
       <li>15</li>
       <li><span class="action-course action-course-edit" onclick="createEditCourse(2);">Edit</span> - <span class="action-course action-course-delete">Delete</span></li>   
       </ul>
     </li> 
    </ul>
   </section>
  `;
  rightNavigation.innerHTML = template;
}
const createEditTask = () => {
  const template =
  `<section class="container-form">
  <h2 class="brand"><span>Browxy</span> courses</h2>
  <div class="wrapper-form">
    <div class="side-info">
      <h3>Task</h3>
      <ul>
      <li onclick="teacherListCourses();">My Courses</li>
      <li onclick="createEditTask();">New Task</li>
      </ul>
     
    </div>
    <div class="course-form">
      <h3>Create Task</h3>
      <form>
        <p>
          <label>Name</label>
          <input type="text" name="name" >
        </p>
        <p>
        <label>Unit</label>
        <input type="number" name="unit" >
      </p>
        <p>
          <label>Task#</label>
          <input type="number" name="task" >
        </p>
        <p>
        <label>ProgramLink id</label>
        <input type="number" name="programLink" >
      </p>
      <p>
      <input type="text" name="hiddenTestCaseFile" hidden >
    </p>
        <p class="full">
          <button>Add Task</button>
        </p>
      </form>
    </div>
  </div>
  </section>
  `;

  rightNavigation.innerHTML = template;
}

const editTask = () => {
  
  rightNavigation.innerHTML = 'Edit Task';
}

