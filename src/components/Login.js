import Swal from 'sweetalert2';


export function Login(){

    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Sign in',
        focusConfirm: true,
        allowOutsideClick: false,
        allowEscapeKey: true,

        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter login and password`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
      })


}
export function Registrar(){
    Swal.fire({
        title: 'Registrar',
        html: `<label>Nombres</label><input type="text" id="Name" class="swal2-input" placeholder="Nombre">
               <label>Apellido paterno</label><input type="text" id="LastName" class="swal2-input" placeholder="Apellido paterno">
               <label>Apellido materno</label><input type="text" id="LastName" class="swal2-input" placeholder="Apellido materno">
               <label>Fecha de nacimiento</label><input type="date" id="Fecha" class="swal2-input" >
               <label>Telefono</label><input type="tel" id="Telefono" class="swal2-input" placeholder="Numero telefonico">
               <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
               <input type="password" id="confirm" class="swal2-input" placeholder="Confirmar contraseña">`,
        confirmButtonText: 'Registrar',
        focusConfirm: false,
        allowOutsideClick: false,
        allowEscapeKey: true,
        preConfirm: () => {
          const password = Swal.getPopup().querySelector('#password').value
          const confirm = Swal.getPopup().querySelector('#confirm').value
          if (!confirm || !password) {
            Swal.showValidationMessage(`Please enter login and password`);
          }else if (password != confirm){
            Swal.showValidationMessage(`Contraseñas no coinciden`);
          }
          return { confirm: confirm, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.confirm}
          Password: ${result.value.password}
        `.trim())
      })

}
export default Login;
