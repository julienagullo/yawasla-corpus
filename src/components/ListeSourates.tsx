import Link from "next/link";
import { padId, titreSourate, type Sourate } from "@/data/summary";
import type { Langue } from "@/conf/types";
import { urlPourLangue } from "@/conf/locale";

export default function ListeSourates({ sourates, langue }: { sourates: Sourate[]; langue: Langue }) {
  return (
    <ul className="list-unstyled">
      {sourates.map((sourate) =>
        sourate.disponible ? (
          <li key={sourate.id} className="mb-2">
            <Link
              href={urlPourLangue(`/sourate/${padId(sourate.id)}/${sourate.slug}`, langue)}
              className="sourate-lien text-decoration-none"
            >
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
