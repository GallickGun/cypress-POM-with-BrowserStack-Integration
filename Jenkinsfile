pipeline {
  agent {
    docker {
      image 'cypress/base:10'
    }
  }
  stages {
    stage('Build') {
      steps {
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