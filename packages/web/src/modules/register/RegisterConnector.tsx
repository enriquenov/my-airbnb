import * as React from 'react';
import { RegisterController } from '@my-airbnb/controller';
import { RegisterView } from './view/RegisterView';

// container -> view (presentational)
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
