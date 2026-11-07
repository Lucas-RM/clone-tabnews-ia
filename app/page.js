const nomes = ["LUCAS", "LUIZA", "LORENZO", "LORENA", "DILMA"];

export default function Home() {
  return (
    <ul>
      {nomes.map((nome) => (
        <li key={nome}>{nome}</li>
      ))}
    </ul>
  );
}
