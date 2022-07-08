pipeline {
  agent any
  tools{
    nodejs "18.5.0"
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm -v'
        sh 'npm install cypress --save-dev'
      }
    }
  }
}