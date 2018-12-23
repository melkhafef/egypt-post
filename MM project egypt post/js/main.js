const mmAudio = document.querySelector('#mmAudio');
const firstTeamMembersAudio = document.querySelector('#firstTeamMembers');
mmAudio.play();
setTimeout(function(){
    firstTeamMembersAudio.play();
},6000)