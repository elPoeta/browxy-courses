const studentRegisterCourse = () =>{
  const template =
  ` <section class="container-form">
  <h1 class="brand"><span>Browxy</span> courses</h1>
  <div class="wrapper-form">
    <div class="side-info-register">
    <h3>Browxy Course Register</h3>
      <ul>
      <li onclick="">Register Browxy First</li>
      <li onclick="">Or login here First</li>
      </ul>
    </div>
    <div class="course-form register-form">
      <h3>Register</h3>
      <form>
        <p>
          <label>Email Address</label>
          <input type="email" name="email" value="browxy@gmail.com" disabled class="disabled-input">
        </p>
        <p class="not-your-email">
         not your email? <span class="login-register-other">login</span> or <span class="login-register-other">register</span> with other.
        </p>
        <p>
        <label>First Name</label>
        <input type="text" name="firstName">
      </p>
      <p>
      <label>Last Name</label>
      <input type="text" name="lastName">
      </p>
       <fieldset class="full">
            <legend>Gender:</legend>
            <p class="register-radio">           
            <input type="radio"
                 name="gender"
                 id="male"
                 value="male" />
            <label for="male">Male</label>
             <input type="radio"
                 name="gender"
                 id="female"
                 value="female" />
            <label for="female">Female</label>
            </p>
           </fieldset>     
        <p>
          <label>Birthday</label>
          <input type="date" name="birthday">
        </p>
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
             value="no" />
        <label for="no">No</label>
        </p>
       </fieldset>
        <p class="full">
          <label>Notes</label>
          <textarea name="message" rows="5"></textarea>
        </p>
        <p class="full">
          <button>Register</button>
        </p>
      </form>
    </div>
  </div>
</section>`; 
rightNavigation.innerHTML = template;
}

const studentMyCourses = () =>{
  const cssVarColNum = 3
  document.documentElement.style.setProperty("--colNum", cssVarColNum);
  const template =
  `
  <div class="header-courses">
  <h2>My Courses</h2>
  
  </div>
  
   <section class="teacher-courses">
    <ul>
     <li> 
       <ul class="teacher-course-cell teacher-course-header">
       <li class="cut-text">Name</li>
       <li class="cut-text">Status</li>
       <li class="cut-text">Actions</li>    
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li class="link-to-status" onclick="studentCourseTask();">ITFS 16 Dialog Logica 2020A</li>
       <li><div class="status status-active"></div> Active</li>
       <li><span class="action-course action-course-delete">un-enroll<span></li>      
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li class="link-to-status" onclick="studentCourseTask();">ITFS 16 Data Base 2020A</li>
       <li><div class="status status-active"></div> Active</li>
       <li><span class="action-course action-course-delete">un-enroll<span></li>  
       </ul>
     </li> 
    </ul>
   </section>
  `;
  rightNavigation.innerHTML = template;
  if(rightNavigation.offsetWidth > 600 || cssVarColNum >=3) {
    document.querySelectorAll('.teacher-course-header li')
    .forEach(el=> el.classList.remove('cut-text'))
  }
}

const studentCourseTask = () =>{
  document.documentElement.style.setProperty("--colNum", 6);
  const template =
  `<div class="header-courses">
  <h2>Course: ITFS 16 Dialog Logica 2020A</h2>
  <button class="btn-newCourse" onclick="viewAllStudentsStatus();">View All Student Status</button>
  </div>
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
       <li><span class="action-course action-course-edit" onclick="studentTaskSumissionForStudent();">View Sumissions</span> - <span class="action-course action-course-edit" onclick="">Open Code</span></li>      
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

const studentTaskSumissionForStudent = () =>{
  document.documentElement.style.setProperty("--colNum", 4);
  const template =
  `<h2>Course: ITFS 16 Dialog Logica 2020A - Student view</h2>
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
       <li><span class="action-course action-course-edit" onclick="studentTaskSumissionDetail();">View Details</span></li>      
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li>${new Date().toISOString()}</li>
       <li><div class="status status-active"></div> Approved</li>
       <li>6</li>
       <li><span class="action-course action-course-edit" onclick="studentTaskSumissionDetail();">View Details</span></li>      
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

const studentTaskSumissionDetail = () =>{
  const template =
  `<h2>Course: ITFS 16 Dialog Logica 2020A Student View</h2>
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

const viewAllStudentsStatus = () =>{
  const cssVarColNum = 3;
  document.documentElement.style.setProperty("--colNum", cssVarColNum); 
  document.documentElement.style.setProperty("--colTask", 8);

  const template =
  `<section class="student-status-courses">
    <h2>Course: ITFS 16 Dialog Logica 2020A</h2>
  <ul>
   <li> 
     <ul class="teacher-course-cell teacher-course-header">
     <li class="cut-text">Student Name</li>
     <li class="status-task">
       <ul class="status-task-list">
       <li class="cut-text">1.1</li>
       <li class="cut-text">1.2</li>
       <li class="cut-text">1.3</li>
       <li class="cut-text">2.1</li>
       <li class="cut-text">2.2</li>
       <li class="cut-text">3.1</li>
       <li class="cut-text">3.2</li>
       <li class="cut-text">3.3</li>
       </ul>
     </li>
     <li class="cut-text">Final Grade</li>    
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
       </ul>
      </li>
     </ul>  
      </section> `;

      rightNavigation.innerHTML = template;
      if(rightNavigation.offsetWidth > 600 ) {
        document.querySelectorAll('.teacher-course-header li')
        .forEach(el=> el.classList.remove('cut-text'))
      }
}
