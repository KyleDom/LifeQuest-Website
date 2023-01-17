pipeline{
    agent {label 'docker-agent-alpine'}
    stages {
        stage('Pull') {
            steps {
         checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/KyleDom/LifeQuest-Website.git']]])
          sh "ls -lat"
            }
        }
        stage('Docker Build') {
                steps {
                    sh "ls -lat"
      	            sh 'docker build -t ferjen/new:latest .'
          
            
        }  
      }
    }
}
