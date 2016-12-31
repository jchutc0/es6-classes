import React from 'react';

// var isAdmin = true;
// var adminComponent = (Component) => {
//   return class Admin extends React.Component {
//     render() {
//       if(isAdmin) {
//         return (
//           <div className='callout secondary'>
//             <p className='alert label'>Private admin information</p>
//             <Component {...this.props}/>
//           </div>
//         );
//       } else {
//         return null;
//       }
//     };      // render
//   };        // returned class
// };          // adminComponent

var isAdmin = true;
var adminComponent = (Component) => {
  return class Admin extends Component {
    componentDidUpdate() {
      console.log('Admin component did update');
      if(super.componentDidUpdate) {
        super.componentDidUpdate();
      }     // if
    }       // componentDidUpdate
    render() {
      if(isAdmin) {
        return (
          <div className='callout secondary'>
            <p className='alert label'>Private admin information</p>
            {super.render()}
          </div>
        );  // return value
      } else {
        return null;
      }
    };      // render
  };        // returned class
};          // adminComponent


class ComponentTwo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };      // state
    // bind method two:
    this.onClick = this.onClick.bind(this);
  }         // constructor

  componentDidUpdate() {
    console.log('Super component did update');
  }       // componentDidUpdate


  onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }         // onClick

  render() {
    return (
      <div>
        <h3>Component Two using React.Component</h3>
        <p>Current count: {this.state.count}</p>
        <button className='button' onClick={this.onClick}>Button Two</button>
      </div>
    );      // return
  }         // render
}           // ComponentTwo

ComponentTwo.defaultProps = {
  count: 50
};

ComponentTwo.propTypes = {
  count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);

// bind method 1:
//  <button className='button' onClick={this.onClick.bind(this)}>Button Two</button>
// bind method 2: bind in constructor
// bind method 3: just call arrow function in onClick={() => {}} call

/*
Higher order functions


*/
