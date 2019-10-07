import React from 'react'
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

import {AUTHENTICATION} from "../../actions";

const LoginForm = (props) => (
    <Grid textAlign='center' verticalAlign="middle" style={{ height: '60vh' }}>
        <Grid.Column style={{maxWidth: '450px'}}>
            <Header as='h2' color='teal' textAlign='center'>
                Logowanie
            </Header>
            <Form size='big' onSubmit={props.submit(props.login, props.password)}>
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='Nazwa użytkownika'
                        value={props.login}
                        onChange={props.fillUsername}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Hasło'
                        type='password'
                        value={props.password}
                        onChange={props.fillPassword}
                    />

                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                Nie masz jeszcze konta? <NavLink to="/register">Dołącz do nas!</NavLink>
            </Message>
        </Grid.Column>
    </Grid>
);

const mapStateToProps = ({authentication}) => ({...authentication});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fillUsername: (event, {value}) => dispatch(AUTHENTICATION.fillUsername(value)),
        fillPassword: (event, {value}) => dispatch(AUTHENTICATION.fillPassword(value)),
        submit: (login, password) => () => dispatch(AUTHENTICATION.login(login, password, ownProps.history)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);