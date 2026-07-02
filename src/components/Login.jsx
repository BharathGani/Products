import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Dilshaj Infotech</h1><br />
        <h3>Welcome Back! Please login to continue.</h3>

        <form>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit">
            Login
          </button>

          {/* Register */}
          <div className="register">
            Don't have an account?
            <a href="#"> Register</a>
          </div>

        </form>

        {/* Footer */}
        <footer>
          © 2026 Dilshaj Infotech. All Rights Reserved.
        </footer>

      </div>
    </div>
  );
}

export default Login;