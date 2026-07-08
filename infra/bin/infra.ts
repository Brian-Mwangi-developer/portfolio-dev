#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';

const app = new cdk.App();
new InfraStack(app, 'melduo-app-cmrbfl5w', {
  env: { account: '847460071934', region: 'us-east-1' },
});
