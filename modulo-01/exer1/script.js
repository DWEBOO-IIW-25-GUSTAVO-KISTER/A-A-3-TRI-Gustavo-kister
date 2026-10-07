    const nome = "Gustavo Kister";
		const cidade = "Assis Chateaubriand";
		const anoNas = 2010;
		const anoAtual = 2026
		const idade = anoAtual - anoNas;

		const frase = `${nome} mora em ${cidade}, nasceu em ${anoNas} e tem ${idade} anos.`;

		console.log(frase);
		document.getElementById("resultado").textContent = frase;
