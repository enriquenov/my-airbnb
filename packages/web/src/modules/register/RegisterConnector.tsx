import * as React from 'react';
import { RegisterView } from './view/RegisterView';

// container -> view (presentational)
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <RegisterView submit={this.dummySubmit} />;
  }
}
