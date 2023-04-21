function sleep(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Demo
(async () => {
  const textarea = document.getElementById('text');
  textarea.value = new Date() + '\n';
  await sleep();
  textarea.value += new Date() + '\n';
  await sleep(2000);
  textarea.value += new Date();
  while (true) {
    textarea.value = new Date() + '\n';
    await sleep();
  }
})();
