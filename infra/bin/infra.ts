#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MelduoAppCmrkkzefStack } from '../lib/infra-stack';

const app = new cdk.App();
new MelduoAppCmrkkzefStack(app, 'melduo-app-cmrkkzef', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
});
