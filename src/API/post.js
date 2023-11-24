export async function _post(paciente) {
  const url = "http://localhost/ConexaoMysql/insert/insert.php";
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paciente),
  }).then(function (response) {
    return response.text();
  });
}
