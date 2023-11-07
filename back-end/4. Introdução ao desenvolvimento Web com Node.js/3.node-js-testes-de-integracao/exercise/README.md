<div class="c-kWDhvw"><article class="c-daJEgu"><h1>
Exercícios - agora, a prática</h1>
<p>
Clientes da nossa API Cacau Trybe querem mais informações sobre os chocolates e cabe à você como pessoa desenvolvedora de back-end, criar mais três endpoints, para isso, utilize a técnica de TDD!</p>
</article><article class="c-daJEgu"><p>
<strong>GET <code class="inline">/chocolates/total</code> : Quantidade total de chocolates</strong></p>
<ul>
  <li>
Esse endpoint deve retornar a quantidade de tipos de chocolates que existem na base de dados, usando o seguinte contrato:  </li>
</ul>
<p>
👉 <strong>GET</strong> <em><code class="inline">/chocolates/total</code></em></p>
<ul>
  <li>
Objetivo: Retornar a quantidade de tipos de chocolates que existem.  </li>
  <li>
Código HTTP: <code class="inline">200 - OK</code>;  </li>
  <li>
Body (exemplo):  </li>
</ul>
</article><div class="c-jykYDu"><div class="c-fkerDR"><button type="button" class="c-gfRGUc">Copiar</button><pre style="color: rgb(248, 248, 242); background: rgb(39, 40, 34); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code class="language-json" style="color: rgb(248, 248, 242); background: none; text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">1</span><span class="token" style="color: rgb(248, 248, 242);">{</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">2</span><span>  </span><span class="token" style="color: rgb(249, 38, 114);">"totalChocolates"</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(174, 129, 255);">4</span><span> </span><span class="token" style="color: rgb(130, 146, 162);">// quantidade de chocolates na base de dados</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">3</span><span></span><span class="token" style="color: rgb(248, 248, 242);">}</span></code></pre></div></div><article class="c-daJEgu">
<h2>
Exercício 1</h2>
<p>
Crie os testes de integração para o endpoint GET <code class="inline">/chocolates/total</code></p>
<ul>
  <li>
Crie um caso para o código retornado  </li>
  <li>
Crie outro caso para o retorno esperado  </li>
</ul>
<p>
<strong>Atenção:</strong> Observe que os testes devem falhar por enquanto, como estamos desenvolvendo usando o conceito de TDD, mas não se preocupe que na sequência vamos fazer a implementação e os testes deverão passar. 👍</p>
<h2>
Exercício 2</h2>
<p>
Implemente o endpoint GET <code class="inline">/chocolates/total</code> na aplicação</p>
<ul>
  <li>
Crie um novo endpoint retornando o total de chocolates na base de dados  </li>
  <li>
Depois de implementar, verifique se os testes passam com sucesso  </li>
</ul>