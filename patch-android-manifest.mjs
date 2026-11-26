const fs = require('fs');

const path = 'android/app/src/main/AndroidManifest.xml';

let xml = fs.readFileSync(path, 'utf8');

if (!xml.includes('android.permission.CAMERA')) {
  xml = xml.replace(
    '<manifest',
    '<manifest\n    xmlns:android="http://schemas.android.com/apk/res/android"'
  );
  xml = xml.replace(
    '<application',
    '<uses-permission android:name="android.permission.CAMERA" />\n    <application'
  );
}

fs.writeFileSync(path, xml);
