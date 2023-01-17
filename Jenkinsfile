pipeline{
    agent any
    stages {
        stage('Pull') {
            steps {
         checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/KyleDom/LifeQuest-Website.git']]])
            }
        }
        stage('Docker Build') {
    	agent any
      steps {
        dir('LifeQuest-Website/frontend'){
        script{
      	sh 'docker build -t ferjen/new:latest .'
            
        }    
        }  
      }
    }
        
    }
}
