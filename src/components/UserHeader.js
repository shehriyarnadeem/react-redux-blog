import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    console.log(this.props.userHeader);
    //     const user = this.props.userHeader.find(
    //       user => user.id === this.props.userId
    //     );
    //     if (!user) {
    //       return null;
    //     } else {
    return <div>dsds</div>;
    //     }
    //   }
  }
}

const mapStateToProps = state => {
  return { userHeader: state.userHeader };
};
export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
