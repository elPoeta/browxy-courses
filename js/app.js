//const root = document.querySelector('#root');
const rightNavigation = document.querySelector('#rightNavigation');

const courses = [
  {institution: undefined, name: undefined, year: undefined, division:undefined},
  {institution:"ITFS 16",name:"ITFS 16 Dialog logica 2020A",year:2020,division:"A", status: true},
  {institution:"ITFS 16",name:"ITFS 16 Data Base 2020A",year:2020,division:"A",status: false}
]; 
const home = () =>{
  rightNavigation.innerHTML = '<h2>Home - CLICK USER AREA LINK</h2>';
}

const userArea = ()=> {
  const template =
  `<section style='text-align:center;' class='userLinks'>
     <div style='padding:20px;'>
       <h3>TEACHER LINKS</h3>
       <ul style='list-style:none; padding:2px;'>
         <li><a href="#" onclick="createEditCourse(0);">Create course</a></li>
         <li><a href="#" onclick="teacherListCourses();">My Courses</a></li>
       </ul>
     </div>

     <div style='padding:20px;'>
     <h3>STUDENT LINKS</h3>
     <ul style='list-style:none; padding:2px;'>
       <li><a href="#" onclick="studentRegisterCourse();">Register Courses Form</a></li>
       <li><a href="#" onclick="studentMyCourses();">My Courses</a></li>
     </ul>
   </div>
  </section>
  `;
  rightNavigation.innerHTML = template;
 }
const createEditCourse = (id) =>{
    const {institution,name,year,division, status} = courses[id];
  
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
        <p>
        <label>Active Course</label>
        <input type="checkbox" name="status" ${status ? 'checked' : 'unchecked'}>
        <div class="status ${status ? 'status-active' : 'status-deactive'}"></div>
      </p>
        <p class="full">
          <label>Description</label>
          <textarea name="description" rows="5"></textarea>
        </p>
        <p class="full">
          <button>Save Course</button>
        </p>
      </form>
    </div>
  </div>
  </section>
  `;
  rightNavigation.innerHTML = template;
}

const teacherListCourses = () =>{
  document.documentElement.style.setProperty("--colNum", 7);
  const template =
  `
  <div class="header-courses">
  <h2>Teacher Courses</h2>
  <button class="btn-newCourse" onclick="createEditCourse(0);">Create New Course</button>
  </div>
  
   <section class="teacher-courses">
    <ul>
     <li> 
       <ul class="teacher-course-cell teacher-course-header">
       <li class="cut-text">Institution</li>
       <li class="cut-text">Name</li>
       <li class="cut-text">Year</li>
       <li class="cut-text">Division</li>
       <li class="cut-text">Status</li>
       <li class="cut-text">Students</li>
       <li class="cut-text">Actions</li>    
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>ITFS 16</li>
       <li class="link-to-status" onclick="studentStatusForCourse();">ITFS 16 Dialog Logica 2020A</li>
       <li>2020</li>
       <li>A</li>
       <li><div class="status status-active"></div> Active</li>
       <li>15</li>
       <li><span class="action-course action-course-edit" onclick="createEditCourse(1);">Edit</span> - <span class="action-course action-course-delete">Delete</span></li>      
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>ITFS 16</li>
       <li class="link-to-status" onclick="studentStatusForCourse();">ITFS 16 Data Base 2020A</li>
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
  if(rightNavigation.offsetWidth > 600) {
    document.querySelectorAll('.teacher-course-header li')
    .forEach(el=> el.classList.remove('cut-text'))
  }
}
let taskId =1;
const createEditTask = () => {
  let taskName = '';
  const template =
  `<section class="container-form-task">
  <h2 class="brand"><span>Browxy</span> courses</h2>
  <p class="full">
  <button onclick="newTaskForm(${taskId});">Add New Task</button>
</p>
   ${taskForm(0)}
   <div id="container-form-task">
   <div class="btn-task-conatiner">
   <button id="submit-tasks">Submit tasks</button>
   <button id="cancel-tasks">Cancel</button>
   </div>
   </div>

  </section>
  `;

  rightNavigation.innerHTML = template;
}

