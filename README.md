#node-red-contrib-newtifrypro
=============================
A <a href="http://nodered.org" target="_new">Node-RED</a> node to send messages to NewtifryProV3 android app <a href="https://github.com/thunderace/NewtifryPro3">NewtifryProV3</a>.

**Important : You need to build your own NewtifryProV3 android app.**

![screenshot](https://github.com/thunderace/node-red-contrib-newtifrypro/raw/master/screenshot.png)

## Installation
---------------
Use the 'Manage palette', 'Install' tab, click on the 'Upload module tgz file' and select the node-red-contrib-newtifrypro-2.0.0.tgz file of this repository
![screenshot](https://github.com/thunderace/node-red-contrib-newtifrypro/raw/master/Node-red-NewtifryProV3-Install-1.png)

## Configuration
----------------
You need a serviceAccount.json file to configure the NewtifryProV3 node. See [Google Documentation](https://cloud.google.com/iam/docs/keys-create-delete?hl=fr#iam-service-account-keys-create-console)

Add a NewtifryProV3 node fill the 'Project ID', Client email', 'Private Key' from the serviceAccount.json.
Fill the registrationId from NewtifryProV3 android app.
![Node Configuration](https://github.com/thunderace/node-red-contrib-newtifrypro/raw/master/Node-red-NewtifryProV3-Node-Configuration.png)

## Usage
-----
Uses Node-red to push the **msg.message** and **msg.title** to an Android device that has NewtifryProV3 Android app installed.
See node-example.json for more informations

## Copyright and license
---------------------

Copyright 2015-2024 Arnaud LAURENT under [the Apache 2.0 license](LICENSE).
