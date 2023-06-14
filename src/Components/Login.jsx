import React from 'react'

const Login = () => {
  return (
   <>
    <div class="content">
    <div class="text">Sign Up</div>
    <form action="#">
      <div class="field">
        <span class="bx bxs-user"></span>
        <input type="username" placeholder="Username" required />
      </div>

      <div class="field">
        <span class="bx bxs-envelope"></span>
        <input type="email" placeholder="Email" required />
      </div>

      <div class="field">
        <span class="bx bxs-lock-alt"></span>
        <input type="password" placeholder="Password" required />
      </div>

      <button>Sign Up</button>
      <h4>or Sign up with social platforms</h4>

      <div class="social_icons">
        <i class="bx bxl-facebook"></i>
        <i class="bx bxl-discord-alt"></i>
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-dribbble"></i>
      </div>

      <div class="foot">
        <a>Already have an account?</a>
        <a href="#" class="in">Sign In</a>
      </div>
    </form>

    <div class="dark-light" onclick="myFunction()">
      <i class="bx bx-moon moon"></i>
      <i class="bx bx-sun sun"></i>
    </div>
  </div>
   
   
   </>
  )
}

export default Login
