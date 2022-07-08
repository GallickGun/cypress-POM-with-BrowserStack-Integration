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
        sh(script: 'npm install')
        sh 'npm -v'
        sh 'npm install cypress --save-dev' 
      }
    }
    stage('E2E test'){
      steps {
        sh 'npx cypress run --browser chrome'
      }
    }
  }
}