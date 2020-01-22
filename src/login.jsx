import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = () => {
    let [username_reg, setUsernameRegVar] = useState('');
    let [password_reg, setPasswordRegVar] = useState('');

    function Register() {
        console.log("Brukernavn");
        console.log(setUsernameRegVar);
        console.log("Passord");
        console.log(setPasswordRegVar);

        fetch("http://localhost:8000/api/registerUser", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
            },
            data: {
                'username': setUsernameRegVar,
                'password': setPasswordRegVar,
            },
        /*}).then(response => Promise.all([response, response.json()])
        ).then(([result, json]) => {
            if (result.status === 200) {
                setUsers(json);
                setLoading(false);
            }
        }).catch((error) => {
            console.log(error);*/
        });
    }

    function setUsernameReg(e) {
        setUsernameRegVar = e.target.value;
        //console.log(e.target.value);
    }

    function setPassword(e) {
        setPasswordRegVar = e.target.value;
    }

    return (
        <div>
            <h1>Login</h1>
            <Box m={2}>
                <form className="register" noValidate autoComplete="off">
                    <TextField id="username_reg"
                                onChange={setUsernameReg}
                                label="Brukernavn"
                                variant="outlined" />
                    <TextField id="password_reg"
                               onChange={setPassword}
                               label="Passord"
                               variant="outlined" />
                    <Button onClick={() => Register()} color="primary" variant="contained">Registrer</Button>
                </form>
            </Box>
            <Box m={2}>
                <form className="login" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Brukernavn" variant="outlined" />
                    <TextField id="outlined-basic" label="Passord" variant="outlined" />
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default Login;
