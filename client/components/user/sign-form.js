const SignForm = (props) => (
  <form onSubmit={(e) => props.submitAction(e)}>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="text" id="email" className="form-control" onChange={(e) => props.inputHandle(e)} name="email"/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" className="form-control" onChange={(e) => props.inputHandle(e)}/>
    </div>
    <div>
      <button type="submit" className="btn btn-primary">{props.buttonText}</button>
    </div>
  </form>
);

export default SignForm;