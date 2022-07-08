pipeline {
  agent any
  stages {
    stage('installation') {
      steps {
        sh 'npm install cypress --save-dev'
      }
    }
    stage('run e2e tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}