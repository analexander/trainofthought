import React, {useState}from "react";
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../theme'
import Typography from '@material-ui/core/Typography';
import { Button, CardContent, 
    Card, Grid, CardMedia, makeStyles, Paper, TextField 
} from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
}));
function Login() {
    const classes = useStyles();
    const [password, setPassword] = useState({})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setPassword({...password, [name]: value})
    };
    function handleFormSubmit(event) {
        event.preventDefault();
        if (password.username && password.password) {
            console.log("soop")
        }
    };
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg" align="center">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w00&q=60"
                        title="Uplifting quote in book"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={8}>
                            <Card color="secondary">
                                <CardContent id="login">
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h3" component="h2">
                                                    Login
                                                    <h5>username</h5>
                                                    <TextField
                                                        onChange={handleInputChange}
                                                        name="username"
                                                    />
                                                </Typography>
                                            </Grid>
                                        </Paper>
                                        <Paper className={classes.paper}>
                                            <Typography gutterBottom variant="h3" component="h2">
                                                password
                                                <br />
                                                <TextField
                                                    onChange={handleInputChange}
                                                    name="password"
                                                />
                                                <br />
                                                <Button
                                                disabled={!(password.username && password.password)}
                                                onClick={handleFormSubmit}>Submit
                                                </Button>
                                            </Typography>
                                        </Paper>
                                        </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default Login