import Link from "next/link";

export default function Home() {
  return (
    <div class="homepage-buttons">
      <Link href='Faro-Economic-Whitepaper.pdf'>
        <button class="button button1 enter"><b>Economic Whitepaper</b></button>
      </Link>
      <Link href='Faro-Technical-Whitepaper.pdf' passHref>
        <button class="button button2 draw"><b>Technical Whitepaper</b></button>
      </Link>
    </div>
  );
}