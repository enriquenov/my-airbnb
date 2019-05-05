import * as React from 'react';
import { RegisterView } from './view/RegisterView';

// container -> view (presentational)
// container -> connector -> view
// controller -> connector -> view

export const RegisterConnector = () => <RegisterView />;
