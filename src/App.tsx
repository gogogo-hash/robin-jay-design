import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Review from "./components/Review";
import Price from "./components/Price";
import PriceList from "./components/PriceList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Container } from "./components/ui/Container";
import { site } from "./data/site";

function App() {
  return (
    <>
      <Container size="wide">
        <Header name={site.name} nav={site.nav} />
      </Container>
      <main>
        <Container>
          <Hero
            title={site.hero.title}
            subtitle={site.hero.subtitle}
            logo={site.logo}
          />
        </Container>
        <Container>
          <Work
            items={site.works.items}
            title={site.works.title}
            subtitle={site.works.subtitle}
            sectionId={site.works.sectionId}
            filters={site.works.filters}
          />
        </Container>
        <Container>
          <About
            title={site.about.title}
            sectionId={site.about.sectionId}
            paragraphs={site.about.paragraphs}
            photo={site.about.photo}
            photoAlt={site.about.photoAlt}
          />
        </Container>
        <Container>
          <Review
            title={site.reviews.title}
            subtitle={site.reviews.subtitle}
            reviews={site.reviews.items}
          />
        </Container>
        <Container>
          <Price
            title={site.pricing.title}
            subtitle={site.pricing.subtitle}
            sectionId={site.pricing.sectionId}
          />
        </Container>
        <Container size="wide">
          <PriceList photo={site.pricing.photo} />
        </Container>
        <Container>
          <Contact
            title={site.contact.title}
            subtitle={site.contact.subtitle}
            sectionId={site.contact.sectionId}
            fields={site.contact.fields}
            submitLabel={site.contact.submitLabel}
            formAction={site.contact.formAction}
          />
        </Container>
      </main>
      <Container size="wide">
        <Footer copyright={site.footer.copyright} links={site.links} />
      </Container>
    </>
  );
}

export default App;
