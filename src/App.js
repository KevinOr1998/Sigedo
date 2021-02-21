import Login, { Registrar } from '../src/components/Login.js';



function App() {


  
  return (
    <div class="container">
      <div class="row justify-content-center ">
        <div class="col-12 col-xs-5 col-sm-5 col-md-6  col-lg-5 col-xl-5 col-xxl-5 col-xl-4 ">
          <form action="views/dashboard.php" method="POST" class="form form-center ">
            <div class="d-flex justify-content-center">
              <img class="logo"  src="img/logos/bluaxbg.png"></img>
            </div>
            <br></br>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <div class="d-flex justify-content-center">
              <button name="BotonLogin" value="true" type="submit" class="btn btn-primary justify-content-center">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;

