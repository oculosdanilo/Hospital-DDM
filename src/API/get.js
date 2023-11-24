export async function _get() {
  const url = "http://localhost/ConexaoMysql/select/selectPaciente.php";
  const response = await fetch(url);
  const dados = await response.json();

  return dados;
}
