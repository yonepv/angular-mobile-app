import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-mobile-app',
  webDir: 'dist/angular-mobile-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
