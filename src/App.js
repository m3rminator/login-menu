import './App.css';
function App() {
  return (
    <div className='navid-container'>
      <div className='navid-wrapper'>
        <h1 id='h1'>Login</h1>
        <form className='navid-form'>
          <input type='email' placeholder='youremail' id='email-input'></input>
          <input
            type='password'
            placeholder='yourpass'
            id='pass-input'
          ></input>
         <input type="submit" placeholder="login" className='login-button'></input>
        </form>
      </div>
    </div>
  );
}
export default App;
