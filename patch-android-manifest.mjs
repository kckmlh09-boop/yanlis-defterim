import fs from 'node:fs';
const p = 'android/app/src/main/AndroidManifest.xml';
let xml = fs.readFileSync(p, 'utf8');
if (!xml.includes('android.permission.CAMERA')) {
  xml = xml.replace(/<manifest([^>]*)>/, (m, attrs) => `${m}\n    <uses-permission android:name="android.permission.CAMERA" />\n    <uses-feature android:name="android.hardware.camera.any" android:required="false" />`);
  fs.writeFileSync(p, xml);
}
