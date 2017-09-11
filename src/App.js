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
    ControlLabel,
    PageHeader
} from 'react-bootstrap';

class App extends Component {

    constructor(props){
        super(props);
        this.state = { todoItems: [], maxId: 0 };
        this.handleAddition = this.handleAddition.bind(this);
        this.handleRemovation = this.handleRemovation.bind(this);
        this.getAndSetMaxId = this.getAndSetMaxId.bind(this);
    }

    getAndSetMaxId() {
        let { maxId } = this.state;
        maxId += 1;
        this.setState({ maxId });
        return maxId;
    }

    handleAddition(newValue) {
        const { todoItems } = this.state;
        const newItem = { id: this.getAndSetMaxId(), value: newValue };

        todoItems.push(newItem);
        this.setState({ todoItems });
    }

    handleRemovation(itemId) {
        const { todoItems } = this.state;
        const newItems = todoItems.filter((item) => {
            const { id } = item;
            return id !== itemId;
        });
        this.setState({ todoItems: newItems });
    }

  render() {
    const { todoItems } = this.state;
    const rows = todoItems.map((item) => {
        const { id } = item;
        const newRow = (<TodoItem  key={id} handleRemovation={this.handleRemovation} {...item}></TodoItem>);
        return newRow;
    });

    return (
      <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <PageHeader>TODO LIST</PageHeader>
                    </Col>
                </Row>
                <ItemAddition handleAddition={this.handleAddition} />
                { rows }
            </Grid>
        </div>

      </div>
    );
  }
}


class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { id, handleRemovation } = this.props;
        handleRemovation(id);
    }

    render() {
        const { value } = this.props;
      return (
          <Row className="Row-padding" bsSize="small">
              <Col xs={9} md={9}>
                  <ControlLabel className="pull-left">{value}</ControlLabel>
              </Col>
              <Col xs={3} md={3}>
                  <Button bsStyle="danger" className="pull-left" onClick={this.handleClick}>Remove</Button>
              </Col>
          </Row>
      );
    };
}


class ItemAddition extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.minLength = 5;

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getValidationNewTask = this.getValidationNewTask.bind(this);
    }

    handleChange(evt) {
        this.setState({ value: evt.target.value });
    }

    handleKeyPress (evt) {
        if(evt.charCode === 13) {
            evt.preventDefault();
            this.handleClick();
        }
    }

    handleClick() {
        const { handleAddition } = this.props;
        const { value } = this.state;
        if(value.length < this.minLength) {
            return;
        }

        handleAddition(value);
        this.setState({ value: '' });
    }

    getValidationNewTask() {
        const { value } = this.state;
        return value.length < this.minLength ? 'error' : 'success';
    }

    render() {
        const { value } = this.state;
        return (
            <Row className="Row-padding" bsSize="small">
                <Col xs={9} md={9}>
                    <FormGroup controlId="formAddTask" validationState={this.getValidationNewTask()}>
                        <FormControl
                            type="text"
                            placeholder="Please input task"
                            className="pull-left"
                            value={value}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                        />
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    <Button bsStyle="primary" className="pull-left" onClick={this.handleClick}>Submit</Button>
                </Col>
            </Row>
        );
    };
}

export default App;
