const root = document.querySelector('#root');
const home = () =>{
  root.innerHTML = '<h2>Home</h2>';
}
const createCourses = () =>{
  
  const template =
  `<section class="container-form">
  <h2 class="brand"><span>Browxy</span> courses</h2>
  <div class="wrapper-form">
    <div class="side-info">
      <h3>Browxy Course</h3>
      <ul>
      <li>Edit Course</li>
      <li>Create Tasks</li>
      </ul>
     
    </div>
    <div class="course-form">
      <h3>Create Course</h3>
      <form>
        <p>
          <label>Institution</label>
          <input type="text" name="institution" >
        </p>
        <p>
          <label>Name</label>
          <input type="text" name="name">
        </p>
        <p>
          <label>Year</label>
          <input type="number" name="year" value=${new Date().getFullYear()}>
        </p>
        <p>
          <label>Division</label>
          <input type="text" name="division">
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
  root.innerHTML = template;
}