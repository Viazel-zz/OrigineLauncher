/**
 * Script for welcome.ejs
 */
document.getElementById('welcomeButton').addEventListener('click', e => {
    switchView(VIEWS.welcome, VIEWS.login)
    if(hasRPC){
        DiscordWrapper.updateDetails('Ajoute un compte...')
        DiscordWrapper.updateState('Setup launcher')
    }
})