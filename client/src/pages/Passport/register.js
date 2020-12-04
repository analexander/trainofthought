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
function Register() {
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
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={8}>
                        <Card color="secondary">
                            <CardContent id="register">
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Grid item xs={12}>
                                            <Typography gutterBottom variant="h3" component="h2">
                                                Register
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
            </Container>
        </ThemeProvider>
    )}
    
export default Register