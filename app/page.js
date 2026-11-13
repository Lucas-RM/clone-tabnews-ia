import { Suspense } from "react";
import Confetti from "./confetti";

export const dynamic = "force-dynamic";

const TABNEWS_URL = "https://www.tabnews.com.br";
const TIMEOUT_MS = 3000;

async function getTotalConteudos() {
  try {
    const response = await fetch(
      `${TABNEWS_URL}/api/v1/contents?per_page=1&strategy=new`,
      { cache: "no-store", signal: AbortSignal.timeout(TIMEOUT_MS) },
    );
    if (!response.ok) return null;
    const total = Number(response.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

async function TotalConteudos() {
  const total = await getTotalConteudos();

  return total === null
    ? "Não foi possível obter o total de conteúdos publicados no TabNews."
    : `${total.toLocaleString("pt-BR")} conteúdos publicados no TabNews`;
}

export default function Home() {
  return (
    <main>
      <Confetti />
      <h1>Em Construção</h1>
      <p className="frase">
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto
      </p>
      <p className="total">
        <Suspense fallback="Carregando total de conteúdos…">
          <TotalConteudos />
        </Suspense>
      </p>
      <a href={TABNEWS_URL} target="_blank" rel="noopener noreferrer">
        Visite o TabNews oficial
      </a>
    </main>
  );
}
