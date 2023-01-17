pipeline{
    agent any
    stages {
        stage('Pull') {
            steps {
         checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/KyleDom/LifeQuest-Website.git']]])
          sh "ls -lat"
            }
        }
        stage('Docker Build') {
    	agent any
      steps {
        sh pwd
        sh "ls -lat"
      	sh 'docker build -t ferjen/new:latest .'
          
            
        }  
      }
    }
}