const taskForm = (taskId) => (
  `<div id="form-${taskId}" class="wrapper-form-task">
  <div class="side-info-task">
    <h3 id="ntsk-${taskId}">Name task</h3>
    <ul>
    <li onclick="">up</li>
    <li onclick="">down</li>
    <li onclick="">trash</li>
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
    </form>
  </div>
</div>`);

const newTaskForm = () => {
  taskId++;
 document.querySelector(`#container-form-task`).insertAdjacentHTML('afterbegin', taskForm(taskId));
}
const editTask = () => {
  
  rightNavigation.innerHTML = 'Edit Task';
}

const studentStatusForCourse = () =>{
  document.documentElement.style.setProperty("--colNum", 4); 
  document.documentElement.style.setProperty("--colTask", 5);

  const template =
  `<section class="student-status-courses">
    <h2>Course: ITFS 16 Dialog Logica 2020A</h2>
  <ul>
   <li> 
     <ul class="teacher-course-cell teacher-course-header">
     <li class="cut-text">Student Name</li>
     <li class="status-task">
       <span>Tasks</span>
       <ul class="status-task-list">
       <li class="cut-text">1.1</li>
       <li class="cut-text">1.2</li>
       <li class="cut-text">1.3</li>
       <li class="cut-text">2.1</li>
       <li class="cut-text">2.2</li>
       </ul>
     </li>
     <li class="cut-text">Final Grade</li> 
     <li class="cut-text">Actions</li>    
     </ul>
   </li> 
   <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>Fulano de Tal</li>
       <li class="status-task">
       
        <ul class="status-task-list">
        <li class="cut-text" style="color: green;">7</li>
        <li class="cut-text" style="color: green;">8</li>
        <li class="cut-text" style="color: red;">3</li>
        <li class="cut-text" style="color: red;">6</li>
        <li class="cut-text" style="color: green;">10</li>
        </ul>
       </li>
       <li>8</li>
       <li><span class="action-course action-course-edit" onclick="editStudent();">Edit</span> - <span class="action-course action-course-edit" onclick="studentTaskDetail();">tasks</span> -  <span class="action-course action-course-delete">Delete</span></li>      
       </ul>
      </li>
     </ul>  
      </section> `;

  rightNavigation.innerHTML = template;
  if(rightNavigation.offsetWidth > 600) {
    document.querySelectorAll('.teacher-course-header li')
    .forEach(el=> el.classList.remove('cut-text'))
  }
}

const studentTaskDetail = () =>{
  document.documentElement.style.setProperty("--colNum", 6);
  const template =
  `<h2>Course: ITFS 16 Dialog Logica 2020A</h2>
  <h2>Student: Fulano de Tal</h2>
   <section class="teacher-courses">
    <ul>
     <li> 
       <ul class="teacher-course-cell teacher-course-header">
       <li class="cut-text">Unit Id</li>
       <li class="cut-text">Task Id</li>
       <li class="cut-text">Task Name</li>
       <li class="cut-text">Last Status</li>
       <li class="cut-text">Last Grade</li>
       <li class="cut-text">Actions</li>    
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>1</li>
       <li>1</li>
       <li>hello World</li>
       <li>Finished</li>
       <li>8</li>
       <li><span class="action-course action-course-edit" onclick="studentTaskSumission();">View Sumissions</span></li>      
       </ul>
     </li> 
    </ul>
   </section>
  `;
  rightNavigation.innerHTML = template;
  if(rightNavigation.offsetWidth > 600) {
    document.querySelectorAll('.teacher-course-header li')
    .forEach(el=> el.classList.remove('cut-text'))
  }
}

