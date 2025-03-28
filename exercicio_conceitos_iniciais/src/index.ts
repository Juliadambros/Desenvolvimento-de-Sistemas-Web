import Cliente from "./cliente";
import Endereco from "./endereco";
import Telefone from "./telefone";
import Produto from "./produto";
import Venda from "./venda";

const endereco = new Endereco("Rua Coronel Emilio Carneiro Duarte", 175, "Guarapuava", "Paraná");
const cliente = new Cliente("Júlia Dambrós", 11122233344, 290605, "Feminino", endereco);
const telefone1 = new Telefone("46", 991296617, "Celular");
const telefone2 = new Telefone("46", 123456789, "Telefone");
cliente.telefone = [telefone1, telefone2];

const produto1 = new Produto(1, "Livro Jogos Vorazes", 80);
const produto2 = new Produto(2, "Livro Amanhecer na Colheita", 79);
const produto3 = new Produto(3, "Marca Página", 2);

const venda = new Venda(1, 20240328, cliente);
venda.produto = [produto1, produto2, produto3];

console.log("Cliente:", cliente.nome);
console.log("CPF:", cliente.cpf);
console.log("Telefones:");
console.log(cliente.telefone[0].ddd, cliente.telefone[0].numero, cliente.telefone[0].tipo);
console.log(cliente.telefone[1].ddd, cliente.telefone[1].numero, cliente.telefone[1].tipo);
console.log("Produtos Comprados:");
for (let i = 0; i < venda.produto.length; i++) {
    console.log(venda.produto[i].descricao + ": R$" + venda.produto[i].valor);
}
console.log("Total da Venda: R$", venda.calcularTotal());

const endereco2 = new Endereco("Rua xx", 20, "Pato Branco", "Paraná");
const cliente2 = new Cliente("Maria", 44422273344, 260902, "Feminino", endereco2);
const telefone3 = new Telefone("46", 991280989, "Celular");
const telefone4 = new Telefone("46", 123456789, "Telefone");
cliente2.telefone = [telefone3, telefone4];

const produto4 = new Produto(1, "Caneta", 4);
const produto5 = new Produto(2, "Caderno", 45);

const venda2 = new Venda(2, 280325, cliente);
venda2.produto = [produto4, produto5];

console.log("Cliente:", cliente2.nome);
console.log("CPF:", cliente2.cpf);
console.log("Telefones:");
console.log(cliente2.telefone[0].ddd, cliente2.telefone[0].numero, cliente2.telefone[0].tipo);
console.log(cliente2.telefone[1].ddd, cliente2.telefone[1].numero, cliente2.telefone[1].tipo);
console.log("Produtos Comprados:");
for (let i = 0; i < venda2.produto.length; i++) {
    console.log(venda2.produto[i].descricao + ": R$" + venda2.produto[i].valor);
}
console.log("Total da Venda: R$", venda2.calcularTotal());
