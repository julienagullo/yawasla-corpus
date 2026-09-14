"use client";

import Link from "next/link";
import { padId, titreSourate, type Sourate } from "@/data/summary";
import { useLangue } from "@/components/LangueProvider";

export default function ListeSourates({ sourates }: { sourates: Sourate[] }) {
  const { langue } = useLangue();

  return (
    <ul className="list-unstyled">
      {sourates.map((sourate) =>
        sourate.disponible ? (
          <li key={sourate.id} className="mb-2">
            <Link href={`/sourate/${padId(sourate.id)}/${sourate.slug}`} className="text-decoration-none text-body">
              <span className="text-muted me-2">{sourate.id}.</span>
              {titreSourate(sourate, langue)}
            </Link>
          </li>
        ) : (
          <li key={sourate.id} className="mb-2 text-muted">
            <span aria-disabled="true">
              <span className="me-2">{sourate.id}.</span>
              {titreSourate(sourate, langue)}
            </span>
          </li>
        )
      )}
    </ul>
  );
}
