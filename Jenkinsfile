pipeline {
  agent any
  stages {
    stage('chheckout'){
    steps{
        git branch: 'main', url: 'https://github.com/GallickGun/cypress-POM-with-BrowserStack-Integration'
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