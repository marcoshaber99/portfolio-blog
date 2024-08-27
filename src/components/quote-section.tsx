import BlurFade from "./magicui/blur-fade";

interface QuoteSectionProps {
  quote: string;
  author: string;
}

export default function QuoteSection({ quote, author }: QuoteSectionProps) {
  return (
    <BlurFade delay={0.2}>
      <section className="py-6 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-sm md:text-base font-light italic text-muted-foreground">
            <span className="text-blue-500">&ldquo;</span>{quote}<span className="text-blue-500">&rdquo;</span>
          </blockquote>
          <cite className="mt-2 block text-xs font-medium">— {author}</cite>
        </div>
      </section>
    </BlurFade>
  );
}