import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <div className="pt-[68px]">
      <Container className="py-24 text-center sm:py-32">
        <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-brand">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          This page checked out.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <a href="/" className="btn-primary mt-8">
          Back to home
        </a>
      </Container>
    </div>
  );
}
