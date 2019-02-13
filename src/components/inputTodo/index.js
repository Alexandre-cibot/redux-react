import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

class InputTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  updateValue = (event) => {
    const value = event.target.value;
    this.setState({ value });
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.value);
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <input type="text" placeholder="new Todo ..." value={value} onChange={this.updateValue} />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    )
  }
}
export default connect(
  null,
  { addTodo }
)(InputTodo);