
const newUser = {
  email: '',
  password: ''
};

const Register = () => (
  <div>
    <form onSubmit={(e) => registerUser(e)}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={(e) => updateUser(e)} name="email"/>
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={(e) => updateUser(e)}/>
      </fieldset>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
);

const registerUser = async (e) => {
  e.preventDefault();

  await fetch('/register', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(newUser)
  });
};


const updateUser = (e) => {
  newUser[e.target.name] = e.target.value;
};


export default Register;