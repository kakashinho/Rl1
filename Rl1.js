//Criando Objeto chamado personagem0 e guardando em uma constante
const personagem0 = { 
    nome: 'Steve Rodgers', //propriedades do Objeto -> nome, codinome, armaPrincipal ...
    codinome: 'Capitão América', 
    armaPrincipal: 'Escudo americano', 
    armaSecundaria: '', 
    velocidade: 90, 
    forca: 75, 
    resistencia: 80, 
    
    //Essa função auxilia retornar a descrição inteira do objeto
    descricao: function() { 
        return `Nome do personagem: ${this.nome}\n` + 
               `Codinome do personagem: ${this.codinome}\n` + 
               `Arma principal: ${this.armaPrincipal}\n` + 
               `Arma secundária: ${this.armaSecundaria}\n` + 
               `Nível de força: ${this.forca}\n` + 
               `Nível de velocidade: ${this.velocidade}\n` + 
               `Nível de resistência: ${this.resistencia}\n` 
    } 
};

const personagem1 = {     
    nome: 'Tony Stark',     
    codinome: 'Homem de Ferro',     
    armaPrincipal: 'Armadura de Ferro',     
    armaSecundaria: 'Repulsor',     
    velocidade: 85,     
    forca: 70,     
    resistencia: 90,     
    descricao: function(){         
        return 'Nome do personagem: ' + this.nome + '\n'         
        + 'Codinome do personagem: ' + this.codinome + '\n'         
        + 'Arma principal: ' + this.armaPrincipal + '\n'         
        + 'Arma secundária: ' + this.armaSecundaria + '\n'         
        + 'Nível de força: ' + this.forca + '\n'         
        + 'Nível de velocidade: ' + this.velocidade + '\n'         
        + 'Nível de resistência: ' + this.resistencia + '\n'     
    } 
};

const personagem2 = {     
    nome: 'Natasha Romanoff',     
    codinome: 'Viúva Negra',     
    armaPrincipal: 'Espadas',     
    armaSecundaria: 'Pistolas',     
    velocidade: 95,     
    forca: 60,     
    resistencia: 80,     
    descricao: function(){         
        return 'Nome do personagem: ' + this.nome + '\n'         
        + 'Codinome do personagem: ' + this.codinome + '\n'         
        + 'Arma principal: ' + this.armaPrincipal + '\n'         
        + 'Arma secundária: ' + this.armaSecundaria + '\n'         
        + 'Nível de força: ' + this.forca + '\n'         
        + 'Nível de velocidade: ' + this.velocidade + '\n'         
        + 'Nível de resistência: ' + this.resistencia + '\n'     
    } 
};

const personagem3 = {     
    nome: 'Thor Odinson',     
    codinome: 'Thor',     
    armaPrincipal: 'Mjolnir',     
    armaSecundaria: 'Raio de trovão',     
    velocidade: 80,     
    forca: 100,     
    resistencia: 95,     
    descricao: function(){         
        return 'Nome do personagem: ' + this.nome + '\n'         
        + 'Codinome do personagem: ' + this.codinome + '\n'         
        + 'Arma principal: ' + this.armaPrincipal + '\n'         
        + 'Arma secundária: ' + this.armaSecundaria + '\n'         
        + 'Nível de força: ' + this.forca + '\n'         
        + 'Nível de velocidade: ' + this.velocidade + '\n'         
        + 'Nível de resistência: ' + this.resistencia + '\n'     
    } 
};

const personagem4 = {     
    nome: 'Bruce Banner',     
    codinome: 'Hulk',     
    armaPrincipal: 'Força bruta',     
    armaSecundaria: '',     
    velocidade: 70,     
    forca: 100,     
    resistencia: 95,     
    descricao: function(){         
        return 'Nome do personagem: ' + this.nome + '\n'         
        + 'Codinome do personagem: ' + this.codinome + '\n'         
        + 'Arma principal: ' + this.armaPrincipal + '\n'         
        + 'Arma secundária: ' + this.armaSecundaria + '\n'         
        + 'Nível de força: ' + this.forca + '\n'         
        + 'Nível de velocidade: ' + this.velocidade + '\n'         
        + 'Nível de resistência: ' + this.resistencia + '\n'     
    } 
};

