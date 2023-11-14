<div class="c-kWDhvw"><article class="c-daJEgu"><h1>
Exercícios - agora, a prática</h1>
<blockquote>
  <p>
🚀 <em>Se liga nesse foguete!</em>  </p>
  <p>
Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto!
Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀  </p>
</blockquote>
<p>
Parabéns, você mandou muito bem na refatoração!!!🎉</p>
<p>
Agora a empresa Trybecar confiou em você para criar mais alguns componentes e testes, para camada de model! Eles precisam que você forneça as seguintes funcionalidades que realizam acesso com o banco de dados:</p>
<p>
🎯 Listar todas as pessoas motoristas que estão cadastradas;
🎯 Encontrar uma pessoa motorista por meio do id;
🎯 Cadastrar uma pessoa motorista.</p>
<p>
Para isso, crie sua branch de exercícios a partir da branch deste <a target="_blank" href="https://github.com/tryber/trybecar/tree/2-live-lecture">repositório</a>.</p>
<blockquote>
  <p>
⚠️ <strong>Atenção:</strong> A resolução dos exercícios deste dia, será utilizada como base nos próximos, lembre-se de realizá-los. 😉  </p>
</blockquote>
</article><article class="c-daJEgu"><h2>
🚀 Exercício 1: Listar todas as pessoas motoristas que estão cadastradas</h2>
<p>
Aqui precisamos seguir alguns passos:</p>
<ul>
  <li>
Criar o model e a função <code class="inline">findAll</code>, responsável pelo acesso ao banco de dados em <code class="inline">src/models/driver.model.js</code>;  </li>
  <li>
Adicionar esta nova model no arquivo <code class="inline">src/models/index.js</code>;  </li>
  <li>
Criar o teste de unidade desta nova função em <code class="inline">tests/unit/models/driver.model.test.js</code> e seu respectivo <em>mock</em>.  </li>
</ul>
<p>
Na escrita dos testes de unidade, pode utilizar este dados como <em>mock</em>:</p>
</article><div class="c-jykYDu"><div class="c-fkerDR"><button type="button" class="c-gfRGUc">Copiar</button><pre style="color: rgb(248, 248, 242); background: rgb(39, 40, 34); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code class="language-js" style="color: rgb(248, 248, 242); background: none; text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">1</span><span class="token" style="color: rgb(248, 248, 242);">[</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">2</span><span>  </span><span class="token" style="color: rgb(248, 248, 242);">{</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">id</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(174, 129, 255);">1</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">name</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(166, 226, 46);">'Liana Cisneiros'</span><span> </span><span class="token" style="color: rgb(248, 248, 242);">}</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">3</span><span>  </span><span class="token" style="color: rgb(248, 248, 242);">{</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">id</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(174, 129, 255);">2</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">name</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(166, 226, 46);">'Fábio Frazão'</span><span> </span><span class="token" style="color: rgb(248, 248, 242);">}</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">4</span><span>  </span><span class="token" style="color: rgb(248, 248, 242);">{</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">id</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(174, 129, 255);">3</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">name</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(166, 226, 46);">'Anastácia Bicalho'</span><span> </span><span class="token" style="color: rgb(248, 248, 242);">}</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">5</span><span>  </span><span class="token" style="color: rgb(248, 248, 242);">{</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">id</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(174, 129, 255);">4</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">name</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(166, 226, 46);">'Samara Granjeiro'</span><span> </span><span class="token" style="color: rgb(248, 248, 242);">}</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">6</span><span>  </span><span class="token" style="color: rgb(248, 248, 242);">{</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">id</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(174, 129, 255);">5</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">name</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(166, 226, 46);">'Levi Teixeira'</span><span> </span><span class="token" style="color: rgb(248, 248, 242);">}</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">7</span><span></span><span class="token" style="color: rgb(248, 248, 242);">]</span></code></pre></div></div><article class="c-daJEgu"><h2>
🚀 Exercício 2: Encontrar uma pessoa motorista por meio do id</h2>
<p>
Aqui precisamos seguir alguns passos:</p>
<ul>
  <li>
Criar a função <code class="inline">findById</code>, responsável pelo acesso ao banco de dados em <code class="inline">src/models/driver.model.js</code>;  </li>
  <li>
Criar o teste de unidade desta nova função em <code class="inline">tests/unit/models/driver.model.test.js</code> e seu respectivo <em>mock</em>.  </li>
</ul>
<p>
Na escrita dos testes de unidade, pode utilizar este dados como <em>mock</em>:</p>
</article><div class="c-jykYDu"><div class="c-fkerDR"><button type="button" class="c-gfRGUc">Copiar</button><pre style="color: rgb(248, 248, 242); background: rgb(39, 40, 34); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code class="language-js" style="color: rgb(248, 248, 242); background: none; text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">1</span><span class="token" style="color: rgb(248, 248, 242);">{</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">id</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(174, 129, 255);">4</span><span class="token" style="color: rgb(248, 248, 242);">,</span><span> </span><span class="token literal-property" style="color: rgb(249, 38, 114);">name</span><span class="token" style="color: rgb(248, 248, 242);">:</span><span> </span><span class="token" style="color: rgb(166, 226, 46);">'Samara Granjeiro'</span><span> </span><span class="token" style="color: rgb(248, 248, 242);">}</span></code></pre></div></div><article class="c-daJEgu"><h2>
🚀 Exercício 3: Cadastrar uma pessoa motorista</h2>
<p>
Aqui precisamos seguir alguns passos:</p>
<ul>
  <li>
Criar a função <code class="inline">insert</code>, responsável pelo acesso ao banco de dados em <code class="inline">src/models/driver.model.js</code>;  </li>
  <li>
Criar o teste de unidade desta nova função em <code class="inline">tests/unit/models/driver.model.test.js</code> e seu respectivo <em>mock</em>.  </li>
</ul>
<p>
Na escrita dos testes de unidade, pode utilizar este dados como <em>mock</em>:</p>