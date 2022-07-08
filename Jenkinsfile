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
        sh 'npm install'
        sh 'npm -v'
        // sh 'sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
         sh 'npm install cypress --save-dev' 
      }
    }
    stage('E2E test'){
      steps {
        sh 'npx cypress run'
      }
    }
  }
}