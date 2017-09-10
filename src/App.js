import React, { Component } from 'react';
import './App.css';
import {
    Grid,
    Row,
    Col,
    Button,
    Form,
    FormControl,
    FormGroup,
    ControlLabel
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>TODO LIST</Col>
                </Row>
                <Row className="show-grid">

                </Row>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <ItemAddition />
                    </Col>
                </Row>
            </Grid>
        </div>

      </div>
    );
  }
}


class TodoItem extends Component {
    render() {
      return (
        <div>

        </div>
      );
    };
}


class ItemAddition extends Component {
    render() {
        return (
            <div>
                <Form inline>
                    <FormGroup>
                        <FormControl type="text" placeholder="Please input task" />
                        <Button bsStyle="primary" type="submit">Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    };
}

export default App;