const personagem5 = {     
    nome: 'Clint Barton',     
    codinome: 'Gavião Arqueiro',     
    armaPrincipal: 'Arco e flechas',     
    armaSecundaria: 'Facas',     
    velocidade: 90,     
    forca: 60,     
    resistencia: 70,     
    descricao: function(){         
        return 'Nome do personagem: ' + this.nome + '\n'         
        + 'Codinome do personagem: ' + this.codinome + '\n'         
        + 'Arma principal: ' + this.armaPrincipal + '\n'         
        + 'Arma secundária: ' + this.armaSecundaria + '\n'         
        + 'Nível de força: ' + this.forca + '\n'         
        + 'Nível de velocidade: ' + this.velocidade + '\n'         
        + 'Nível de resistência: ' + this.resistencia + '\n'    
    } 
};

const personagem6 = {     
    nome: 'Wanda Maximoff',     
    codinome: 'Feiticeira Escarlate',     
    armaPrincipal: 'Magia',     
    armaSecundaria: 'Telecinese',     
    velocidade: 75,     
    forca: 85,     
    resistencia: 80,     
    descricao: function(){         
        return 'Nome do personagem: ' + this.nome + '\n'         
        + 'Codinome do personagem: ' + this.codinome + '\n'         
        + 'Arma principal: ' + this.armaPrincipal + '\n'         
        + 'Arma secundária: ' + this.armaSecundaria + '\n'         
        + 'Nível de força: ' + this.forca + '\n'         
        + 'Nível de velocidade: ' + this.velocidade + '\n'         
        + 'Nível de resistência: ' + this.resistencia + '\n'     
    } 
};

const personagem7 = {     
    nome: 'Thanos',     
    codinome: 'Thanos',     
    armaPrincipal: 'Manopla do Infinito',     
    armaSecundaria: '',     
    velocidade: 60,     
    forca: 100,     
    resistencia: 100,     
    descricao: function(){         
        return 'Nome do personagem: ' + this.nome + '\n'         
        + 'Codinome do personagem: ' + this.codinome + '\n'         
        + 'Arma principal: ' + this.armaPrincipal + '\n'         
        + 'Arma secundária: ' + this.armaSecundaria + '\n'         
        + 'Nível de força: ' + this.forca + '\n'         
        + 'Nível de velocidade: ' + this.velocidade + '\n'         
        + 'Nível de resistência: ' + this.resistencia + '\n'     
    } 
};

//Criei um array dos personagens
const personagens = [personagem0, personagem1, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7];

//percorrendo todos os personagens e comparando com os outros 7 personagens
for (let i = 0; i < personagens.length; i++) {
    let vitorias = 0
    for (let x = 0; x < personagens.length; x++) {
        if (x != i) {
            const dif_velocidade = Math.sign(personagens[i].velocidade - personagens[x].velocidade)
            const dif_forca = Math.sign(personagens[i].forca - personagens[x].forca)
            const dif_resistencia = Math.sign(personagens[i].resistencia - personagens[x].resistencia)

            // Situações:    Velocidade     forca       resistencia       Somatória     
            // Empatou          0             0             0                0                   
            // Ganhou           1             1             1                3                   
            // Perdeu          -1            -1            -1               -3
            // Empatou         -1             1             0                0
            // Ganhou           1             1            -1                1
            // Empatou          1            -1             0                0
            // Perdeu          -1            -1             1               -1                                            

            let pontuacao = dif_velocidade + dif_forca + dif_resistencia

            if (pontuacao > 0){
                console.log(personagens[i].nome + ' vs ' + personagens[x].nome+': ganhou '+ personagens[i].nome)
                vitorias += 1
            }
            else if (pontuacao === 0){console.log(personagens[i].nome + ' vs ' + personagens[x].nome+': empate')}  
            else if (pontuacao < 0){console.log(personagens[i].nome + ' vs ' + personagens[x].nome+': perdeu '+ personagens[i].nome)}
        }
    }
    console.log(personagens[i].nome+' Número de vitórias: '+vitorias)
    console.log()
}

