import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function capValue(e) {
    e.preventDefault();

    console.log("Form Data Sent:", form); 

    axios.post("http://localhost:5000/user/login", form) 
      .then((res) => {
        console.log("Response from backend:", res.data); 
        alert(res.data.message);
        if (res.data.message === "Login successful") {
          navigate('/login-success');
        }
      })
      .catch((err) => {
        if (err.response) {
          
          console.error("Backend error:", err.response.data);
          alert(err.response.data.message);
        } else {
         
          console.error("Network/Server error:", err.message);
          alert("Server not reachable");
        }
        navigate('login');
      });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontFamily: "serif", fontStyle: "oblique" }}>LOGIN</h2>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          label="Username"
          variant="outlined"
        />
        <br />
        <TextField
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          label="Password"
          variant="outlined"
        />
        <br />
        <Button
          onClick={capValue}
          variant="contained"
          style={{ backgroundColor: "#543377ff" }}
        >
          LOGIN
        </Button>
      </Box>
    </div>
  );
};

export default Login;