const studentTaskSumission = () =>{
  document.documentElement.style.setProperty("--colNum", 4);
  const template =
  `<h2>Course: ITFS 16 Dialog Logica 2020A</h2>
  <h2>Student: Fulano de Tal</h2>
  <h2>Task: unit: 1 - task#: 1 - taskName: HelloWorld</h2>
   <section class="teacher-courses">
    <ul>
     <li> 
       <ul class="teacher-course-cell teacher-course-header">
       <li class="cut-text">Date Time</li>
       <li class="cut-text">Status</li>
       <li class="cut-text">Grade</li>
       <li class="cut-text">Actions</li>    
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>${new Date().toISOString()}</li>
       <li><div class="status status-active"></div> Approved</li>
       <li>8</li>
       <li><span class="action-course action-course-edit" onclick="taskSumissionDetail();">View Details</span></li>      
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>${new Date().toISOString()}</li>
       <li><div class="status status-active"></div> Approved</li>
       <li>6</li>
       <li><span class="action-course action-course-edit" onclick="taskSumissionDetail();">View Details</span></li>      
       </ul>
     </li> 
    </ul>
   </section>
  `;
  rightNavigation.innerHTML = template;
  if(rightNavigation.offsetWidth > 600) {
    document.querySelectorAll('.teacher-course-header li')
    .forEach(el=> el.classList.remove('cut-text'))
  }
}

const taskSumissionDetail = () =>{
  const template =
  `<h2>Course: ITFS 16 Dialog Logica 2020A</h2>
  <h2>Student: Fulano de Tal</h2>
  <h2>Task: unit: 1 - task#: 1 - taskName: HelloWorld</h2>
  <h2>Sumission: ${new Date().toISOString()}</h2>
  <section>
   <article class="code">
   <h4>Code</h4>
   <pre><code>
     package testpackage;
    
     public class HelloWorld {
  
       public static void main(String[] args) {
           System.out.println("hello world!");
       }
   
     }
     </code>
   </pre>
   </article>
   <article class="results">
    <h4>Test Results:</h4>
    <ul>
      <li>Test that can recive arguments: <span style="color:green;">OK</span></li>
      <li>Test check no arguments: <span style="color:green;">OK</span></li>
    </ul>
   </article>
   <article class="style-results">
   style-results
   </article>
  </section>
  `;

  rightNavigation.innerHTML = template;
}

const editStudent = () =>{
  const template =
  ` <section class="container-form">
  <h1 class="brand"><span>Browxy</span> courses</h1>
  <div class="wrapper-form">
    <div class="side-info-register">
    <h3>Edit Student</h3>
    </div>
    <div class="course-form register-form">
      <h3>Edit</h3>
      <form>
        <p>
          <label>Email Address</label>
          <input type="email" name="email" value="fulano@gmail.com" >
        </p>
        <p>
        <label>Birthday</label>
        <input type="date" name="birthday" value="1999-07-22">
        </p>
        <p>
        <label>First Name</label>
        <input type="text" name="firstName" value="Fulano">
      </p>
      <p>
      <label>Last Name</label>
      <input type="text" name="lastName" value="de Tal">
      </p>
       <fieldset class="full">
            <legend>Gender:</legend>
            <p class="register-radio">           
            <input type="radio"
                 name="gender"
                 id="male"
                 value="male" 
                 checked="checked"/>
            <label for="male">Male</label>
             <input type="radio"
                 name="gender"
                 id="female"
                 value="female" />
            <label for="female">Female</label>
            </p>
           </fieldset>     
        <fieldset class="full">
        <legend>Know programming before:</legend>
        <p class="register-radio">           
        <input type="radio"
             name="knowPrg"
             id="yes"
             value="yes" />
        <label for="yes">Yes</label>
         <input type="radio"
             name="knowPrg"
             id="no"
             value="no" 
             checked="checked"/>
        <label for="no">No</label>
        </p>
       </fieldset>
        <p class="full">
          <label>Student Notes</label>
          <textarea name="message" rows="5">Awesome!! course...</textarea>
        </p>
        <p class="full">
          <label>Teacher Notes</label>
          <textarea name="message" rows="5"></textarea>
        </p>
        <p class="full">
          <button>Save</button>
        </p>
      </form>
    </div>
  </div>
</section>`; 
rightNavigation.innerHTML = template;
}