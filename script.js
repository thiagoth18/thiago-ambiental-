const caixaPrincipal = documento . querySelector ( ".caixa-principal" ) ;
const caixaPerguntas = documento . querySelector ( ".caixa-perguntas" ) ;
const caixaAlternativas = documento . querySelector ( ".caixa-alternativas" ) ;
const caixaResultado = documento . querySelector ( ".caixa-resultado" ) ;
const textoResultado = documento . querySelector ( ".texto-resultado" ) ;

const perguntas = [
{
enunciado : "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?" ,
alternativas : [
"Isso é mentira!" ,
"Isso é maravilhoso!"
]
} ,
{
enunciado : "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula .Qual atitude você toma?" ,
alternativas : [
"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique em uma linguagem que facilite o entendimento." ,
"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
]
} ,
{
enunciado : "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantada um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?
" ,
alternativas : [
"Defenda a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas." ,
“Eu me preocupo com as pessoas que perderão seus empregos para máquinas e defenderão a importância de proteger os trabalhadores.”
]
} ,
{
enunciado : "Ao final da discussão, você precisau criar uma imagem no computador que represente o que pensa sobre IA. E agora?" ,
alternativas : [
"Criar uma imagem utilizando uma plataforma de design como o Paint." ,
"Criar uma imagem utilizando um gerador de imagem de IA."
]
} ,
{
enunciado : "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat . O que você faz?
alternativas : [
"Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema usar o texto inteiro." ,
"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, para isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
]
}
]

deixe atual = 0 ;
deixe perguntaAtual ;

função mostraPergunta ( ) {
perguntaAtual = perguntas [ atual ] ;
caixaPerguntas . textContent = perguntaAtual . anunciado ;
mostraAlternativas ( ) ;
}
função mostraAlternativas ( ) {
for ( const alternativa de perguntaAtual . alternativas ) {
const botaoAlternativas = document . createElement ( "button" ) ;
botaoAlternativa . textContent = alternativa ;
caixaAlternativas . appendChild ( botaoAlternativas ) ;
}
}
...

[Mensagem cortada]  Exibir toda a mensagem
