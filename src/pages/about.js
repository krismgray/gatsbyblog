import React, { Component } from 'react';
import Helmet from 'react-helmet';

class About extends Component {
  render() {
    return (
      <div>
        <Helmet title='About Kris' />
        This is an awesome about page about me!!
      </div>
    );
  }
}

export default About;
