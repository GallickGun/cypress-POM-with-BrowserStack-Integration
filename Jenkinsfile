pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm install cypress --save-dev'
      }
    }
    stage('Run e2e tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}