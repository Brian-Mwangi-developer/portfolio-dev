import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create S3 bucket for static site content
    const bucket = new s3.Bucket(this, 'PortfolioStaticSiteBucket', {
      bucketName: 'portfolio-static-site',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      autoDeleteObjects: false,
      versioned: false,
    });

    // Create CloudFront Origin Access Identity
    const oai = new cloudfront.OriginAccessIdentity(this, 'PortfolioOAI');

    // Grant OAI read access to bucket
    bucket.grantRead(oai);

    // Create CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'PortfolioDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(bucket, {
          originAccessIdentity: oai,
        }),
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
        },
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
    });

    // Deploy site contents from the Next.js static export
    new s3deploy.BucketDeployment(this, 'PortfolioDeployment', {
      sources: [s3deploy.Source.asset('../out')],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ['/*'],
      memoryLimit: 1024,
    });

    // Output the CloudFront distribution domain name
    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront distribution domain name',
      exportName: 'PortfolioDistributionDomainName',
    });

    // Output the S3 bucket name
    new cdk.CfnOutput(this, 'BucketName', {
      value: bucket.bucketName,
      description: 'S3 bucket name',
      exportName: 'PortfolioBucketName',
    });

    // Output the CloudFront distribution ID
    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront distribution ID',
      exportName: 'PortfolioDistributionId',
    });
  }
}
