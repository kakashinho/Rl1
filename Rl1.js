const personagem0 = { 
    nome: 'Steve Rodgers', 
    codinome: 'Capitão América', 
    armaPrincipal: 'Escudo americano', 
    armaSecundaria: '', 
    velocidade: 90, 
    forca: 75, 
    resistencia: 80, 
    
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

const personagens = [personagem0, personagem1, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7];

var resultados = {};

for (let i = 0; i < personagens.length; i++) {
    if (!resultados[personagens[i].nome]) {
        resultados[personagens[i].nome] = {
            vencedor: [],
            perdedor: []
        };
    }

    for (let x = 0; x < personagens.length; x++) {
        if (x != i) {
            const comparacao_velocidade = personagens[i].velocidade - personagens[x].velocidade;
            const comparacao_forca = personagens[i].forca - personagens[x].forca;
            const comparacao_resistencia = personagens[i].resistencia - personagens[x].resistencia;

            let vencedor = '';
            let perdedor = '';

            if (comparacao_velocidade > 0 && comparacao_forca > 0) {
                vencedor = personagens[i].nome;
                perdedor = personagens[x].nome;
            } else if (comparacao_velocidade > 0 && comparacao_resistencia > 0) {
                vencedor = personagens[i].nome;
                perdedor = personagens[x].nome;
            } else if (comparacao_forca > 0 && comparacao_resistencia > 0) {
                vencedor = personagens[i].nome;
                perdedor = personagens[x].nome;
            } else {
                vencedor = personagens[x].nome;
                perdedor = personagens[i].nome;
            }

            if (!resultados[vencedor]) {
                resultados[vencedor] = { vencedor: [], perdedor: [] };
            }
            if (!resultados[perdedor]) {
                resultados[perdedor] = { vencedor: [], perdedor: [] };
            }

            if (vencedor && perdedor) {
                resultados[vencedor].vencedor.push(perdedor);
                resultados[perdedor].perdedor.push(vencedor);
            }
        }
    }
}

// Exibindo os resultados no console
console.log(JSON.stringify(resultados, null, 2));
