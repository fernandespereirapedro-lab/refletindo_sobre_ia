const names = ["tuniqo", "bogagelado", "tatu", "guilherme", "Everson", "Bolacha", "Beto"];

export function aleatorio (lista){
  const posicao = Math.floor(Math.random()* lista.length);
  return  lista[posicao];
}

export const nome = aleatorio(nome)

