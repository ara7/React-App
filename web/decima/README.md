1. Clone the project in your local folder: git clone https://github.com/IndianaBiosciences/decima.git
2. Navigate to the correct folder location: cd decima/web/decima
3. Install, create and activate virtual environment:
    i). pip3 install virtualenv
    ii). virtualenv -p python3 decimaEnv
    iii). For windows: source .\\decimaEnv\\Scripts\\activate For mac: source decimaEnv/bin/activate
4. You may need to install node_modules: npm install react-scripts
5. Start the react app: npm start

Steps for hosting the application on AWS:
1. Configure AWS: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
2. Check the AWS bucket: aws s3 ls s3://ibri-decima
3. Run the npm: npm start && aws s3 sync build/ s3:// ibri-decima for testing
4. Go to AWS console for hosting configuration.
