import { SectionTitle } from './SectionTitle';
import { CertificationCard } from '../cards';
import { certifications } from '../../data/portfolio';

export const Certifications = () => (
  <section id="certifications" className="mb-24 scroll-mt-20">
    <SectionTitle>Certifications</SectionTitle>
    <div>
      {certifications.map((certification) => (
        <CertificationCard key={certification.id} certification={certification} />
      ))}
    </div>
  </section>
);
