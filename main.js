const LinksSocialMedia = {
  github: "danieljotasilva",
  youtube: "colodedeus",
  facebook: "danieljotasilva",
  instagram: "danieljotasilva",
  twitter: "danieljotasilva",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.title = data.name + " - DoWhile 2021"  
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
