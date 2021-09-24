# Primeiro passo:

### Toda vez que fizermos uma atualização na main, vocês terão que fazer os seguintes passos
##### Primeiro certifique-se que você está na sua Branch, caso não esteja, dê o comando (git checkout *Seu_Nome*)
##### Em sequência dê (git pull main) e assim ele puxará todos os arquivos da main
##### Assim os arquivos estarão atualizados.

# Segundo passo:

### Agora beleza, você atualizou seus arquivos e começou a codar...
#### Como que eu faço um *commit* de algo importante que eu fiz?
#### Primeiro vamos adicionar tudo o que você fez com (git add .)
#### Agora que adicionamos os arquivos vamos fazer um *commit* deles

# Terceiro passo:

### Então vamos lá o que o seu *commit* deve ter:
#### Algum propósito dela existir ou seja você mudou alguma coisa
#### Então coloque esse propósito na mensagem junto ao *commit*
#### BOAS PRATICAS: Vamos tentar usar as tags da própria Mega
#### Então beleza como faz um *commit* (git commit -m "mensagem do commit")

# Quarto passo:

### Depois que você fizer todas as suas alterações ou seja seus *commits* você vai empurrar para o Github
#### Quando você for empurrar para o github olhe novamente se você está na SUA Branch
#### Caso sim, então empurre para o github (git push origin Seu_Nome)

# Quinto passo:

### Repita o processo até o dia que formos reunir tudo junto

# Sexto passo:

### Passo final
#### Quando dermos merge precisamos ter certeza que não dará nenhum erro
#### Pra isso no pull resquest tenha certeza que o github diz que não há nenhum erro
#### Caso não haja erros ai sim, dê merge caso contrário vamos reunir a equipe para ver o erro e resolve-lo


# Comandos do git puro:

### git add .
#### Para adicionar todos os arquivos de pastas e subpastas, além de suas modificações

### git status
#### Para saber os status da sua branch
#### Caso tenha algo para adicionar ou commitar ou para empurrar se tiver tudo certo

### git commit -m "Mensagem do Commit"
#### Isso faz um commit com os arquivos adicionados pelo *git add .*
#### É importante fazer 1 commit por função ou por alteração de arquivo
#### Caso você altere alguma coisa em algum arquivo e depois adicione alguma função
#### O ideal seria 1 commit para falar sobre as alterações e outro commit só para a função

### git push origin Seu_Nome
#### O Push serve para empurrar os arquivos da sua Branch para o github
#### Se der algum tipo de erro manda mensagem no grupo para que nos possamos juntos resolver

### git pull origin main
#### O pull irá puxar os arquivos da main branch do github
#### Assim os arquivos da sua branch estarão atualizados
#### E mais tarde quando você for empurrar os arquivos para o github isso evitará problemas

### git remote add origin Sua_Chave_SSH
#### Para adicionar um acesso remoto via chave SSH para poder usa-lá depois



