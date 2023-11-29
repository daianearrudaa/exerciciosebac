
$(document).ready(function () {
    const nameElement = $('#name');
    const userNameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');  
    const followingElement = $('#following');  
    const linkElement = $('#link');

    const endPoint = 'https://api.github.com/users/daianearrudaa';  

    fetch(endPoint)
        .then(function (res) {
            return res.json();
        })
        
        .then(function (json) {
            nameElement.text(json.name);
            userNameElement.text(json.login);
            avatarElement.attr('src', json.avatar_url);


            // Adicionar o número fora do h4
            followersElement.append('<span>' + json.followers + '</span>');
            followingElement.append('<span>' + json.following + '</span>');
            reposElement.append('<span>' + json.public_repos + '</span>');

            // Adicionar o texto da tag h4
            followersElement.find('h4').text('Seguidores');
            followingElement.find('h4').text('Seguindo');
            reposElement.find('h4').text('Repositórios');

            linkElement.attr('href', json.html_url);
        });

});

