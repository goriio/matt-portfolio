import { Container } from "./Container";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 bg-gray-1/80 z-10">
      <Container>
        <Nav />
      </Container>
    </header>
  );
}
