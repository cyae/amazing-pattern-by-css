setTimeout(function setEmailAddress() {
  // grab temp email from another server
  const linkEl = document.getElementById('EmailLink');
  linkEl.href = 'mailto:' + email;
  linkEl.innerText = email;
}, 200);
