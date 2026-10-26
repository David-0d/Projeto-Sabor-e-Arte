function pedir(item) {
    const telefone = "5511999999999"; // Substitua pelo seu número
    const mensagem = `Olá, gostaria de pedir: ${item}`;
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, '_blank');
}