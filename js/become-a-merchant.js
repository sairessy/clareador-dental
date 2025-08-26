document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const name = form.get("name");
  const province = form.get("s-province");
  const email = form.get("email");
  const tel = form.get("tel");

  console.log(name, province, tel, email);
});
