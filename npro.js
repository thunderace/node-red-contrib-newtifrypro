/**
 * Copyright 2014 thunderace
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
var newtifrypro = require('newtifrypro');

module.exports = function(RED) {
  "use strict";
  function NPNode(n) {
    RED.nodes.createNode(this,n);
    this.title = n.title || "";
    this.source = n.source || "";
    this.message = n.message || "";
    this.priority =  Number( n.priority || 0);
    this.projectID = n.projectid || undefined;
    this.clientEmail = n.clientemail || undefined;
    this.privateKey = n.privatekey || undefined;
    this.registrationId = n.registrationId || undefined;
    this.image1 = n.image1 || undefined;
    this.image2 = n.image2 || undefined;
    this.image3 = n.image3 || undefined;
    this.image4 = n.image4 || undefined;
    this.image5 = n.image5 || undefined;
    this.url = n.url || undefined;
    this.speak = n.speak || -1;
    this.nocache = n.nocache || -1;
    this.notify = n.notify || -1;
    var node = this;
    this.on("input",function(msg) {
      var message = msg.message || node.message || "";
      var title = msg.title || node.title || "";
      var priority = msg.priority || node.priority || 0;
      var source = msg.source || node.source || 0;
      var projectID = msg.projectid || node.projectid || undefined;
      var clientEmail = msg.clientemail || node.projectid || undefined;
      var privateKey = msg.privatekey || node.privatekey || undefined;
      var registrationId = msg.registrationId || node.registrationId || undefined;
      var url = msg.url || node.url || null;
      var image1 = msg.image1 || node.image1 || null;
      var image2 = msg.image2 || node.image2 || null;
      var image3 = msg.image3 || node.image3 || null;
      var image4 = msg.image4 || node.image4 || null;
      var image5 = msg.image5 || node.image5 || null;
      var speak = msg.speak || node.speak || -1;
      var nocache = msg.nocache || node.nocache || -1;
      var notify = msg.notify || node.notify || -1;
      
      if (projectID == undefined || clientEmail == undefined || privateKey == undefined || registrationId == undefined || title == undefined) {
        node.error("No projectId or clientEmail or privateKey or registrationId title set"); 
      } else {
        var message2Send = {
          type: 'ntp_message',
          title: title,
          priority:  priority,
          speak: speak,
          nocache: nocache,
          notify: notify
        };  
        if (message != null) {
          message2Send.message = message;
        }
        if (source != null) {
          message2Send.source = source;
        }
        if (url != null) {
          message2Send.url = url;
        }
        if (image1 != null) {
          message2Send.image1 = image1;
        }
        if (image2 != null) {
          message2Send.image2 = image2;
        }
        if (image3 != null) {
          message2Send.image3 = image3;
        }
        if (image4 != null) {
          message2Send.image4 = image4;
        }
        if (image5 != null) {
          message2Send.image5 = image5;
        }
        var registrationIdsArray = [registrationId];
        registrationIdsArray.push();
        newtifrypro.init2(projectID, clientEmail, privateKey);
        newtifrypro.sendMessage(message2Send, registrationIdsArray, function (err, data) {
          if (err) {
            node.warn("NP error: " + err);
          } 
        });
      }
    });
  }
  RED.nodes.registerType("npro",NPNode);
};

