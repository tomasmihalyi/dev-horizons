# Registration App - AWS Serverless

Minimal serverless registration form with AWS CDK.

## Architecture
- **Frontend**: S3 + CloudFront
- **Backend**: API Gateway + Lambda
- **Database**: DynamoDB
- **IaC**: AWS CDK (TypeScript)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Bootstrap CDK (first time only):
```bash
npx cdk bootstrap
```

3. Deploy:
```bash
npm run deploy
```

4. Update API URL in `website/registration.html` with the output from deployment.

5. Redeploy to update the website:
```bash
npm run deploy
```

## Costs
- **DynamoDB**: Pay-per-request (~$0.25 per million requests)
- **Lambda**: Free tier covers 1M requests/month
- **API Gateway**: $3.50 per million requests
- **S3**: $0.023 per GB/month
- **CloudFront**: $0.085 per GB transfer

**Expected monthly cost**: $0-5 for low traffic

## Cleanup
```bash
npm run destroy
```