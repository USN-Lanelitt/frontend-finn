import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = () => {
    let [name_reg, setNameRegVar] = useState('');
    let [username_reg, setUsernameRegVar] = useState('');
    let [password_reg, setPasswordRegVar] = useState('');
    let [username, setUsernameVar] = useState('');
    let [password, setPasswordVar] = useState('');

    function Login() {
        if (setUsernameVar.length === 0 || setPasswordVar.length === 0) {
            alert("Alle feltene må fylles ut");
        }
        else {
            fetch('http://127.0.0.1:8000/api/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    username: setUsernameVar,
                    password: setPasswordVar
                })
            })
            .then((Response) => Response.json())
            .then((Result) => {
                alert(Result);
            })
        }
    }

    function Register() {
        if (setNameRegVar.length > 1 && setUsernameRegVar.length > 1 && setPasswordRegVar.length > 1) {
            fetch('http://127.0.0.1:8000/api/registerUser', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    //'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: setNameRegVar,
                    username: setUsernameRegVar,
                    password: setPasswordRegVar
                })
            })
                .then((Response) => Response.json())
                .then((Result) => {
                    alert(Result);

                    /*if (Result.Status == 'Success')
                        this.props.history.push("/Dashboard");s
                    else
                        alert('Sorrrrrry !!!! Un-authenticated User !!!!!')*/
                })
        }
        else {
            alert("Alle feltene må fylles ut");
        }
    }

    function setNameReg(e) {
        setNameRegVar = e.target.value;
    }

    function setUsernameReg(e) {
        setUsernameRegVar = e.target.value;
    }

    function setPasswordReg(e) {
        setPasswordRegVar = e.target.value;
    }

    function setUsername(e) {
        setUsernameVar = e.target.value;
    }

    function setPassword(e) {
        setPasswordVar = e.target.value;
    }

    return (
        <div>
            <h1>Login</h1>
            <Box m={2}>
                <form className="register" noValidate autoComplete="off">
                    <TextField id="name_reg"
                               required={true}
                               onChange={setNameReg}
                               size={'small'}
                               label="Navn"
                               variant="outlined" />
                    <TextField id="username_reg"
                               required={true}
                               size={'small'}
                               type={'email'}
                                onChange={setUsernameReg}
                                label="Brukernavn"
                                variant="outlined" />
                    <TextField id="password_reg"
                               required={true}
                               size={'small'}
                               type={'password'}
                               onChange={setPasswordReg}
                               label="Passord"
                               variant="outlined"
                    />
                    <Button onClick={() => Register()} color="primary" variant="contained">Registrer</Button>
                </form>
            </Box>
            <Box m={2}>
                <form className="login" noValidate autoComplete="off">
                    <TextField id="username"
                               type={'email'}
                               required={true}
                               size={'small'}
                               onChange={setUsername}
                               label="Brukernavn"
                               variant="outlined" />
                    <TextField id="password"
                               type={'password'}
                               required={true}
                               size={'small'}
                               onChange={setPassword}
                               label="Passord"
                               variant="outlined"
                    />
                    <Button onClick={() => Login()} color="primary" variant="contained" >Login</Button>
                </form>
            </Box>
        </div>
    );
};

export default Login;


