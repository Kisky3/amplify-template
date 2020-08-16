import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
createApp(App).use(router).mount('#app')
