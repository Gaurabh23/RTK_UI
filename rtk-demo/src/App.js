import "./App.css";
import { useForm } from "react-hook-form";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login, logout } from "./store/users";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  Username: yup.string().required(),
  Password: yup.string().required(),
});

function App() {
  const { user } = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  if (user) {
    return (
      <div>
        Hi, {user.username}!
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Card>
        <CardContent>
          <form onSubmit={() => handleSubmit(onSubmit)}>
            <Grid>
              <TextField
                name="username"
                label="Username"
                varient="outlined"
                {...register("username")}
                fullWidth
              />
            </Grid>
            <Grid container spacing={2}>
              <TextField
                name="password"
                label="Password"
                type="password"
                varient="outlined"
                {...register("password")}
                fullWidth
              />
              <Button type="submit">Login</Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
