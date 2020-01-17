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
          <input type="email" name="email" value="browxy@gmail.com" disabled>
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
       <fieldset>
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
        <fieldset>
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
          <button>Submit</button>
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
       <li class="link-to-status" onclick="">ITFS 16 Dialog Logica 2020A</li>
       <li><div class="status status-active"></div> Active</li>
       <li><span class="action-course action-course-delete">un-enroll<span></li>      
       </ul>
     </li> 
     <li> 
       <ul class="teacher-course-cell teacher-course-row">
       <li class="link-to-status" onclick="">ITFS 16 Data Base 2020A</li>
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