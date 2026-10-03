import { Props } from "./types";
import { PlusSVG } from "../../sub-components/icons";

/** Escapes "<" so the JSON-LD payload can never close its <script> tag early. */
function safeJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function CkFaq({
  title,
  subtitle,
  emitSchema = true,
  q1,
  a1,
  q2,
  a2,
  q3,
  a3,
  q4,
  a4,
  q5,
  a5,
  q6,
  a6,
}: Props) {
  const items = [
    [q1, a1],
    [q2, a2],
    [q3, a3],
    [q4, a4],
    [q5, a5],
    [q6, a6],
  ].filter(([q, a]) => q && a) as [string, string][];

  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="ck-faq">
      <div className="kombos-container ck-faq__inner">
        <header className="ck-faq__header">
          {title && <h2 className="ck-faq__title display-xs-semibold md:display-sm-semibold">{title}</h2>}
          {subtitle && <p className="ck-faq__subtitle text-md-regular">{subtitle}</p>}
        </header>

        <div className="ck-faq__list">
          {items.map(([q, a], i) => (
            <details className="ck-faq__item" key={i}>
              <summary className="ck-faq__question text-md-semibold">
                <span>{q}</span>
                <span className="ck-faq__toggle" aria-hidden="true">
                  <PlusSVG />
                </span>
              </summary>
              <p className="ck-faq__answer text-sm-regular md:text-md-regular">{a}</p>
            </details>
          ))}
        </div>
      </div>

      {emitSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(schema) }}
        />
      )}
    </section>
  );
}

export default CkFaq;
