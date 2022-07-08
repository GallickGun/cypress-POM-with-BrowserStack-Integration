pipeline {
  agent any
    // docker {
    //   image 'cypress/browsers:node12.6.0-chrome75'
    // }
  
  tools{
    nodejs "18.5.0"
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install --global yarn'
        sh 'yarn add --dev cypress'
      }
    }
    stage('E2E test'){
      steps {
        sh 'yarn run cypress open'
      }
    }
  }
}