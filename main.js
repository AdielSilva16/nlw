//* camelCase, PascalCase e snake_case
//* computador começa a contar do 0
const LinksSocialMedia = {
  github: 'AdielSilva16',
  youtube: 'channel/UC4InKHTP4ia2TWkMVt-cXfg',
  instagram: 'adiel_silva16',
  facebook: 'adiel008',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
