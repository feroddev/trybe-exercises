<div class="c-kWDhvw"><article class="c-daJEgu"><h1>
Exercícios - bônus</h1>
</article><article class="c-daJEgu"><ol>
  <li>
    <p>
Crie um código que exiba o valor dos <code class="inline">n</code> primeiros elementos da sequência de Fibonacci.    </p>
    <blockquote>
      <p>
A sequência de Fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.      </p>
    </blockquote>
    <ul>
      <li>
Armazene o código no arquivo <code class="inline">fibonacci.js</code>.      </li>
      <li>
Utilize o <code class="inline">readline-sync</code> para realizar o input de dados.      </li>
      <li>
O código deve ser acionado através do comando <code class="inline">npm run fibonacci</code>.      </li>
      <li>
Não imprima o valor <code class="inline">0</code>, uma vez que ele não está incluso na sequência.      </li>
      <li>
Quando <code class="inline">n = 10</code>, exatamente 10 elementos devem ser exibidos.      </li>
      <li>
Adicione validações para garantir que o valor informado é um inteiro maior que 0.      </li>
    </ul>
  </li>
</ol>
</article><article class="c-daJEgu"><ol start="2">
  <li>
    <p>
Crie uma função que recebe três parâmetros e retorna uma <code class="inline">Promise</code>.    </p>
    <ul>
      <li>
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo <code class="inline">"Informe apenas números"</code>.      </li>
      <li>
Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro (<code class="inline">(a + b) * c</code>).      </li>
      <li>
Caso o resultado seja menor que 50, rejeite a Promise com o motivo <code class="inline">"Valor muito baixo"</code>      </li>
      <li>
Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.      </li>
    </ul>
  </li>
</ol>