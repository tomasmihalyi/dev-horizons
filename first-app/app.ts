import * as cdk from 'aws-cdk-lib';
import { RegistrationStack } from './stack';

const app = new cdk.App();
new RegistrationStack(app, 'RegistrationStack');