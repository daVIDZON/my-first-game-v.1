 function settings(){
  const settingsBtn=document.querySelector('.game-settings');
   const settingMenu=document.querySelector('.settings-menu');

  settingsBtn.addEventListener('click',()=>{
   settingMenu.style.display="flex";
   settingMenu.classList.add('settings-menu-animation');
  });



 }
 export default settings;