pipeline {
  agent any
  stages {
    stage('build'){
    steps{
        git 'https://github.com/GallickGun/cypress-POM-with-BrowserStack-Integration'
        }
    }
    // Install and verify Cypress
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