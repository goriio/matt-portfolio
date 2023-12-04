import { Container } from "./Container";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="hidden md:block md:fixed md:top-0 md:left-0 md:right-0 md:py-4 md:bg-gray-1/80 md:z-10">
      <Container>
        <Nav />
      </Container>
    </header>
  );
}
