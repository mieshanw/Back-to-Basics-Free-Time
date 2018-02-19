/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: "Miesha", 
    friends: 989, 
    messages: ["Hey", "How are you?", "Let's get lunch", "Good Morning!"],
    postMessage: function addMessage(message){
       facebookProfile.messages.push(message);
       return facebookProfile.messages;
   },
   deleteMessage: function removeMessage(index){
       facebookProfile.messages.splice(index,1);
   },
   addFriend: function(){
       facebookProfile.friends+=1;
   },
   removeFriend: function(){
       facebookProfile.friends-=1;
   }
};